import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  result: string;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  const completion = await openai.createCompletion({
    // Latest GPT-3 models: https://beta.openai.com/docs/models
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.question),
    temperature: 0.6,
    max_tokens: 35,
  });
  res.status(200).json({ result: completion.data.choices[0].text! });
}

type Props = {
  question: string;
}

function generatePrompt(question: Props) {

  return `Answer the question.

Question: Explain quantum computing in simple terms
Answer: Quantum computing is a type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data.
Question: How do I make an HTTP request in Javascript?
Answer: To make an HTTP request in JavaScript, you can use the XMLHttpRequest object or the more modern fetch() function.
Question: ${question}
Answer:`;
}
