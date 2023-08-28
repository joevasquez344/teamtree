import React from "react";
import Chat from "./Chat";
import ChatBar from "./ChatBar";
import { useTeams } from "../../../context/TeamsContext";

const ChatContainer = ({
  membersMobile,
  mobileSidebarState,
  replyTo,
  createMessage,
  createReply,
  ref,
  input,
  setInput,
  task,
  handleUnfocusInput,
  handleFocusInput,
}) => {
  const { teamChat } = useTeams();
  return (
    <div
      className={`${
        membersMobile ? "-translate-x-[90%]  left-0 " : "left-0"
      }  ${
        mobileSidebarState ? "translate-x-[90%]  right-0 " : "right-0"
      } col-span-12   md:col-span-8 lg:col-span-8   xl:col-span-9 2xl:col-span-10 bg-gray-700 h-full  overflow-y-scroll no-scrollbar  relative transition ease-in-out duration-300`}
    >
      <Chat
        messages={teamChat?.messages}
        reply={handleFocusInput}
        membersMobile={membersMobile}
        mobileSidebarState={mobileSidebarState}
      />

      <ChatBar
        replyTo={replyTo}
        createMessage={createMessage}
        createReply={createReply}
        handleUnfocusInput={handleUnfocusInput}
        ref={ref}
        input={input}
        setInput={setInput}
        task={task}
      />
    </div>
  );
};

export default ChatContainer;
