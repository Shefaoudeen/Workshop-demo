import React from "react";
import CustomButton from "../CustomButton";
import {
  Company1,
  Company2,
  Company3,
  Company4,
  DClogo,
} from "../../assets/Images";

const TeamLanding = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col text-center justify-center items-center gap-5">
      <div className="min-h-[50vh] max-md:min-h-[100vh] flex flex-col justify-center items-center gap-5">
        <h1>ChatGPT Team</h1>
        <div className="text-6xl max-md:text-2xl">
          <h1>An always-improving superassistant</h1>
          <h1>for every member of your team</h1>
        </div>
        <div className="text-xl max-md:text-sm">
          <h1>Generate better code, craft emails, analyze data, and </h1>
          <h1>
            supercharge any type of work in a collaborative team workspace.
          </h1>
        </div>
        <CustomButton content="Start now" />
      </div>
      <div className="flex gap-10 max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 items-center">
        <div>
          <img src={Company1} alt="" className="w-[200px] grayscale" />
        </div>
        <div>
          <img src={Company2} alt="" className="w-[200px] grayscale" />
        </div>
        <div>
          <img src={Company3} alt="" className="w-[200px] grayscale" />
        </div>
        <div>
          <img src={Company4} alt="" className="w-[200px] grayscale" />
        </div>
      </div>
    </div>
  );
};

export default TeamLanding;
