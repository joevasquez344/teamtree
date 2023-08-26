import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import AvatarDefault from "../users/AvatarDefault";
import MessagePopup from "./MessagePopup";
import MessageReplyTo from "./MessageReplyTo";
import ReplyToBubbles from "./ReplyToBubbles";
import ReplyToDeleted from "./ReplyToDeleted";
import ReplyToEdited from "./ReplyToEdited";
import EditMessage from "./EditMessage";
import TaskIcon from "../icons/TaskIcon";

const Message = ({
  message,
  inputEl,
  setInputEl,
  reply,
  handleOpenDeletePrompt,
  inputRef,
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const [hover, setHover] = useState(-1);
  const [input, setInput] = useState("");

  const handleFocusInput = (i, message) => {
    setInputEl(i);
    setInput(message.text);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleRemoveInputFocus = () => {
    setInputEl(-1);
    // setInput("");
  };

  const showMore = (id) => {
    if (inputEl === id) return;
    setHover(id);
  };
  const hideMore = (id) => {
    if (inputEl === id) return;
    setHover(-1);
  };

  return (
    <div
      key={message.id}
      onMouseOver={() => showMore(message.id)}
      onMouseLeave={hideMore}
      className={`group md:hover:bg-gray-900 ${message?.type === "task" && " "}  ${
        inputEl === message.id && "bg-gray-900"
      } transition ease-in-out w-[80%] md:w-[90%] duration-200 px-3 md:px-5 py-1 md:py-3`}
    >
      {message.replyToMessage?.id && message.replyToText ? (
        <MessageReplyTo>
          <ReplyToBubbles />
          <ReplyToEdited message={message} />
        </MessageReplyTo>
      ) : (
        message.replyToRef &&
        message.replyToMessage === null && (
          <MessageReplyTo>
            <ReplyToBubbles />
            <ReplyToDeleted />
          </MessageReplyTo>
        )
      )}
      <div className="flex justify-between relative ">
        <div className="flex space-x-3 w-full">
          <div
            className="cursor-pointer"
            onClick={() =>
              router.push(
                `/teams/${router.query.teamId}/chat/${message.user.username}`
              )
            }
          >
            <AvatarDefault color="blue" />
          </div>
          <div className="w-full">
            <div className="flex items-center  space-x-1">
              <div className="font-bold text-gray-300">
                <div>{message?.user?.name}</div>
              </div>
              <div className="text-xs md:text-sm text-gray-400">@{message?.user?.username}</div>
            </div>
            
            <div className="flex space-x-3 cursor-default">
              {inputEl === message.id ? (
                <EditMessage
                  message={message}
                  input={input}
                  inputRef={inputRef}
                  handleRemoveInputFocus={handleRemoveInputFocus}
                  handleInputChange={handleInputChange}
                />
              ) : (
                <>
                  {" "}
                  {message?.type === "task" ? (
                    <div className="border relative flex justify-between border-gray-600 group-hover:border group-hover:border-gray-700 my-2 w-full  p-3 rounded-md transition ease-in-out duration-200">
                      <div className="text-sm md:text-base whitespace-break-spaces">{message.text}</div>

                      <div className="h-7 w-7 absolute -right-3 top-2.5  flex items-center justify-center rounded-full border bg-gray-700 group-hover:bg-gray-800 border-gray-500 transition ease-in-out duration-200">
                        <TaskIcon />
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm md:text-base w-full break-words text-gray-300 ">
                      {input.length > 0 ? input : message.text}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <MessagePopup
          message={message}
          hover={hover}
          reply={reply}
          handleFocusInput={handleFocusInput}
          handleOpenDeletePrompt={handleOpenDeletePrompt}
        />
      </div>
    </div>
  );
};

export default Message;
