# CircuitAI: AI ChatBot Assistant

CircuitAI is a case study of an real-time AI chatbot assistant implemented with Next.js, TypeScript, Tailwind CSS, OpenAI API, SWR, Upstash, Redis DB, Pusher Channels, NextAuth, and Google Auth.

Includes OpenAI GTP-3 models that can understand and generate natural language, in-memory real-time database with Redis, and SWR cache invalidation strategy.

I used NextJS 13 with the new app directory structure–still in beta–that integrates new feature from React 18 like the new React server components (RSC) or the new data fetching.

![smartmockups_lbjquahn](https://user-images.githubusercontent.com/42308135/206926769-bd09cce4-c213-4079-8672-5539515603dc.jpg)

🔗 [Open live Demo](https://travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker.vercel.app/)

## Tech Stack

- Next.js 13 (App directory (beta) with React Server Components) 
- React.js 18
- TypeScript
- Tailwind CSS
- OpenAI API, GPT-3 models
- SWR (stale-while-revalidate)
- Upstash
- Redis in-memory DB
- Pusher real-time Channels
- NextAuth
- Google Auth

## Features

- Responsive UI with Tailwind CSS.
- AI ChatBot that can understand general natural language.
- Chat log stored in Redis.
- Data fetching and caching techniques using SWR— a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- User Authentication with NextAuth and Google OAuth.
- Robust code using TypeScript.

## Screenshots

![smartmockups_lbjrotzr](https://user-images.githubusercontent.com/42308135/206926808-4ff4161c-725c-4377-8a2f-7c3824c3bfa1.jpg)

## Deployment details

Travel Bookings deployed using Vercel: [https://travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker.vercel.app/](https://travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker.vercel.app/)

