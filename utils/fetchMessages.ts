import { IMessage } from "../types/typings";

const fetchMessages = async (url:string) => {
  const res = await fetch(url);
  const data = await res.json();
  const messages: IMessage[] = data.messages;
  return messages;
};

export default fetchMessages;
