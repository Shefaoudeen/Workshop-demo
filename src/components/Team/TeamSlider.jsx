import React from "react";
import CustomButton from "../CustomButton";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";
import { Sli1 } from "../../assets/Images";

const TeamSlider = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32 gap-10">
      <div className="flex flex-col gap-5 w-full text-center">
        <h1 className="text-2xl">Join us at the AI frontier</h1>
        <div className="flex justify-center gap-5">
          <button>L</button>
          <button>R</button>
        </div>
        <div className="md:ml-[200px] max-md:ml-[50px] flex gap-10 overflow-hidden text-start">
          {TeamSlideDetails.map((ele, ind) => {
            return (
              <div className="relative">
                <img
                  src={ele.image}
                  className={`h-[60vh] max-md:h-[50vh] min-w-[20vw] max-md:min-w-[60vw] flex flex-col justify-between `}
                ></img>
                <h1 className="absolute top-5 left-5 font-bold">{ele.title}</h1>
                <h1 className="absolute bottom-5 left-5">{ele.description}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#171717] mt-10 flex justify-center gap-2 flex-col items-center py-20 text-center w-[70%] max-md:w-[90%] rounded-xl">
        <h1 className="text-4xl max-md:text-xl">
          Join thousands of teams redefining
        </h1>
        <h1 className="text-4xl max-md:text-xl">how they work with ChatGPT</h1>
        <CustomButton content="Start now" />
      </div>
    </div>
  );
};

export default TeamSlider;
