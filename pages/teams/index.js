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
    <div className="text-white bg-gray-800 w-screen h-screen pt-10 md:pt-36">
      <div className="md:w-1/2 h-full mx-auto">
        {/* <div className="h-1/3 w-full border">
          <Image
            src={banner}
            className="w-full h-full"
            alt="Picture of the author"
            
          />
        </div> */}
        <div className="flex flex-wrap p-3  md:border border-gray-700 rounded-lg  md:space-x-16  md:p-10 bg-gray-800">
          <div className=" flex  space-x-6 mx-auto md:mx-0  mb-8 ">
            {teams.map((team) => (
              <div
                key={team.id}
                onClick={() => routeTeam(team.id)}
                className="flex flex-col "
              >
                <div className="h-24 w-24   md:h-36 md:w-36 flex items-center shadow-lg justify-center bg-gray-900 rounded-lg text-4xl font-bold transition ease-in-out cursor-pointer hover:bg-gray-700 duration-200">
                  {team.name.split("")[0].toUpperCase()}
                </div>
                <div className="text-center text-gray-400 mt-2 font-semibold">
                  {team.name}
                </div>
              </div>
            ))}
          </div>
          <div
            onClick={() => router.push("/createteam")}
            className=" h-24 w-24 md:h-36 ml-4 md:w-36 flex items-center group justify-center bg-black text-green-600 rounded-lg text-4xl transition ease-in-out cursor-pointer hover:bg-green-600 duration-200"
          >
            <div className="group-hover:text-white transition ease-in-out  duration-200">
              <PlusIcon />
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
