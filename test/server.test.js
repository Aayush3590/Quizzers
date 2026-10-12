import assert from "node:assert/strict";
import { test } from "node:test";
import { createApp, generateWithGemini } from "../server.js";

const validRequest = {
    topic: "Java",
    difficulty: "Medium",
    questionCount: 5,
};

function makeQuiz({ count = 5, topic = "Java", difficulty = "Medium" } = {}) {
    return {
        questions: Array.from({ length: count }, (_, index) => ({
            question: `Which Java concept is being tested in question ${index + 1}?`,
            options: ["first", "second", "third", "fourth"],
            correctAnswer: "second",
            explanation: "This option correctly describes the concept.",
            topic,
            difficulty,
        })),
    };
}

async function withServer(generateQuestions, callback) {
    const server = createApp({ generateQuestions }).listen(0);
    await new Promise((resolve) => server.once("listening", resolve));
    const address = server.address();

    try {
        await callback(`http://127.0.0.1:${address.port}`);
    } finally {
        server.closeAllConnections();
        await new Promise((resolve, reject) => {
            server.close((error) => error ? reject(error) : resolve());
        });
    }
}

async function postQuiz(baseUrl, body = validRequest) {
    const response = await fetch(`${baseUrl}/api/generate-quiz`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/event-stream")) {
        return { response, payload: await response.json(), events: [] };
    }

    const bodyText = await response.text();
    const events = bodyText.trim().split(/\r?\n\r?\n/).map((chunk) => {
        const data = chunk.split(/\r?\n/).find((line) => line.startsWith("data:"));
        return JSON.parse(data.slice(5).trimStart());
    });
    return { response, payload: events.find((event) => event.type === "complete")?.quiz, events };
}

test("validates request fields and resolves custom topics", async () => {
    const received = [];
    await withServer(async (request) => {
        received.push(request);
        return makeQuiz(request);
    }, async (baseUrl) => {
        const { response: invalidResponse } = await postQuiz(baseUrl, { ...validRequest, questionCount: 6 });
        assert.equal(invalidResponse.status, 400);

        const { response: customResponse, payload } = await postQuiz(baseUrl, {
            topic: "Custom",
            customTopic: "  Ocean ecosystems  ",
            difficulty: "Easy",
            questionCount: 5,
        });
        assert.equal(customResponse.status, 200);
        assert.equal(received[0].topic, "Ocean ecosystems");
        assert.equal(payload.questions.length, 5);
        assert.equal(payload.questions[0].topic, "Ocean ecosystems");
    });
});

test("uses Gemini Interactions API with JSON response schema", async () => {
    let generationRequest;
    const progressUpdates = [];
    const expectedQuiz = makeQuiz();
    const client = {
        interactions: {
            create(request) {
                generationRequest = request;
                const serializedQuiz = JSON.stringify(expectedQuiz);
                const chunks = [`{"questions":[`, ...expectedQuiz.questions.map((question, index) => (
                    `${index > 0 ? "," : ""}${JSON.stringify(question)}`
                )), `]}`];
                assert.equal(chunks.join(""), serializedQuiz);
                return (async function* () {
                    for (const chunk of chunks) {
                        yield { data: { event_type: "step.delta", delta: { type: "text", text: chunk } } };
                    }
                })();
            },
        },
    };

    const quiz = await generateWithGemini(validRequest, (count) => progressUpdates.push(count), client);

    assert.deepEqual(quiz, expectedQuiz);
    assert.equal(generationRequest.model, "gemini-3.8-flash");
    assert.match(generationRequest.input, /5 distinct multiple-choice quiz questions/);
    assert.equal(generationRequest.stream, true);
    assert.equal(generationRequest.response_format.mime_type, "application/json");
    assert.equal(generationRequest.response_format.schema.properties.questions.type, "array");
    assert.deepEqual(progressUpdates, [1, 2, 3, 4, 5]);
    assert.deepEqual(
        generationRequest.response_format.schema.properties.questions.items.required,
        ["question", "options", "correctAnswer", "explanation", "topic", "difficulty"],
    );
});

test("rejects generated questions with invalid option or answer shapes", async () => {
    await withServer(async () => ({
        questions: [{
            ...makeQuiz().questions[0],
            options: ["one", "two", "three", "two"],
            correctAnswer: "missing",
        }, ...makeQuiz().questions.slice(1)],
    }), async (baseUrl) => {
        const { response, events } = await postQuiz(baseUrl);
        assert.equal(response.status, 200);
        assert.match(events.find((event) => event.type === "error").error, /invalid quiz/i);
    });
});

test("streams generated-question progress before the completed quiz", async () => {
    await withServer(async (_request, onProgress) => {
        onProgress(1);
        onProgress(2);
        return makeQuiz();
    }, async (baseUrl) => {
        const { response, payload, events } = await postQuiz(baseUrl);
        assert.equal(response.status, 200);
        assert.deepEqual(events.map((event) => event.type), ["progress", "progress", "complete"]);
        assert.deepEqual(events.slice(0, 2).map((event) => event.generatedCount), [1, 2]);
        assert.equal(payload.questions.length, 5);
    });
});

test("explains Gemini bad-request errors without exposing provider details", async () => {
    const originalApiKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = "test-key";
    try {
        await withServer(async () => {
            const error = new Error("Provider details must not be sent to the browser.");
            error.status = 400;
            throw error;
        }, async (baseUrl) => {
            const { response, events } = await postQuiz(baseUrl);
            assert.equal(response.status, 200);
            const payload = events.find((event) => event.type === "error");
            assert.match(payload.error, /API key is valid and enabled/);
            assert.doesNotMatch(payload.error, /Provider details|test-key/);
        });
    } finally {
        if (originalApiKey === undefined) {
            delete process.env.GEMINI_API_KEY;
        } else {
            process.env.GEMINI_API_KEY = originalApiKey;
        }
    }
});

test("identifies rejected unrestricted Gemini API keys", async () => {
    const originalApiKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = "test-key";
    try {
        await withServer(async () => {
            const error = new Error("API keys with no key restrictions are not supported.");
            error.status = 400;
            throw error;
        }, async (baseUrl) => {
            const { response, events } = await postQuiz(baseUrl);
            assert.equal(response.status, 200);
            const payload = events.find((event) => event.type === "error");
            assert.match(payload.error, /Google AI Studio/);
            assert.match(payload.error, /restrict the standard key to the Gemini API/);
            assert.doesNotMatch(payload.error, /no key restrictions/);
        });
    } finally {
        if (originalApiKey === undefined) {
            delete process.env.GEMINI_API_KEY;
        } else {
            process.env.GEMINI_API_KEY = originalApiKey;
        }
    }
});

test("reports missing Gemini configuration without calling the SDK", async () => {
    const previousApiKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    try {
        await withServer(undefined, async (baseUrl) => {
            const { response, payload } = await postQuiz(baseUrl);
            assert.equal(response.status, 503);
            assert.match(payload.error, /GEMINI_API_KEY/);
        });
    } finally {
        if (previousApiKey === undefined) {
            delete process.env.GEMINI_API_KEY;
        } else {
            process.env.GEMINI_API_KEY = previousApiKey;
        }
    }
});

test("limits quiz generation to five requests per fifteen minutes", async () => {
    await withServer(async (request) => makeQuiz(request), async (baseUrl) => {
        for (let index = 0; index < 5; index++) {
            const { response } = await postQuiz(baseUrl);
            assert.equal(response.status, 200);
        }
        const { response: limitedResponse } = await postQuiz(baseUrl);
        assert.equal(limitedResponse.status, 429);
    });
});
