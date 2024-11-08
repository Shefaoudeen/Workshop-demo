import React from "react";

const BuiltEdu = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="text-4xl max-md:text-xl">
            ChatGPT, built for education
          </h1>
        </div>
        <div className="flex gap-5 w-[75%] max-md:w-[90%] text-2xl max-md:flex-col">
          <div className="bg-[#171717] rounded-lg p-8  h-[200px]">
            <h1>Powered by our newest flagship model, GPT-4o</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 h-[200px]">
            <h1>Access to advanced tools and capabilities</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 h-[200px]">
            <h1>Enterprise-grade security and admin controls</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltEdu;
