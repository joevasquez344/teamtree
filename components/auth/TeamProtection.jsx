import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { isTeamMember } from "../../utils/api/helpers";
import { useTeams } from "../../context/TeamsContext";
import { teamExists } from "../../utils/api/teams";

const TeamProtection = ({ children }) => {
  const router = useRouter();
  const { authUser } = useAuth();
  const { teamsHistory, teams } = useTeams();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const isTeamRoute = router.pathname.split("/")[1];
  const teamId = router.query.teamId;

  const teamFoundInHistory = () => {
    return teamsHistory.find((team) => team?.id === router.query.teamId);
  };

  const validateMember = async () => {
    const isMember = await isTeamMember(teamId, authUser.id);

    if (!isMember) {
    }
  };

  const validate = async () => {
    setLoading(true);

    if (isTeamRoute && teamId) {
      const team = await teamExists(teamId);

      if (!team) {
        setAuthorized(false);
        setLoading(false);
        router.push("/createteam");

        return;
      }
      const isMember = await validateMember();

      if (!isMember) {
        if (teams) {
          let updatedTeams = teams.filter((team) => team.id !== teamId);

          if (updatedTeams.length > 0) {
            router.push(`/teams/${updatedTeams[0].id}/tasks`);
            setAuthorized(true);
          } else {
            router.push("/createteam");
            setAuthorized(false);
          }

          setLoading(false);
        } else {
          router.push("/createteam");
          setAuthorized(false);
          setLoading(false);
        }
      } else {
        setAuthorized(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    validate();
  }, []);

 return children
  //   else router.push("/createteam");

  //   if (!authorized) return;
};

export default TeamProtection;
