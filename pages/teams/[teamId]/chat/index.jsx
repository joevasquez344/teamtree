import React, { useEffect, useRef, useState } from "react";
import ProtectedRoute from "../../../../components/ProtectedRoute";
import { useAuth } from "../../../../context/auth/AuthContext";
import Chat from "../../../../components/features/Chat/Chat";
import Members from "../../../../components/users/Members";
import { useTeams } from "../../../../context/TeamsContext";
import { Tooltip } from "@material-tailwind/react";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import { removeTeamMember } from "../../../../utils/api/teams";
import ChatBar from "../../../../components/features/Chat/ChatBar";
import ChatContainer from "../../../../components/features/Chat/ChatContainer";
import MembersContainer from "../../../../components/features/Members/MembersContainer";
import ChatHeader from "../../../../components/features/Chat/ChatHeader";

const TeamChat = ({ mobileSidebarState }) => {
  const router = useRouter();
  const ref = useRef(null);
  const { setAuthLayout, authUser } = useAuth();
  const {
    teamMembers,
    teamChat,
    team,
    getTeam,
    teamLoading,
    addTeamMessage,
    addTeamReply,
    error,
    setError,
    builder,
    removeTeam,
    removeMemberFromState,
    teams,
  } = useTeams();

  const [input, setInput] = useState("");
  const [task, setTask] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [membersMobile, setMembersMobile] = useState(false);

  const handleTaskDesignation = () => {
    setTask(task ? false : true);
  };

  const createMessage = async (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    const type = task ? "task" : "message";
    addTeamMessage(type, input);

    setInput("");
  };

  const createReply = async (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    await addTeamReply(replyTo, input);
    setReplyTo(null);
    setInput("");
  };

  const handleFocusInput = (message) => {
    setReplyTo(message);
    ref.current?.focus();
  };

  const handleUnfocusInput = () => {
    setReplyTo(null);
    setInput(null);
  };

  const handleRemoveMember = (memberId) => {
    removeTeamMember(memberId, team.id, authUser.id);
    removeMemberFromState(memberId);

    if (memberId === authUser.id) {
      removeTeam(team.id);
    }
  };

  useEffect(() => {
    setError(false);
    getTeam();

    setAuthLayout(true);
  }, [router.query.teamId]);
  console.log("Reply To: ", replyTo);
  if (error) {
    return (
      <div className="w-full h-[calc(100%-64px)] flex justify-center mt-96">
        <div className="text-gray-300 text-3xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800   relative ">
      <div
        // style={{boxShadow: "10px 5px -5px 10px black"}}
        className={`${
          membersMobile
            ? "-translate-x-[90%]   left-0 rounded-tr-xl"
            : "left-0 "
        }  ${
          mobileSidebarState
            ? "md:translate-x-[60%]  translate-x-[90%]  right-0 rounded-tl-xl "
            : "right-0"
        } h-12 sticky top-0 z-40 w-full  border-b border-b-gray-600 bg-gray-700 px-5 flex items-center text-gray-200 text-lg font-semibold transition ease-in-out duration-300`}
      >
        <ChatHeader setMembersMobile={setMembersMobile} />

 
      </div>
      <div className="grid grid-cols-12 ">
        <ChatContainer
          membersMobile={membersMobile}
          mobileSidebarState={mobileSidebarState}
          replyTo={replyTo}
          createMessage={createMessage}
          createReply={createReply}
          ref={ref}
          input={input}
          setInput={setInput}
          task={task}
          handleUnfocusInput={handleUnfocusInput}
          handleFocusInput={handleFocusInput}
        />
        <MembersContainer
          handleRemoveMember={handleRemoveMember}
          mobileSidebarState={mobileSidebarState}
          membersMobile={membersMobile}
          setMembersMobile={setMembersMobile}
        />
      </div>
    </div>
  );
};

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
);

const TaskIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
      />
    </svg>
  );
};

export default TeamChat;
