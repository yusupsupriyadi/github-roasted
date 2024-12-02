# Github Roasted Documentation

## Project Description

Github Roasted is a web application that uses Gemini AI to analyze and provide humorous "roasting" of GitHub user profiles. This application is created for entertainment purposes and offers a fun perspective on someone's GitHub activity.

## Core Technologies

-   **Framework:** Remix (v2.15.0)
-   **UI Library:** React (v18.2.0)
-   **Styling:** Tailwind CSS (v3.4.4)
-   **AI:** Google Generative AI (v0.21.0)
-   **HTTP Client:** Axios (v1.7.8)
-   **Animation:** Framer Motion (v11.12.0)

## System Requirements

-   Node.js ≥ 20.0.0
-   Gemini AI API Key

## Installation

1. Clone repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Copy .env.example to .env and fill in your Gemini AI API key

## Available Commands

-   `npm run dev` - Run application in development mode
-   `npm run build` - Build application for production
-   `npm start` - Run built application
-   `npm run typecheck` - Check TypeScript types
-   `npm run lint` - Run ESLint

## Key Features

-   GitHub username input with validation
-   GitHub profile data fetching including:
    -   Repositories
    -   Contributions
    -   Activity
    -   Profile statistics
-   Roast generation using Gemini AI with in-depth analysis
-   Responsive UI with spotlight animation and hover effects
-   Terminal-style display for roasting results
-   Dark/light mode
-   Interactive loading states

## Project Structure

-   **app/routes/\_index.tsx** - Main application page
-   **app/routes/api.roasting.tsx** - Gemini AI API endpoint
-   **tailwind.config.ts** - Tailwind CSS configuration
-   **vite.config.ts** - Vite & Remix configuration

## Environment Configuration

Create .env file with the following variable:

```env
API_KEY_GEMINI_AI=your_api_key_here
```

## API Usage

### Gemini AI

```typescript
POST /api/roasting
Body: {
    "username": "string"
}
Response: {
    "roast": "string",
    "analysis": "object"
}
```

### GitHub API

```typescript
GET /api/github/{username}
Response: {
    "profile": "object",
    "repos": "array",
    "stats": "object"
}
```

## Troubleshooting

### Common Issues

-   **Rate Limiting**: Wait a few minutes if you hit GitHub API rate limits
-   **Invalid API Key**: Ensure your Gemini AI API key is correct in .env file
-   **Network Error**: Check your internet connection

## Contributing

1. Fork this repository
2. Create a new feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

-   Email: your.email@example.com
-   GitHub: [@username](https://github.com/username)
-   Twitter: [@username](https://twitter.com/username)
-   LinkedIn: [Your Name](https://linkedin.com/in/yourname)

## Gemini AI Implementation

### Setup
```typescript
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI_AI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

### Basic Usage
```typescript
// Generate roast content
async function generateRoast(githubData) {
    const prompt = `Analyze this GitHub profile: ${JSON.stringify(githubData)}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}
```

### Model Options
Available Gemini models:
- **gemini-1.5-flash**: Fastest and most cost-efficient for high-frequency tasks
- **gemini-1.5-pro**: Best performing model for complex reasoning
- **gemini-1.5-flash-8b**: Balanced performance for most tasks

### Safety Settings
```typescript
const safetySettings = [
    {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
    }
];

const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    safetySettings
});
```
