import React from "react";
import { eduCommits } from "../../Data/EduCommits";
import CustomButton from "../CustomButton";
import { listAnimation } from "../../utils/gsapAnimations";

const EduCommitment = () => {
  listAnimation(eduCommits,"infoPoints")
  return (
    <div className="flex flex-col gap-20 justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-semibold max-md:text-xl text-center">
          Our commitment to data privacy, security, and partnership
        </h1>
        <div className="flex gap-4 max-w-[80%] justify-center max-md:flex-col max-md:min-w-[90%]">
          {eduCommits.map((ele, index) => {
            return (
              <div className="bg-[#171717] p-10 flex flex-col gap-5 md:max-w-[30%]">
                <h1 className="font-semibold text-2xl">{ele.title}</h1>
                <ul className="flex flex-col gap-5">
                  {ele.points.map((subele, subindex) => {
                    return (
                      <li className="flex gap-3" id={"infoPoints" + index}>
                        <div>
                          <h1>✓</h1>
                        </div>
                        <div>
                          <h1>{subele}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[80%] ">
        <div className="bg-[#171717] w-full flex flex-col items-center justify-center py-20 rounded-xl text-center">
          <h1 className="text-xl mb-10">Bring ChatGPT Edu to your campus</h1>
          <CustomButton content="Talk with our team" />
        </div>
      </div>
    </div>
  );
};

export default EduCommitment;
