import React, { useState } from "react";
import { Video1, Video2, Video3 } from "../../assets/videos";
import { antAnimation } from "../../utils/gsapAnimations";

const EduSlides = () => {
  const [selected, setSeleted] = useState(0);
  const videoSlides = [Video1, Video2, Video3, Video2];
  antAnimation(selected)
  return (
    <div className="flex flex-col justify-center  w-full">
      <h1 className="text-3xl max-md:text-xl text-center">
        How campuses use ChatGPT today
      </h1>
      <div className="flex justify-center gap-5 py-5 text-xl max-md:text-sm overflow-auto">
        <button
          className={`px-5 py-2 ${
            selected === 0 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear`}
          onClick={() => setSeleted(0)}
        >
          Students
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 1 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear`}
          onClick={() => setSeleted(1)}
        >
          Faculty
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 2 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear`}
          onClick={() => setSeleted(2)}
        >
          Research
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 3 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear`}
          onClick={() => setSeleted(3)}
        >
          Campus operation
        </button>
      </div>
      <div className="flex w-full transition-all duration-200 ease-linear rounded-2xl items-center justify-center">
        <video
          src={videoSlides[selected]}
          id="img"
          className="h-[60vh] w-[50vw] object-cover rounded-2xl"
          autoPlay
        />
      </div>
    </div>
  );
};

export default EduSlides;
