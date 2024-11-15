import React from "react";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";
import {useState,useRef,useEffect} from "react"
import {sliderAnimation} from "../../utils/gsapAnimations";

const EntreSlides = () => {
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
    <div className="min-h-screen flex flex-col text-center gap-6">
      <h1 className="text-5xl max-md:text-3xl font-semibold">
        A new way of working
      </h1>
      <h1 className="text-xl max-md:text-sm">
        92% of the Fortune 500 already use OpenAI in their business
      </h1>
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
  );
};

export default EntreSlides;
