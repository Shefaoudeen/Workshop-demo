import React from "react";
import CustomButton from "../CustomButton";

const Landing = () => {
  return (
    <div className="bg-black/95 w-full h-screen text-white flex items-center justify-center">
      <div className="text-center flex flex-col gap-4 px-20">
        <h1 className="font-bold">ChatGPT</h1>
        <h1 className="text-4xl font-semibold tracking-tight">
          Get answers. Find inspiration. Be more productive.
        </h1>
        <h1 className="text-2xl">
          Free to use. Easy to try. Just ask and ChatGPT can help with writing,
          learning, brainstorming, and more.
        </h1>
        <div>
          <CustomButton content="Start now" />
        </div>
        <h1 className="text-md font-semibold">Download the app</h1>
      </div>
    </div>
  );
};

export default Landing;
