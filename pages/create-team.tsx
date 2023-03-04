import LayoutWrapper from "@/components/LayoutWrapper";
import LeagueSearchbar from "@/components/LeagueSearchbar";
import { GetStaticProps } from "next";
import React from "react";

export async function getStaticProps() {
  const response = await fetch("https://v3.football.api-sports.io/leagues", {
    headers: {
      "x-apisports-key": process.env.FOOTBALL_API_KEY,
    },
  });
  const leagues = await response.json();
  return {
    props: { leagues: leagues.response },
  };
};

interface CreateTeamProps {
  leagues: any[];
}

const CreateTeam = ({ leagues }: CreateTeamProps) => {
  return (
    <LayoutWrapper>
      <div className="bg-lime-900 h-screen p-5">
        <LeagueSearchbar leagues={leagues} />
      </div>
    </LayoutWrapper>
  );
};

export default CreateTeam;