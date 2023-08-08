import { useRouter } from "next/router";
import React from "react";
import { useTeams } from "../../context/TeamsContext";

const MessageDeletePrompt = ({
  deletePrompt,
  setDeletePrompt,
  messageToDelete,
}) => {
  const router = useRouter();
  const { deleteTeamMessage, deleteGroupMessage, deleteDirectMessage } =
    useTeams();

  const teamId = router.query.teamId;
  const groupId = router.query.groupId;
  const username = router.query.username;

  const deleteMessage = () => {
    if (teamId && !groupId && !username) {
      deleteTeamMessage(messageToDelete.id);
    } else if (teamId && groupId && !username) {
      deleteGroupMessage(messageToDelete.id);
    } else {
      deleteDirectMessage(messageToDelete.id);
    }
    setDeletePrompt(false);
  };

  return (
    <>
      {deletePrompt && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex z-40 items-center justify-center">
          <div className=" absolute top-0 right-0 bottom-0 left-0 bg-black opacity-70"></div>
          <div className="z-50 w-[450px] bg-gray-800 shadow-xl rounded-xl py-5 px-7 flex flex-col items-center ">
            <>
            <div className="text-white mb-5 h-12 overflow-hidden">
              {messageToDelete.text} 
            </div>
              <div className="text-white mb-7">
                Are you sure you want to delete this message?
              </div>
              <div className="flex items-center justify-evenly w-full">
                <div
                  onClick={deleteMessage}
                  className="bg-red-500 text-white font-semibold py-1 px-7 cursor-pointer rounded"
                >
                  Delete
                </div>
                <div
                  onClick={() => setDeletePrompt(false)}
                  className="bg-gray-400 text-white font-semibold py-1 px-7 cursor-pointer rounded"
                >
                  Cancel
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageDeletePrompt;
