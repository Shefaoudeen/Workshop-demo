import React from "react";
import CustomButton from "../CustomButton";
import {
  Company1,
  Company2,
  Company3,
  Company4,
  DClogo,
} from "../../assets/Images";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { titleAnimation } from "../../utils/gsapAnimations";
gsap.registerPlugin(ScrollTrigger)

const TeamLanding = () => {
  titleAnimation("title")
  useGSAP(() => {

    gsap.to('.logo',{
      opacity : 1,
      duration : 1,
      delay : 0.8
    })
    // tl.to('.logo',{
    //   scale : 0.9,
    //   repeat : -1,
    //   stagger : 0.5,
    //   duration : 1,
    //   yoyo : true
    // })
  },[])
  return (
    <div className="w-screen min-h-screen flex flex-col text-center justify-center items-center gap-5">
      <div className="min-h-[50vh] max-md:min-h-[100vh] flex flex-col justify-center items-center gap-5">
        <h1 className="title">ChatGPT Team</h1>
        <div className="title text-6xl max-md:text-2xl">
          <h1>An always-improving superassistant</h1>
          <h1>for every member of your team</h1>
        </div>
        <div className="title text-xl max-md:text-sm">
          <h1>Generate better code, craft emails, analyze data, and </h1>
          <h1>
            supercharge any type of work in a collaborative team workspace.
          </h1>
        </div>
        <div className="title"><CustomButton content="Start now" /></div>
      </div>
      <div className="flex gap-10 max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 items-center">
        <div className="logo opacity-0">
          <img src={Company1} alt="" className="w-[200px] grayscale" />
        </div>
        <div className="logo opacity-0">
          <img src={Company2} alt="" className="w-[200px] grayscale" />
        </div>
        <div className="logo opacity-0">
          <img src={Company3} alt="" className="w-[200px] grayscale" />
        </div>
        <div className="logo opacity-0">
          <img src={Company4} alt="" className="w-[200px] grayscale" />
        </div>
      </div>
    </div>
  );
};

export default TeamLanding;
