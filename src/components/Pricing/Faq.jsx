import React, { useState } from "react";
import { FAQ_info } from "../../Data/Faq";
import { accordianAnimation } from "../../utils/gsapAnimations";

const Faq = () => {
  const [toggle, setToggle] = useState(null);
  const handleClick = (index) => {
    if (toggle == index) return setToggle(null);
    return setToggle(index);
  };
  accordianAnimation(toggle)
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen py-10 pb-20">
      <h1 className="text-xl font-semibold">FAQ</h1>
      <div className="max-w-[75%] min-w-[75%] bg-[#171717] flex flex-col gap-4 max-md:max-w-full rounded-2xl p-4">
        {FAQ_info.map((ele, ind) => {
          return (
            <div className="border-b-2 border-gray-500 flex flex-col gap-4 w-full">
              <div
                onClick={() => handleClick(ind)}
                className="cursor-pointer flex justify-between p-4 w-full"
              >
                <h1 className="text-xl font-semibold">{ele.question}</h1>
                <h1>{toggle == ind ? "-" : "+"}</h1>
              </div>
              <div
                id="description"
                className={`${
                  ind == toggle
                    ? "h-0 max-h-[9999px] transition-all"
                    : "max-h-0 overflow-hidden transition-all hidden"
                } duration-500 ease-linear  w-full overflow-hidden`}
              >
                <h1 className="p-4">{ele.answer}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
