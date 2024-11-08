import React from "react";
import EntreLanding from "../components/Enterprise/EntreLanding";
import EntreEnding from "../components/Enterprise/EntreEnding";
import EntreCardSlides from "../components/Enterprise/EntreCardSlides";
import EntreAccordian from "../components/Enterprise/EntreAccordian";
import EntreCards from "../components/Enterprise/EntreCards";
import EntreAntAnimation from "../components/Enterprise/EntreAntAnimation";
import EntreSlides from "../components/Enterprise/EntreSlides";

const Enterprise = () => {
  return (
    <div className="bg-black text-white">
      <EntreLanding />
      <EntreSlides />
      <EntreAntAnimation />
      <EntreCards />
      <EntreAccordian />
      <EntreCardSlides />
      <EntreEnding />
    </div>
  );
};

export default Enterprise;
