import React from "react";
import { DC_footer, Footer_details } from "../Data/FooterInfo";

const Footer = () => {
  return (
    <div className="w-screen bg-black ">
      <div className="flex max-md:flex-col w-full md:justify-evenly max-md:gap-6 py-10">
        {Footer_details.map((ele, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="text-[#838383]">{ele.heading}</h1>
              <div className="text-white flex flex-col gap-4">
                {ele.links.map((subele, subindex) => {
                  return <h1 key={subindex}>{subele}</h1>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#171717] flex justify-between p-5">
        <div className="bg-white rounded-lg">
          <h1 className="text-[#171717] font-extrabold px-2">DC 24</h1>
        </div>
        <div className="text-white flex gap-5">
          {DC_footer.map((ele, index) => {
            return (
              <div key={index}>
                <a href={ele.link} target="_blank">
                  <img src={ele.icon} className="w-[25px]" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;