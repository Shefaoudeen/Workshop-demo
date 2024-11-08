import React from "react";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";

const EntreCardSlides = () => {
  return (
    <div className="min-h-screen flex flex-col text-center gap-6 py-20">
      <h1 className="text-5xl max-md:text-2xl font-semibold">
        Join us at the AI frontier
      </h1>
      <div className="flex justify-center gap-5">
        <button>L</button>
        <button>R</button>
      </div>
      <div className="ml-[200px] max-md:ml-[50px] flex gap-10 max-md:gap-5 overflow-hidden text-start">
        {TeamSlideDetails.map((ele, ind) => {
          return (
            <div className="h-[60vh] max-md:h-[50vh] min-w-[20vw] max-md:min-w-[50vw] bg-[#171717] p-5 flex flex-col justify-between rounded-xl">
              <h1>{ele.title}</h1>
              <h1>{ele.description}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntreCardSlides;
