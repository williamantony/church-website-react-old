import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationSet = function ({ set, level, isCollapsed }) {
  if (!set) return null;

  return (
    <ul className={`NavigationSet NavigationSet--${level}`}>
      <div className="NavigationSet__holder">
        {set.map((item, index) => (
          <NavigationItem key={index} menu={item} level={level} />
        ))}
      </div>
    </ul>
  );
};

export default NavigationSet;
