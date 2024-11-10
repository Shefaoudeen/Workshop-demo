import React, { useEffect } from "react";
import CustomButton from "../CustomButton";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";
import { Sli1 } from "../../assets/Images";
import { useState,useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { sliderAnimation } from "../../utils/gsapAnimations";
const TeamSlider = () => {

  const [sliderPosition,setSliderPosition] = useState(0)
  const [slideWidth,setSlideWidth] = useState(0)
  const slideRef = useRef(null)

  useEffect(() => {
    if(slideRef.current){
      console.log(slideRef.current.offsetWidth)
      setSlideWidth(slideRef.current.offsetWidth)
    }
  },[slideRef])
  // useGSAP(() => {
  //   // console.log("slider position : ",sliderPosition)
  //   // console.log("total translation: ",slideWidth*sliderPosition)
  //   gsap.to('.slides', {
  //     right : sliderPosition*slideWidth,
  //     duration : 0.1,
  //     ease : "none"
  //   })
  // },[sliderPosition,slideWidth])

  sliderAnimation(sliderPosition,slideWidth);

  function handleLeftClick(){
    if(sliderPosition !== 0)
      setSliderPosition((sliderPosition-1)%(TeamSlideDetails.length-2))
  }
  function handleRightClick(){
    console.log(window.innerWidth)
    if(sliderPosition !== TeamSlideDetails.length && window.innerWidth > 700){
      return setSliderPosition((sliderPosition+1)%(TeamSlideDetails.length-2))
    }
    setSliderPosition((sliderPosition+1)%(TeamSlideDetails.length)) 
  }

  return (
    <div className="flex flex-col justify-center items-center py-32 gap-10">
      <div className="flex flex-col gap-5 w-full text-center">
        <h1 className="text-2xl">Join us at the AI frontier</h1>
        <div className="flex justify-center gap-5">
          <button onClick={handleLeftClick}>L</button>
          <button onClick={handleRightClick}>R</button>
        </div>
        <div className={` flex gap-[1vw] overflow-x-scroll no-scrollbar text-start duration-300` }>
          {TeamSlideDetails.map((ele, ind) => {
            return (
              <div className={`${ind===0 && "ml-[12.5vw] md:ml-[12vw]"} relative duration-300 slides md:min-w-[24vw]`} ref={slideRef}>
                <img
                  src={ele.image}
                  className={`h-[60vh] max-md:h-[50vh] min-w-[20vw] max-md:min-w-[60vw] flex flex-col justify-between `}
                ></img>
                <h1 className="absolute top-5 left-5 font-bold">{ele.title}</h1>
                <h1 className="absolute bottom-5 left-5">{ele.description}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#171717] mt-10 flex justify-center gap-2 flex-col items-center py-20 text-center w-[70%] max-md:w-[90%] rounded-xl">
        <h1 className="text-4xl max-md:text-xl">
          Join thousands of teams redefining
        </h1>
        <h1 className="text-4xl max-md:text-xl">how they work with ChatGPT</h1>
        <CustomButton content="Start now" />
      </div>
    </div>
  );
};

export default TeamSlider;
