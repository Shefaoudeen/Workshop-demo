import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import { TeamAccordianDetails } from "../../Data/TeamAccordian";
import { teamAcc1, teamAcc2, teamAcc3 } from "../../assets/Images";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { accordianAnimation } from "../../utils/gsapAnimations";
gsap.registerPlugin(ScrollTrigger)

const TeamAccordian = () => {
  const AccordianPhotos = [teamAcc1, teamAcc2, teamAcc3, teamAcc1];

  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  accordianAnimation(toggle)

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full py-10">
      <div>
        <h1 className="text-4xl font-semibold max-md:text-2xl">
          ChatGPT that’s built for work
        </h1>
      </div>
      <div className="bg-[#171717] flex max-w-[70%] min-h-[75vh] rounded-xl overflow-hidden max-md:hidden">
        <div className="w-[50%]">
          <img id="img" src={AccordianPhotos[toggle]} className="h-full object-cover" />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center p-5">
          <div>
            {TeamAccordianDetails.map((ele, ind) => {
              return (
                <div className="border-b-2 border-gray-500 flex flex-col  w-full">
                  <div
                    onClick={() => handleClick(ind)}
                    className="cursor-pointer flex justify-between p-4 w-full"
                  >
                    <h1 className="text-xl font-semibold">{ele.title}</h1>
                    <h1>{toggle == ind ? "-" : "+"}</h1>
                  </div>
                  <div
                    id = "description"
                    className={`${
                      ind == toggle
                        ? "h-auto max-h-[9999px] transition-all"
                        : "max-h-0 overflow-hidden transition-all hidden"
                    } duration-500 ease-linear overflow-hidden w-full`}
                  >
                    <h1 className="p-4 text-gray-400">{ele.description}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#171717] flex max-w-[90%] min-h-[75vh] rounded-xl overflow-hidden md:hidden">
        <div className="flex flex-col justify-center items-center p-5">
          <div>
            {TeamAccordianDetails.map((ele, ind) => {
              return (
                <div className="border-b-2 border-gray-500 flex flex-col  w-full">
                  <div
                    onClick={() => handleClick(ind)}
                    className="cursor-pointer flex justify-between p-4 w-full"
                  >
                    <h1 className="text-xl font-semibold">{ele.title}</h1>
                    <h1>{toggle == ind ? "-" : "+"}</h1>
                  </div>
                  <div
                    className={`${
                      ind == toggle
                        ? "h-auto max-h-[9999px] transition-all"
                        : "max-h-0 overflow-hidden transition-all hidden"
                    } duration-500 ease-linear  w-full`}
                  >
                    <h1 className="p-4 text-gray-400">{ele.description}</h1>
                    <video src={Video1}></video>
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

export default TeamAccordian;
