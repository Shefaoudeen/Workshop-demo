import React from "react";
import { eduCommits } from "../../Data/EduCommits";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const EntreCards = () => {
  useGSAP(() => {
    eduCommits.forEach((ele,ind) => {
      gsap.from('#infoPoints'+ind,{
        opacity : 0,
        duration : 1.5,
        stagger : 0.1,
        scrollTrigger : {
          trigger : '#infoPoints'+ind,
          start : "top bottom",
        }
      })
    })
  },[])
  return (
    <div className="flex flex-col gap-20 justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="text-3xl max-md:text-xl text-center font-semibold">
          <h1>Enterprise-level privacy, security,</h1>
          <h1>and OpenAI partnership</h1>
        </div>
        <div className="flex max-md:flex-col gap-4 md:max-w-[80%] w-[95%] justify-center">
          {eduCommits.map((ele, index) => {
            return (
              <div className="bg-[#171717] p-10 flex flex-col gap-5 md:max-w-[30%] rounded-xl">
                <h1 className="font-semibold text-2xl">{ele.title}</h1>
                <ul className="flex flex-col gap-5">
                  {ele.points.map((subele, subindex) => {
                    return (
                      <li className="flex gap-3" id={"infoPoints"+index}>
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
    </div>
  );
};

export default EntreCards;
