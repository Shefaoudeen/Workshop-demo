import React from "react";
import Plans from "../components/Home/Plans";
import Compare from "../components/Pricing/Compare";
import Faq from "../components/Pricing/Faq";

const Pricing = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-center items-center pt-32">
      <h1 className="text-5xl font-semibold">Pricing</h1>
      <Plans />
      <Compare />
      <Faq />
    </div>
  );
};

export default Pricing;
