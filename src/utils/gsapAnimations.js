import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export function titleAnimation(className) {
  useGSAP(() => {
    gsap.from('.' + className, {
      y: 100,
      duration: 0.5,
      stagger: 0.1,
      filter: "blur(3px)",
    })
  }, [])
}
export function accordianAnimation(toggleState) {
  useGSAP(() => {
    gsap.from('#img', {
      opacity: 0,
      duration: 1
    })
    gsap.from('#description', {
      height: "0",
      duration: 0.1
    })
  }, [toggleState])
}
export function antAnimation(toggleState) {
  useGSAP(() => {
    gsap.from('#img', {
      opacity: 0,
      duration: 1.2
    })
  }, [toggleState])
}

export function listAnimation(arr,id) {
  useGSAP(() => {
    arr.forEach((ele,ind) => {
      gsap.from("#"+id+ind,{
        opacity : 0,
        duration : 1,
        stagger : 0.1,
        scrollTrigger : {
          trigger : "#"+id+ind,
          start : "top bottom",
          scrub : 1
        }
      })
    })
  },[])
}

export function sliderAnimation(sliderPosition,slideWidth){
  useGSAP(() => {
    gsap.to('.slides', {
      right : sliderPosition*slideWidth,
      duration : 0.1,
      ease : "none"
    })
  },[sliderPosition,slideWidth])
}