# CircuitAI: AI ChatBot Assistant with OpenAI GPT-3 model

CircuitAI is a case study of a full-stack web application featuring a chatbot assistant powered by the OpenAI API.

- Used Davinci AI model that can understand user questions and generate natural language responses.
- Utilized Next.js v13 with the experimental appDirectory feature and TypeScript on the front-end, with Upstash and Redis for serverless back-end functionality. 
- Implemented OAuth for user authentication and Pusher Channels for real-time messaging. 
- Used SWR for efficient data fetching and caching. 
- Styled the application with Tailwind CSS. 
- Utilized Framer Motion to create interactive and animated UI components.
- Set up continuous integration and deployment using GitHub Actions
- This project allowed me to explore the capabilities of artificial intelligence in web development and gain experience with serverless architecture and real-time communication.

![smartmockups_lbmljzkr](https://user-images.githubusercontent.com/42308135/207423426-f4a460d0-3755-4012-bfcd-3342ce1a4fc5.jpg)

🔗 [Open live Demo](https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app)

## Tech Stack

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- OpenAI API, GPT-3 models
- SWR (stale-while-revalidate)
- Upstash
- Redis in-memory DB
- Pusher real-time Channels
- NextAuth
- Google OAuth
- GitHub OAuth

## Features

- Responsive UI with Tailwind CSS.
- AI ChatBot that can understand general natural language.
- Chat log stored in Redis.
- Data fetching and caching techniques using SWR— a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- NextAuth with Google and GitHub OAuth providers.
- Robust code using TypeScript.

## Screenshots

![smartmockups_lbmlyh6h](https://user-images.githubusercontent.com/42308135/207427693-25d0b82a-390e-442e-89c6-233e1c20972b.jpg)
![smartmockups_lbmlaw7x](https://user-images.githubusercontent.com/42308135/207421893-60a549ca-ee6d-48db-a9fd-e4c8ef96f4ac.jpg)
![smartmockups_lbmmd217](https://user-images.githubusercontent.com/42308135/207427430-c421bd0b-563c-447c-908e-cf35f53c2d89.jpg)

## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/circuitai-nextjs-typescript-redis-tailwind-nextauth.git

cd circuitai-nextjs-typescript-redis-tailwind-nextauth

code .
```

Then, create a .env.local file in the root of the project and configure the following environment variables:

```
# Redis DB
REDIS_URL=

# Pusher
PUSHER_APP_ID=
NEXT_PUBLIC_PUSHER_KEY=
NEXT_PUBLIC_PUSHER_CLUSTER=

# Vercel system variables
VERCEL_URL=

#Google Auth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Next Auth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# OpenAI
OPENAI_API_KEY=
```

Finally, install the npm dependencies and run the application:

```bash
npm install

npm run dev
```

Now the application is running on http://localhost:3000 🚀

## Deployment details

CircuitAI deployed using Vercel: 

[https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app/](https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app/)

