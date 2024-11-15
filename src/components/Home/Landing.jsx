import React from "react";
import CustomButton from "../CustomButton";

const Landing = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center ">
      <div className="text-center flex flex-col gap-6 md:px-20">
        <h1 className="text-xl">chatGPT</h1>
        <div className="text-6xl  tracking-tight max-md:text-3xl">
          <h1>Get answers. Find inspiration.</h1>
          <h1>Be more productive.</h1>
        </div>
        <div className="md:text-xl text-sm">
          <h1>Free to use. Easy to try. Just ask and ChatGPT can</h1>
          <h1>help with writing, learning, brainstorming, and more.</h1>
        </div>
        <div className="flex max-md:flex-col gap-5 justify-center items-center max-md:text-sm">
          <CustomButton content="Start now" />
          <button className="text-md font-semibold">Download the app</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
