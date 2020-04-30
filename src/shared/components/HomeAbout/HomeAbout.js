import React from "react";
import HomeAboutOverview from "../HomeAboutOverview/HomeAboutOverview";
import HomeAboutGrid from "../HomeAboutGrid/HomeAboutGrid";

const HomeAbout = function(props) {
  return (
    <div className="HomeAbout">
      <HomeAboutOverview />
      <HomeAboutGrid />
    </div>
  );
};

export default HomeAbout;
