import { useSession } from "next-auth/react";
import Image from "next/image";
import { IMessage } from "../types/typings";

type Props = {
  message: IMessage;
};

const MessageComponent = ({ message }: Props) => {
  const {data: session} = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          className="rounded-full"
          height={40}
          width={40}
          src={message.profilePic}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-400 text-right" : "text-[#44e4d4] text-left"
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser ? "bg-blue-200 ml-auto order-2" : "bg-[#74E6DA]"
            } `}
          >
            <p>{message.message}</p>
          </div>

          <p
            className={`text-[0.65rem] italic px-2 text-gray-400 ${
              isUser && "text-right"
            }`}
          >
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
