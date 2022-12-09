import { useSession } from "next-auth/react";
import Image from "next/image";
import TimeAgo from 'react-timeago';
import { IMessage } from "../types/typings";

type Props = {
  message: IMessage;
};

const MessageComponent = ({ message }: Props) => {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          className="rounded-full mx-2"
          height={40}
          width={40}
          src={message.profilePic}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-[#7C29E8] text-right" : "text-[#44e4d4] text-left"
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser ? "bg-[#7C29E8] ml-auto order-2" : "bg-[#74E6DA]"
            } `}
          >
            <p>{message.message}</p>
          </div>

          <p
            className={`text-[0.65rem] italic px-2 text-gray-400 ${
              isUser && "text-right"
            }`}
          >
            <TimeAgo date={new Date(message.created_at)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
