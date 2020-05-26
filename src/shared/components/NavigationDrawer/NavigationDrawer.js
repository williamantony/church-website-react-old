import React from "react";
import Navigation from "../Navigation/Navigation";
import menu from "./navigation.list";
import "./NavigationDrawer.css";

const NavigationDrawer = function (props) {
  return (
    <div className="NavigationDrawer">
      <div className="wrapper wrapper--content">
        <div className="NavigationDrawer__holder">
          <div className="wrapper wrapper--640px">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
