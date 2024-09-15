import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { compare_info } from "../../Data/Compare";

const Compare = () => {
  const [individual, SetIndividual] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center w-full px-4 flex-col py-10">
      {/*Bigger Screens*/}
      <div className="w-[75%] py-10 flex flex-col gap-5 max-md:hidden">
        <h1 className="text-3xl font-semibold">
          Compare features across plans
        </h1>
        <div className="grid grid-cols-5 bg-[#171717] py-4 px-4 sticky top-[40px] z-0">
          <div></div>
          <div>
            <h1>Free</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Plus</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Team</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Enterprise</h1>
            <CustomButton content="Contact sales" />
          </div>
        </div>
        <div className="bg-[#171717] py-4 px-4 flex flex-col">
          <h1 className="text-xl font-semibold p-5">Features</h1>
          <div className="flex flex-col ">
            {compare_info.map((ele, ind) => {
              return (
                <div className="grid grid-cols-5 items-center">
                  <div className="border-r border-white pl-5 py-3 pr-2">
                    {ele.feature}
                  </div>
                  <div className="border-r border-white ml-3 h-full flex items-center">
                    {ele.free}
                  </div>
                  <div className="border-r border-white ml-3 h-full flex items-center">
                    {ele.plus}
                  </div>
                  <div className="border-r border-white ml-3 h-full flex items-center">
                    {ele.team}
                  </div>
                  <div className="ml-3 h-full flex items-center">
                    {ele.enterprise}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*Small screen */}
      <div className="w-[90%] py-10 flex flex-col items-center gap-5 md:hidden">
        <h1 className="text-3xl font-semibold text-center border-b-2 border-white w-full p-5">
          Compare features across plans
        </h1>
        <div className="flex gap-5">
          <button
            className={`${individual ? " text-white" : "text-gray-500"}`}
            onClick={() => {
              SetIndividual(true);
            }}
          >
            For Individuals
          </button>
          <button
            className={`${!individual ? " text-white" : "text-gray-500"}`}
            onClick={() => {
              SetIndividual(false);
            }}
          >
            For Businesses
          </button>
        </div>
        <div className="grid grid-cols-3 bg-[#171717] py-4 px-4 sticky top-[40px] z-0 w-full">
          <div></div>
          <div>
            <h1>{individual ? "Free" : "Team"}</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>{individual ? "Plus" : "Enterise"}</h1>
            <CustomButton content="Start now" />
          </div>
        </div>
        <div className="bg-[#171717] py-4 px-4 flex flex-col">
          <h1 className="text-xl font-semibold p-5">Features</h1>
          <div className="flex flex-col ">
            {compare_info.map((ele, ind) => {
              return (
                <div className="grid grid-cols-3 items-center">
                  <div className="border-r border-white pl-5 py-3 pr-2">
                    {ele.feature}
                  </div>
                  <div className="border-r border-white ml-3 h-full flex items-center">
                    {individual ? ele.free : ele.team}
                  </div>
                  <div className="border-r border-white ml-3 h-full flex items-center">
                    {individual ? ele.plus : ele.enterprise}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
