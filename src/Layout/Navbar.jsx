import React from "react";
import { Navbar_details } from "../Data/NavbarInfo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="fixed  flex w-screen justify-between  text-gray-500  backdrop-blur  p-3 border-b-white/50 border-b z-50">
      <div className="text-white font-semibold z-20">ChatGPT</div>
      <div>
        <div className="flex gap-5 z-20">
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
