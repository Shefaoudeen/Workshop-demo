import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const TeamStats = () => {
  const [renderStats,setRenderStats] = useState(false);
  useGSAP(() => {
    gsap.to('#stats',{
      scrollTrigger : {
        trigger : "#stats",
        onToggle : () => setRenderStats(true),
      }
    })
  },[])
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <h1 className="text-4xl font-semibold max-md:text-xl">
          Teams do more, faster with ChatGPT
        </h1>
        <div className="flex w-[75%] max-md:w-[90%] justify-around max-md:flex-col max-md:gap-3">
          <div id="stats" className="bg-[#171717] rounded-lg p-8 flex flex-col justify-between  h-[200px] w-[32%] max-md:w-full">
            <h1 className="text-4xl">
              <NumberFlow 
                value={renderStats ? 22.2 : 0}
                transformTiming={{duration : 700}}
                continuous = {true}
              />
              %</h1>
            <h1 className="text-xl">more tasks completed</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 flex flex-col justify-between h-[200px] w-[32%] max-md:w-full">
          <h1 className="text-4xl">
              <NumberFlow 
                value={renderStats ? 25.1 : 0}
                transformTiming={{duration : 700}}
                continuous = {true}
              />
              %</h1>
            <h1 className="text-xl">faster task completion</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 flex flex-col justify-between h-[200px] w-[32%] max-md:w-full">
          <h1 className="text-4xl">
              <NumberFlow 
                value={renderStats ? 40 : 0}
                transformTiming={{duration : 700}}
                continuous = {true}
              />
              %</h1>
            <h1 className="text-xl">higher quality work</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
