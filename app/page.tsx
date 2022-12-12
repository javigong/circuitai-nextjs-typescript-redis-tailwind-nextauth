import { unstable_getServerSession } from "next-auth";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import Providers from "./providers";

type Props = {};

const HomePage = async (props: Props) => {
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <main>
        <MessageList session={session} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
};

export default HomePage;
