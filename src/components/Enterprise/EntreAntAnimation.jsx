import React, { useState } from "react";
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

const EntreAntAnimation = () => {
  const cards = [card1, card2, card3, card4, card5, card6, card7];
  const [selected, Setselected] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <div className="text-3xl max-md:text-xl leading-10 text-center font-semibold">
        <h1> Customize ChatGPT to any workflow</h1>
        <h1>and collaborate across teams</h1>
      </div>
      <div className="flex gap-5 max-md:text-sm overflow-x-scroll no-scrollbar">
        <button
          className={`px-5 py-2 ${
            selected === 0 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(0)}
        >
          Engineering
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 1 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(1)}
        >
          Marketing
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 2 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit `}
          onClick={() => Setselected(2)}
        >
          Sales & success
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 3 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(3)}
        >
          Finance & accounting
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 4 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(4)}
        >
          IT
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 5 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(5)}
        >
          Operation
        </button>
        <button
          className={`px-5 py-2 ${
            selected === 6 ? "bg-white text-black" : "hover:bg-[#171717]"
          }  rounded-full transition-all duration-100 ease-linear min-w-fit`}
          onClick={() => Setselected(6)}
        >
          HR & recruiting
        </button>
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
        />
      </div>
    </div>
  );
};

export default EntreAntAnimation;
