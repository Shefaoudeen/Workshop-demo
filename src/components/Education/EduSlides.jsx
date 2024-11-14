import React, { useEffect, useState } from "react";
import { Video1, Video2, Video3 } from "../../assets/videos";
import { antAnimation } from "../../utils/gsapAnimations";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const EduSlides = () => {
  const videoSlides = [Video1, Video2, Video3, Video2];
  const [selected, setSeleted] = useState(0);
  const [backdropProps, setBackdropProps] = useState({
    width : 0,
    left : 0
  });
  useEffect(() => {
    setBackdropProps({width : document.getElementById(0).offsetWidth, left : 0})
  },[])


  antAnimation(selected)


  function onMenuClick(menu){
    setSeleted(menu.id);
    setBackdropProps({width : menu.offsetWidth, left : menu.offsetLeft})
  }
  return (
    <div className="flex flex-col justify-center  w-full">
      <h1 className="text-3xl max-md:text-xl text-center">
        How campuses use ChatGPT today
      </h1>
      <div className="relative flex justify-center gap-5 py-5 text-xl mx-auto max-md:text-sm max-w-fit overflow-hidden">
        <button
          className={`px-5 py-2 ${
            selected === 0 ? "" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear mix-blend-difference z-10`}
          id="0"
          onClick={(e) => onMenuClick(e.target)}
        >
          Students
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 1 ? "" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear mix-blend-difference z-10`}
          id="1"
          onClick={(e) => onMenuClick(e.target)}
        >
          Faculty
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 2 ? "" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear mix-blend-difference z-10`}
          id="2"
          onClick={(e) => onMenuClick(e.target)}
        >
          Research
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 3 ? "" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear mix-blend-difference z-10`}
          id="3"
          onClick={(e) => onMenuClick(e.target)}
        >
          Campus operation
        </button>
        <div style={{minWidth : backdropProps.width+"px",left : backdropProps.left+"px"}} className={`rounded-full duration-300 min-h-10 bg-white absolute z-0"`}></div>
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
