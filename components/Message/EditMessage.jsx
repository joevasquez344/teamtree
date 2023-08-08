import React, {useRef} from "react";
import { useTeams } from "../../context/TeamsContext";
import { useRouter } from "next/router";
import TaskIcon from "../icons/TaskIcon";

const EditMessage = ({
  message,
  input,
  inputRef,
  handleInputChange,
  handleRemoveInputFocus,

}) => {
  const router = useRouter();
  const { editTeamMessage, editGroupMessage, editDirectMessage } = useTeams();
  const teamId = router.query.teamId;
  const groupId = router.query.groupId;
  const username = router.query.username;

  const editMessage = async (e, message, text) => {
    e.preventDefault();

    if (teamId && !groupId && !username) await editTeamMessage(message, text);
    else if (teamId && groupId && !username) editGroupMessage(message, text);
    else editDirectMessage(message, text);

    handleRemoveInputFocus();
  };

  return (
    <div className="flex flex-col w-full">
      {" "}
      {message?.type === "task" ? (
        <div className=" relative flex justify-between bg-gray-800   my-2 w-full text-gray-300 p-3 rounded-md">
          <input
            ref={ref}
            onChange={handleInputChange}
            placeholder={message.text}
            value={input}
            className="text-gray-300 outline-none bg-transparent w-full"
          />

          <div className="h-7 w-7 absolute -right-3 top-2.5  flex items-center justify-center rounded-full  bg-gray-700 group-hover:bg-gray-800 border-gray-500 transition ease-in-out duration-200">
            <TaskIcon />
          </div>
        </div>
      ) : (
        <div className=" relative flex justify-between bg-gray-800  my-2 w-full text-gray-300 p-3 rounded-md ">
          <form
            onSubmit={(e) => editMessage(e, message, input)}
            className="w-full"
          >
            <input
              value={input}
              ref={inputRef}
              onChange={handleInputChange}
              placeholder={message.text}
              className="text-gray-300 outline-none bg-transparent w-full"
            />
          </form>
        </div>
      )}
      <div
        onClick={handleRemoveInputFocus}
        className="text-green-500 text-xs cursor-pointer"
      >
        Cancel
      </div>
    </div>
  );
};

export default EditMessage;
