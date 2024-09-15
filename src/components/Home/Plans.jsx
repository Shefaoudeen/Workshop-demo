import React from "react";
import { Plan_info } from "../../Data/Plan";
import CustomButton from "../CustomButton";

const Plans = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[72%] flex flex-col max-md:w-[90%]">
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold py-5">
            Get started with ChatGPT today
          </h1>
          <h1>View pricing plans</h1>
        </div>
        <div className="flex gap-3 justify-center overflow-hidden max-md:flex-col">
          {Plan_info.map((ele, index) => {
            return (
              <div
                className="bg-[#171717] min-w-[50%] flex flex-col gap-3 p-10 "
                key={index}
              >
                <h1 className="font-bold text-3xl">{ele.title}</h1>
                <div className=" flex md:flex-1 flex-col py-2 gap-3">
                  {ele.info.map((subEle, subInd) => {
                    return (
                      <div key={subInd} className="mb-2 flex">
                        {" "}
                        <div className="font-extrabold mr-2">&#10003;</div>
                        <div>{subEle}</div>
                      </div>
                    );
                  })}
                </div>

                <h1 className="text-xl">
                  <span className="text-2xl font-bold py-2">${ele.price}</span>{" "}
                  / month
                </h1>
                <CustomButton content="Start now" />
              </div>
            );
          })}
        </div>
        <div className="bg-[#171717] mt-10 flex justify-center flex-col items-center py-10 text-center">
          <h1 className="text-4xl max-lg:w-[65%] md:w-[50%] max-md:text-2xl">
            Join hundreds of millions of users and try ChatGPT today.
          </h1>
          <CustomButton content="Try ChatGPT" />
        </div>
      </div>
    </div>
  );
};

export default Plans;
