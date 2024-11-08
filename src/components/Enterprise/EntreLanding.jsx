import React from "react";
import CustomButton from "../CustomButton";

const EntreLanding = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col text-center gap-5">
        <h1 className="md:text-xl">ChatGPT Enterprise</h1>
        <h1 className="text-6xl font-medium max-md:text-4xl">
          Redefine work in the age of AI
        </h1>
        <h1 className="text-2xl max-md:text-md">
          Enterprise-grade security and privacy and the most powerful version of
          ChatGPT yet.
        </h1>
        <div className="flex gap-5 justify-center items-center max-md:flex-col mt-5">
          <CustomButton content="Talk with our team" />
          <button>Get startd with ChatGPT Team {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default EntreLanding;
