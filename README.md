# Quizzers

An interactive quiz game with built-in quizzes and AI-generated multiple-choice practice. The AI quiz endpoint is served by a small Node.js backend; the Gemini API key stays on the server and is never sent to the browser.

## Run Quizzers locally

1. Install [Node.js 20 or newer](https://nodejs.org/).
2. From the project folder, install dependencies:

   ```powershell
   npm install
   ```

3. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey).
4. Create a private environment file and add your key:

   ```powershell
   Copy-Item .env.example .env
   ```

   Open `.env` and replace `your_google_ai_studio_api_key` with your key. Never commit or share `.env`.
5. Start the application:

   ```powershell
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000). Create a local demo account and log in to reach the quiz page, or open [http://localhost:3000/MAIN/mainpage.html](http://localhost:3000/MAIN/mainpage.html) directly while developing. Choose **Generate Quiz with AI** to select a topic, difficulty, and question count.

The default model is `gemini-3.8-flash`, which uses Google's Interactions API. If that model is unavailable to your API project, set `GEMINI_MODEL` in `.env` to a model enabled for your key. Google AI Studio/API access can have quotas, rate limits, or charges; check your project's current usage and billing limits. The app additionally limits each IP address to five generation requests per 15 minutes.

If Gemini returns HTTP 400 and reports that unrestricted API keys are not supported, create a current key in [Google AI Studio](https://aistudio.google.com/apikey) or restrict a standard key to the Gemini API. Replace `GEMINI_API_KEY` in `.env` and restart the server. Never paste the key into chat or commit it to Git.

## Test

Run the backend validation and rate-limit tests with:

```powershell
npm test
```

The frontend pages and static assets are served by the same local server. Opening the HTML files directly with `file://` will not work for AI generation because the browser must call the local backend.
