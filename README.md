# CircuitAI: AI ChatBot Assistant powered with OpenAI GPT-3 model

CircuitAI is a case study of an real-time AI chatbot assistant implemented with Next.js, TypeScript, Tailwind CSS, OpenAI API, SWR, Upstash, Redis DB, Pusher Channels, NextAuth, and Google Auth.

Includes OpenAI GTP-3 models that can understand and generate natural language, in-memory real-time database with Redis, and SWR cache invalidation strategy.

I used NextJS 13 with the new app directory structure–still in beta–that integrates new feature from React 18 like the new React server components (RSC) or the new data fetching.

![smartmockups_lbmljzkr](https://user-images.githubusercontent.com/42308135/207423426-f4a460d0-3755-4012-bfcd-3342ce1a4fc5.jpg)

🔗 [Open live Demo](https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app)

## Tech Stack

- Next.js v13 (App directory (beta) with React Server Components) 
- React.js v18
- TypeScript
- Tailwind CSS
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

## Deployment details

CircuitAI deployed using Vercel: [https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app/](https://circuitai-nextjs-typescript-redis-tailwind-nextauth-javigong.vercel.app/)

