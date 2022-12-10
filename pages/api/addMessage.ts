// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serverPusher } from "../../pusher";
import redis from "../../redis";

import { IMessage } from "../../types/typings";

type Data = {
  message: IMessage;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const { userSession, message } = req.body;

  const newMessage = {
    ...message,
    created_at: Date.now(),
  };

  // Push the new message to Redis (Upstash)
  await redis.hset(userSession, message.id, JSON.stringify(newMessage));
  serverPusher.trigger(userSession, "new-message", newMessage);

  res.status(200).json({ message: newMessage });
}
