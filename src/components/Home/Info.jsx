import React from "react";
import { Photo1, Photo2, Photo3 } from "../../assets/Images";
import { HomeInfoDetails } from "../../Data/HomeInfo";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-10">
      {HomeInfoDetails.map((ele, ind) => {
        return (
          <section className="md:w-[75%] max-md:px-5 flex flex-col gap-10 justify-center items-center ">
            <div className="text-5xl max-md:text-xl font-semibold  text-center flex flex-col md:gap-2">
              <h1>{ele.line1}</h1>
              <h1>{ele.line2}</h1>
            </div>
            <img
              src={ele.image}
              className="rounded-xl max-md:h-[75vh] object-cover"
            />
          </section>
        );
      })}
    </div>
  );
};

export default Info;
