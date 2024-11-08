import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import { TeamAccordianDetails } from "../../Data/TeamAccordian";

const TeamAccordian = () => {
  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full py-10">
      <div>
        <h1 className="text-4xl font-semibold max-md:text-2xl">
          ChatGPT that’s built for work
        </h1>
      </div>
      <div className="bg-[#171717] flex max-w-[70%] min-h-[75vh] rounded-xl overflow-hidden max-md:hidden">
        <div className="w-[50%]">
          <video src={Video1} className="h-full object-cover" />
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
                    className={`${
                      ind == toggle
                        ? "h-auto max-h-[9999px] transition-all"
                        : "max-h-0 overflow-hidden transition-all hidden"
                    } duration-500 ease-linear  w-full`}
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
