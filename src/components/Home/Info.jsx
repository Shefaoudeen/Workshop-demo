import React from "react";
import { Photo1, Photo2, Photo3 } from "../../assets/Images";
import { HomeInfoDetails } from "../../Data/HomeInfo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
const Info = () => {
  useGSAP(() => {
    HomeInfoDetails.forEach((ele,ind) => {
      gsap.from('#img'+ind,{
        opacity : 0,
        duration : 2,
        scrollTrigger : {
          trigger : '#img'+ind,
          start : "100px bottom",
        }
      })
      gsap.from('#text'+ind,{
        x : -200,
        filter : "blur(3px)",
        duration : 0.5,
        scrollTrigger : {
          trigger : '#text'+ind,
          start : "100px bottom",
        }
      })
    })

  },[])
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-10">
      {HomeInfoDetails.map((ele, ind) => {
        return (
          <section className="md:w-[75%] max-md:px-5 flex flex-col gap-10 justify-center items-center ">
            <div id={"text" + ind} className="text-5xl max-md:text-xl font-semibold  text-center flex flex-col md:gap-2">
              <h1>{ele.line1}</h1>
              <h1>{ele.line2}</h1>
            </div>
            <img
              src={ele.image}
              className="rounded-xl max-md:h-[75vh] object-cover max-md:hidden"
              id={"img" + ind}
            />
            <img
              src={ele.mobileImage}
              className="rounded-xl max-md:h-[75vh] object-cover md:hidden"
              id={"img" + ind}
            />
          </section>
        );
      })}
    </div>
  );
};

export default Info;
