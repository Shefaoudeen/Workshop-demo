import React from "react";
import { list1 } from "../../Data/HomePageInfo";

const ListSliding = () => {
  return (
    <div className="flex flex-col gap-10 py-32 overflow-x-scroll no-scrollbar">
      <div className="flex gap-5">
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
      <div className="flex gap-5 -ml-[200px]">
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
      <div className="flex gap-5">
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
