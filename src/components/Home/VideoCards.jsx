import React from "react";
import { Video1 } from "../../assets/videos";
import { features_info } from "../../Data/Features";

const VideoCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold py-10">
        Explore more features in ChatGPT
      </h1>
      <div className="w-[72%] flex flex-col gap-32">
        {features_info.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] flex min-h-[55vh] max-h-[55vh] rounded-2xl"
              key={index}
            >
              <div className="w-1/2 flex flex-col justify-center px-10">
                <h1 className="text-3xl font-bold mb-6">{ele.title}</h1>
                <p>{ele.description}</p>
              </div>
              <div className="w-1/2">
                <video
                  loop={true}
                  autoPlay={true}
                  src={ele.videoClip}
                  className="object-cover h-full w-full rounded-r-2xl"
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
