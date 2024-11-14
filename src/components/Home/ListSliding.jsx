import React, { useEffect } from "react";
import { list1 } from "../../Data/HomePageInfo";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const ListSliding = () => {
  const list1Ref = useRef(null)
  const list2Ref = useRef(null)
  const list3Ref = useRef(null)
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();

  useGSAP(() => {
    console.log(list1Ref.current?.scrollWidth)
    if(list1Ref.current){
      t1.to(list1Ref.current,{
        x : -list1Ref.current.scrollWidth/2-10, //10 was subtracted because we given a gap of 20px each so the two sets will also have that gap
        duration : 30,
        ease : "none",
        repeat : -1
      })
      
    }
    if(list2Ref.current){
      gsap.set(list2Ref.current,{
          x : -list2Ref.current.scrollWidth/2,
      })
      t2.to(list2Ref.current,{
        x : 0,
        duration : 30,
        ease : "none",
        repeat : -1
      })
    }  
      if(list3Ref.current){
      t3.to(list3Ref.current,{
        x : -list3Ref.current.scrollWidth/2-10,
        duration : 30,
        ease : "none",
        repeat : -1
      })
    }
  },[])
  return (
    <div className="flex flex-col gap-10 py-32 overflow-x-scroll no-scrollbar">
      <div className="flex gap-5" ref={list1Ref} onMouseOver={() => t1.pause()} onMouseLeave={() => t1.play()}>
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 -ml-[200px]" ref={list2Ref} onMouseOver={() => t2.pause()} onMouseLeave={() => t2.play()}>
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5" ref={list3Ref} onMouseOver={() => t3.pause()} onMouseLeave={() => t3.play()}>
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
        {list1.map((ele, index) => {
          return (
            <div
              className="bg-[#171717] min-w-[400px] p-7 rounded-xl"
              key={index}
            >
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSliding;
