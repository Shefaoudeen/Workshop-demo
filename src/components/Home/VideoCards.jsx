import React from "react";
import { Video1 } from "../../assets/videos";
import { features_info } from "../../Data/Features";

const VideoCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl max-md:text-xl font-bold py-10">
        Explore more features in ChatGPT
      </h1>
      <div className="w-[72%] max-md:w-[90%] flex flex-col md:gap-32 gap-10">
        {features_info.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] flex max-md:flex-col md:min-h-[75vh] md:max-h-[75vh] rounded-md"
              key={index}
            >
              <div className="md:w-1/2 flex flex-col justify-center md:px-10 max-md:p-8 ">
                <h1 className="text-3xl max-md:text-xl mb-6 font-semibold">
                  {ele.title}
                </h1>
                <p className="max-md:text-sm text-justify">{ele.description}</p>
              </div>
              <div className="md:w-1/2">
                <video
                  loop={true}
                  autoPlay={true}
                  src={ele.videoClip}
                  className="object-cover h-full w-full md:rounded-r-2xl max-md:rounded-b-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCards;
