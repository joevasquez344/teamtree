import React, { useState, useEffect } from "react";
import { getTeamMembers } from "../../../utils/api/teams";
import AddButton from "../../buttons/AddButton";
import Button from "../../buttons/Button";

const InviteToGroupPopup = ({ teamId, openPopup, closePopup, popup }) => {
  const [members, setMembers] = useState([]);
  const [inviteList, setInviteList] = useState([]);

  const getMembers = async () => {
    const users = await getTeamMembers(teamId);
    setMembers(users);
  };

  const handleAddUser = (user) => {
    setInviteList([...inviteList, user]);
  };

  useEffect(() => {
    getMembers();
  }, []);
  return (
    <>
      {popup && (
        <div
          onClick={closePopup}
          className="fixed top-0 right-0 left-0 bottom-0 opacity-0 z-40 bg-black cursor-default"
        />
      )}
      {popup && (
        <div className="absolute w-[500px] z-50 shadow-lg  bg-gray-800 left-[425px] p-3">
          <div className="text-gray-200">Invite Team Members</div>
          {/* <CreateTeamForm /> */}
          {members.map((member) => (
            <div onClick={() => handleAddUser(member)} key={member.id}>
              <div className="flex items-center justify-between rounded group p-2 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200">
                <div className="flex items-center space-x-1 text-gray-300">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="font-semibold">{member.name}</div>
                  <div className="">@{member.username}</div>
                </div>
                <input type="checkbox" name="" id="" />
              </div>
              {/* <Button text={members.name} theme="blue" /> */}
            </div>
          ))}
        </div>
      )}
    </>
    // <div className="text-sm border-b border-b-gray-600 absolute right-0 bg-gray-800 w-full  ">
    //   {/* <div className="w-full flex flex-col  px-3 pb-5">
    //         <div className="flex flex-col  group">
    //           {teams.map((team) => (
    //             <div key={team.id} onClick={() => routeTeam(team.id)}>
    //               <Button text={team.name} theme="blue" />
    //             </div>
    //           ))}
    //         </div>
    //       </div> */}
    //   {members.map((members) => (
    //     <div key={members.id} >
    //       <Button text={members.name} theme="blue" />
    //     </div>
    //   ))}
    //   {popup && (
    //     <div
    //       onClick={closePopup}
    //       className="fixed top-0 right-0 left-0 bottom-0 opacity-0 z-40 bg-black cursor-default"
    //     />
    //   )}

    //   <div
    //     onClick={openPopup}
    //     // onClick={handleCreateTeam}
    //     className="px-3 relative flex items-center group mx-3  py-2 mb-3 space-x-3  hover:bg-green-400 text-white   transition ease-in-out cursor-pointer duration-200"
    //   >
    //     <AddButton height="4" width="4" />
    //     <div className="text-white font-semibold w-3/4 flex justify-between items-center transition ease-in-out cursor-pointer duration-200">
    //       Create Team
    //     </div>
    //   </div>
    // </div>
  );
};

export default InviteToGroupPopup;
