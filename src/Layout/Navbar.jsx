import React from "react";
import { Navbar_details } from "../Data/NavbarInfo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="fixed  flex w-screen justify-between  text-gray-500  backdrop-blur  p-5 shadow-xl shadow-gray-50/5 z-50 md:px-[100px] max-md:text-sm overflow-hidden">
      <div className="text-white font-semibold z-20 max-md:min-w-[30vw] fixed">
        ChatGPT |{" "}
      </div>
      <div className="max-md:min-w-[20vw]"></div>
      <div className="overflow-hidden ml-10">
        <div className="flex md:gap-5 gap-2 z-20">
          {Navbar_details.map((ele, index) => {
            return (
              <div key={index} className="z-20">
                <Link to={ele.Link}>
                  <h1
                    className={`${
                      location.pathname == ele.Link ? "text-white" : ""
                    }`}
                  >
                    {ele.title}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
