import React from "react";
import NavigationSet from "./NavigationSet";
import "./Navigation.css";

const Navigation = function ({ menu }) {
  return (
    <div className="Navigation">
      <nav>
        <NavigationSet set={menu} level={1} />
      </nav>
    </div>
  );
};

export default Navigation;
