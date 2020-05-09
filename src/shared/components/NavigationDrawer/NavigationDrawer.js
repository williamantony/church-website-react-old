import React from "react";
import Navigation from "../Navigation/Navigation";
import "./NavigationDrawer.css";

const NavigationDrawer = function(props) {
  return (
    <div className="NavigationDrawer">
      <div className="wrapper wrapper--content">
        <div className="NavigationDrawer__holder">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
