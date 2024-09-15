import React from "react";

const CustomButton = (props) => {
  return (
    <button className="bg-white text-black rounded-full px-4 py-2 w-fit mt-5">
      {props.content} &#8599;
    </button>
  );
};

export default CustomButton;
