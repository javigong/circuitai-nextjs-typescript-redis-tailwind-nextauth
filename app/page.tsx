import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default HomePage;
