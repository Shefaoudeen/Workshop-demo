import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import { TeamAccordianDetails } from "../../Data/TeamAccordian";

const EntreAccordian = () => {
  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <div className="text-center text-4xl font-bold">
        <h1>A personalized AI companion</h1>
        <h1>to support work at scale</h1>
      </div>
      <div className="bg-[#171717] flex max-w-[70%] min-h-[60vh] rounded-md overflow-hidden max-md:hidden">
        <div className="w-[50%] flex  justify-center items-center">
          <video src={Video1} className="h-full object-cover" />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center p-5">
          {TeamAccordianDetails.map((ele, ind) => {
            return (
              <div className="border-b-2 border-gray-500 flex flex-col gap-4 w-full">
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
                  <h1 className="p-4 text-gray-400 font-light">
                    {ele.description}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#171717] flex max-w-[90%] min-h-[60vh] rounded-md overflow-hidden md:hidden">
        <div className="flex flex-col justify-center items-center p-5">
          {TeamAccordianDetails.map((ele, ind) => {
            return (
              <div className="border-b-2 border-gray-500 flex flex-col gap-4 w-full">
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
                  } duration-500 ease-linear  w-full p-4`}
                >
                  <h1 className="mb-2 text-gray-400 font-light text-justify">
                    {ele.description}
                  </h1>
                  <video src={Video1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EntreAccordian;
