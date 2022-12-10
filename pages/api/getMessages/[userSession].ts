// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../../redis";

import { IMessage } from "../../../types/typings";

type Data = {
  messages: IMessage[];
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "GET") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const { userSession } = req.query;

  const messagesResponse = await redis.hvals(userSession?.toString()!);
  const messages: IMessage[] = messagesResponse
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at);
  res.status(200).json({ messages });
}
