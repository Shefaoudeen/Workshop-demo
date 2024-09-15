import React from "react";
import Landing from "../components/Home/Landing";
import ListSliding from "../components/Home/ListSliding";
import Info from "../components/Home/Info";
import VideoCards from "../components/Home/VideoCards";
import Plans from "../components/Home/Plans";

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <Landing />
      <ListSliding />
      <Info />
      <VideoCards />
      <Plans />
    </div>
  );
};

export default HomePage;
