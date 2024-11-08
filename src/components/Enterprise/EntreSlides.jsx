import React from "react";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";

const EntreSlides = () => {
  return (
    <div className="min-h-screen flex flex-col text-center gap-6">
      <h1 className="text-5xl max-md:text-3xl font-semibold">
        A new way of working
      </h1>
      <h1 className="text-xl max-md:text-sm">
        92% of the Fortune 500 already use OpenAI in their business
      </h1>
      <div className="flex justify-center gap-5">
        <button>L</button>
        <button>R</button>
      </div>
      <div className="ml-[200px] max-md:ml-[50px] flex md:gap-10 gap-5 overflow-hidden text-start">
        {TeamSlideDetails.map((ele, ind) => {
          return (
            <div className="h-[60vh] max-md:h-[50vh] min-w-[20vw] max-md:min-w-[60vw] bg-[#171717] p-5 flex flex-col justify-between rounded-xl">
              <h1>{ele.title}</h1>
              <h1>{ele.description}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntreSlides;
