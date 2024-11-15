import React, { useState,useEffect } from "react";
import { Video1 } from "../../assets/videos";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
} from "../../assets/Images";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { antAnimation } from "../../utils/gsapAnimations";

const EntreAntAnimation = () => {
  const cards = [card1, card2, card3, card4, card5, card6, card7];
  const [selected, Setselected] = useState(0);
  const [backdropProps, setBackdropProps] = useState({
    width : 0,
    left : 0
  });
  useEffect(() => {
    setBackdropProps({width : document.getElementById(0).offsetWidth, left : 0})
  },[])
  
  function onMenuClick(menu){
    Setselected(menu.id);
    setBackdropProps({width : menu.offsetWidth, left : menu.offsetLeft})
  }

  antAnimation(selected)
  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <div className="text-3xl max-md:text-xl leading-10 text-center font-semibold">
        <h1> Customize ChatGPT to any workflow</h1>
        <h1>and collaborate across teams</h1>
      </div>
      <div className="relative items-center flex gap-5 max-md:text-sm overflow-x-scroll no-scrollbar">
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="0"
          onClick={(e) => onMenuClick(e.target)}
        >
          Engineering
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="1"
          onClick={(e) => onMenuClick(e.target)}
        >
          Marketing
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit `}
          id="2"
          onClick={(e) => onMenuClick(e.target)}
        >
          Sales & success
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="3"
          onClick={(e) => onMenuClick(e.target)}
        >
          Finance & accounting
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="4"
          onClick={(e) => onMenuClick(e.target)}
        >
          IT
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="5"
          onClick={(e) => onMenuClick(e.target)}
        >
          Operation
        </button>
        <button
          className={`px-5 py-2 z-10
          } mix-blend-difference rounded-full transition-all duration-100 ease-linear min-w-fit`}
          id="6"
          onClick={(e) => onMenuClick(e.target)}
        >
          HR & recruiting
        </button>
        <div style={{minWidth : backdropProps.width+"px",left : backdropProps.left+"px"}} className={` rounded-full duration-300 min-h-8 bg-white absolute z-0"`}></div>
      </div>
      {/*
      Don't Repeat Yourself method
      <div className="flex gap-5">
        {data.map((ele,ind)=>{
          return         
          <button
          className={`px-5 py-2 ${
            selected === ind ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(ind)}
        >
          {ele}
        </button>
        })}
      </div>
       */}
      <div className="w-[80%] flex justify-center">
        <img
          className="h-[70vh] rounded-xl object-cover"
          src={cards[selected]}
          id="img"
        />
      </div>
    </div>
  );
};

export default EntreAntAnimation;
