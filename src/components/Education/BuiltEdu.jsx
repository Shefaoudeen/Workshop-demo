import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const BuiltEdu = () => {
  useGSAP(() => {
    gsap.from('.cards',{
      y : 100,
      filter : "blur(4px)",
      duration : 0.5,
      stagger : 0.3,
      scrollTrigger : {
        trigger : '.cards',
        start : "top bottom"
      }
    })
  },[])
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="text-4xl max-md:text-xl">
            ChatGPT, built for education
          </h1>
        </div>
        <div className="flex gap-5 w-[75%] max-md:w-[90%] text-2xl max-md:flex-col">
          <div className="bg-[#171717] rounded-lg p-8  h-[200px] cards">
            <h1>Powered by our newest flagship model, GPT-4o</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 h-[200px] cards">
            <h1>Access to advanced tools and capabilities</h1>
          </div>
          <div className="bg-[#171717] rounded-lg p-8 h-[200px] cards">
            <h1>Enterprise-grade security and admin controls</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltEdu;
