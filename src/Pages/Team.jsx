import React from "react";
import TeamLanding from "../components/Team/TeamLanding";
import TeamAccordian from "../components/Team/TeamAccordian";
import TeamStats from "../components/Team/TeamStats";
import TeamSlider from "../components/Team/TeamSlider";

const Team = () => {
  return (
    <div className="bg-black text-white">
      <TeamLanding />
      <TeamAccordian />
      <TeamStats />
      <TeamSlider />
    </div>
  );
};

export default Team;
