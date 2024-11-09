import React from "react";
import CustomButton from "../CustomButton";
import { DClogo, Uni1, Uni2, Uni3, Uni4 } from "../../assets/Images";

const EduHome = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center max-md:justify-center text-center gap-5 md:mt-20 max-md:min-h-[100vh]">
        <h1>ChatGPT Edu</h1>
        <h1 className="text-5xl font-semibold">Bring AI to campus at scale</h1>
        <div className="text-lg max-md:text-sm">
          <h1>An accessible option for university to deploy AI to </h1>
          <h1>students, faculty, researchers, and campus operations.</h1>
        </div>
        <CustomButton content="Talk with our team" />
      </div>
      <div className="mt-20">
        <div className="flex gap-5 max-md:grid max-md:grid-cols-2 items-center">
          <div>
            <img src={Uni1} alt="" className="w-[200px] grayscale" />
          </div>
          <div>
            <img src={Uni2} alt="" className="w-[200px] grayscale" />
          </div>
          <div>
            <img src={Uni3} alt="" className="w-[200px] grayscale" />
          </div>
          <div>
            <img
              src={Uni4}
              alt=""
              className="w-[200px] max-h-[100px] object-contain grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduHome;
