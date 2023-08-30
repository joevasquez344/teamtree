import React, { useEffect, useState } from "react";
import { getAuthsTeams } from "../../utils/api/teams";
import { useAuth } from "../../context/auth/AuthContext";
import { useRouter } from "next/router";
import banner from "../../assets/images/banner.jpg";
import Image from "next/image";

const Teams = () => {
  const { authUser } = useAuth();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const routeTeam = (id) => router.push(`/teams/${id}/chat`);
  const fetchData = async () => {
    const teams = await getAuthsTeams(authUser.id);
    setTeams(teams);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white">Loading</div>;
  }

  return (
    <div className="text-white bg-gray-700 w-screen  overflow-y-scroll h-full ">
      <div className="flex  flex-col items-center mx-auto sm:mx-auto sm:pb-5 sm:w-3/4 xl:w-2/3 2xl:w-1/2">
        <div className="  flex flex-col  items-center w-full  ">
          <div className="text-lg py-3 border-b border-b-gray-600 sm:border sm:border-gray-800 sm:shadow-lg sm:rounded sm:mt-5 sm:mb-5 flex items-center justify-evenly sm:justify-center sm:space-x-8 md:space-x-12 sm:text-xl sm:py-5 w-full  font-semibold text-white">
            <div className="text-green-500">Team Up</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
            <div className="text-green-400">Collaborate</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>

            <div className="text-green-200">Grow</div>
          </div>
          <div className="bg-gray-700 rounded px-5 sm:px-0  pb-5 pt-3 w-full">
            <div className="flex items-center justify-between  mb-3   font-semibold">
              <div className="text-gray-200">Team Invites</div>
              <div className="text-green-500">(3)</div>
            </div>
            <div className=" flex flex-col space-y-3 rounded bg-gray-800 p-4 font-semibold">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="py-2 px-4 bg-gray-900 text-gray-200 rounded"
                >
                  {team.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-gray-800 mx-auto px-6 md:px-0 pt-4 md:pt-6">
        {/* <div className="h-1/3 w-full border">
          <Image
            src={banner}
            className="w-full h-full"
            alt="Picture of the author"
            
          />
        </div> */}
        <div className="flex flex-wrap md:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto    bg-gray-800">
          <div className="flex items-center md:border md:border-gray-700 md:py-3 md:px-8 md:rounded justify-between w-full mb-4 md:mb-6 font-semibold">
            <div className="text-gray-200">My Teams</div>
            <div className="text-green-500">({teams.length})</div>
          </div>
          <div className="sm:w-full grid grid-cols-3  md:grid-cols-4  xl:grid-cols-5  gap-5  w-full  ">
            {teams.map((team) => (
              <div
                key={team.id}
                onClick={() => routeTeam(team.id)}
                className="flex h-24 sm:h-36 items-center col-span-1"
              >
                <div className="w-full h-full flex items-center shadow-lg justify-center bg-gray-900 rounded-lg text-4xl font-bold transition ease-in-out cursor-pointer hover:bg-gray-700 duration-200">
                  {team.name.split("")[0].toUpperCase()}
                </div>
                {/* <div className="text-center text-gray-400 mt-2 font-semibold">
                  {team.name}
                </div> */}
              </div>
            ))}

            <div className="col-span-1">
              <div
                onClick={() => router.push("/createteam")}
                className="h-24 sm:h-36   w-full   flex items-center group justify-center bg-black text-green-600 rounded-lg text-4xl transition ease-in-out cursor-pointer hover:bg-green-600 duration-200"
              >
                <div className="group-hover:text-white transition ease-in-out  duration-200">
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};

export default Teams;
