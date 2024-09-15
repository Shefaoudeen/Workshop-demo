import React, { useState } from "react";
import { FAQ_info } from "../../Data/Faq";

const Faq = () => {
  const [toggle, setToggle] = useState(null);
  const handleClick = (index) => {
    if (toggle == index) return setToggle(null);
    return setToggle(index);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">FAQ</h1>
      <div className="w-[75%] bg-[#171717] flex flex-col gap-4">
        {FAQ_info.map((ele, ind) => {
          return (
            <div className="border-b-2 border-gray-400 flex flex-col gap-4">
              <div onClick={() => handleClick(ind)}>
                <h1 className="text-xl font-semibold">{ele.question}</h1>
              </div>
              <div
                className={`${
                  ind == toggle
                    ? "h-auto max-h-[9999px] "
                    : "max-h-0 overflow-hidden"
                } ease-[cubic-bezier(0,1,0,1)]  transition-all duration-500 `}
              >
                {ele.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
