import React from "react";
import CustomButton from "../CustomButton";

const EntreEnding = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-[#171717] w-[90%] py-20 flex flex-col items-center rounded-xl  gap-4">
        <h1 className="text-2xl max-md:text-xl text-center">
          Learn how ChatGPT can transform your organization
        </h1>
        <div className="flex max-md:flex-col gap-4 items-center max-md:text-sm">
          <CustomButton content="Talk with our team" />
          <button>Explore ChatGPT Team {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default EntreEnding;
