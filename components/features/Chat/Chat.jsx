import React, { useRef, useState, useEffect } from "react";
import AvatarDefault from "../../users/AvatarDefault";
import { useTeams } from "../../../context/TeamsContext";
import moment from "moment";
import { useRouter } from "next/router";
import ChatError from "./ChatError";
import ChatSkeleton from "./ChatSkeleton";
import ReplyToBubbles from "../../Message/ReplyToBubbles";
import ReplyToEdited from "../../Message/ReplyToEdited";
import ReplyToDeleted from "../../Message/ReplyToDeleted";
import MessageReplyTo from "../../Message/MessageReplyTo";
import TaskIcon from "../../icons/TaskIcon";
import EditMessage from "../../Message/EditMessage";
import MessagePopup from "../../Message/MessagePopup";
import MessageDeletePrompt from "../../Message/MessageDeletePrompt";
import Message from "../../Message/Message";

// Todos
//  1. Capture live updates to reflect on clients for a user editing their message
const Chat = ({ messages, reply, membersMobile, mobileSidebarState }) => {
  // const [hover, setHover] = useState(-1);
  const [inputEl, setInputEl] = useState(-1);
  // const [input, setInput] = useState("");
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const {
    team,
    chatEndRef,
    chatStartRef,
    chatLoading,
    editTeamMessage,
    editGroupMessage,
    editDirectMessage,
    deleteTeamMessage,
    deleteGroupMessage,
    deleteDirectMessage,
    convertMessages,
    scrollToBottom,
  } = useTeams();
  const ref = useRef(null);

  // const editMessage = async (e, message, text) => {
  //   e.preventDefault();
  //   if (
  //     router.query.teamId &&
  //     !router.query.groupId &&
  //     !router.query.username
  //   ) {
  //     await editTeamMessage(message, text);
  //   } else if (
  //     router.query.teamId &&
  //     router.query.groupId &&
  //     !router.query.username
  //   ) {
  //     editGroupMessage(message, text);
  //   } else {
  //     editDirectMessage(message, text);
  //   }

  //   handleRemoveInputFocus();
  // };

  // const handleFocusInput = (i, message) => {
  //   setInputEl(i);
  //   setInput(message.text);
  // };

  // const handleInputChange = (e) => setInput(e.target.value);

  // const handleRemoveInputFocus = () => {
  //   setInputEl(-1);
  //   setInput("");
  // };

  // const showMore = (id) => {
  //   if (inputEl === id) return;
  //   setHover(id);
  // };
  // const hideMore = (id) => {
  //   if (inputEl === id) return;
  //   setHover(-1);
  // };

  const handleDateDisplay = (date) => {
    const today = moment(new Date()).format("M D YY");

    if (date === today) {
      return "Today";
    }
    return date
      .split(" ")
      .map((item) => item + "/")
      .join("")
      .slice(0, -1);
  };

  const handleOpenDeletePrompt = (message) => {
    setDeletePrompt(true);
    setMessageToDelete(message);
  };

  const isReply = (message) =>
    message.replyTo.path.split("/")[1] === null ? false : true;

  useEffect(() => {
    if (inputEl !== -1) {
      ref.current.focus();
    }
  }, [inputEl]);

  useEffect(() => {
    scrollToBottom();
  }, [messages?.length]);
  return (
    <>
      {messages?.length === 0 && !chatLoading ? (
        <ChatError
          chatName="Name"
          // chatName={
          //   router.query.teamId &&
          //   !router.query.groupId &&
          //   !router.query.username
          //     ? team.name
          //     : router.query.teamId &&
          //       router.query.groupId &&
          //       !router.query.username
          //     ? group?.name
          //     : router.query.username
          // }
        />
      ) : (
        <div
          className={` relative flex flex-col space-y-3 pt-2 transition ease-in-out cursor-pointer duration-500 overflow-y-scroll no-scrollbar pb-64 md:pb-64`}
        >
          <div ref={chatStartRef} />
          <MessageDeletePrompt
            deletePrompt={deletePrompt}
            setDeletePrompt={setDeletePrompt}
            messageToDelete={messageToDelete}
          />
          {chatLoading ? (
            <ChatSkeleton />
          ) : (
            convertMessages(messages ? messages : []).map((item) => (
              <>
                {item[1].map((message) => (
                  <Message
                    key={message.id}
                    message={message}
                    inputEl={inputEl}
                    setInputEl={setInputEl}
                    inputRef={ref}
                    reply={reply}
                    handleOpenDeletePrompt={handleOpenDeletePrompt}
                  />
                ))}
              </>
            ))
          )}
          <div ref={chatEndRef} />
        </div>
      )}
    </>
  );
};

export default Chat;
