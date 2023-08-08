import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CreateGroupForm from "../groups/CreateGroupForm";
import Modal from "../layout/Modal";
import { useTeams } from "../../context/TeamsContext";
import Skeleton from "react-loading-skeleton";

const TeamsHeader = ({ tabs, tabClick }) => {
  const router = useRouter();
  const { teamLoading, team } = useTeams();
  return (
    <div>
      {teamLoading ? (
        <Skeleton
          className="h-6"
          baseColor="rgb(31 41 55)"
          count={1}
          width="200px"
          highlightColor="rgb(55 65 81)"
          enableAnimation={true}
          direction="rtl"
          duration={1}
        />
      ) : (
        router.query.teamId && (
          <div className=" inline-flex w-full h-12 items-center bg-gray-700 shadow-md font-semibold ">
            {/* <div className="px-10 h-full flex items-center justify-center text-lg text-gray-200">{team.name}</div> */}
            {tabs?.map((tab) => (
              <div
                key={tab?.id}
                onClick={() => tabClick(tab)}
                className={`${
                  tab?.active ? " text-gray-200 bg-gray-900 border-b border-b-green-400" : " text-gray-300"
                } hover:bg-gray-900 h-full  px-7 flex items-center justify-center  transition ease-in-out cursor-pointer duration-200`}
              >
                {tab?.name}
              </div>
            ))}
          </div>
        )
      )}

      {/* <Modal show={show} onClose={() => setShow(false)}>
        <CreateGroupForm team={team} />
      </Modal> */}
    </div>
  );
};

export default TeamsHeader;
