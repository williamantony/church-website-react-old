import React from "react";
import "./HomeAboutGridItem.css";

const HomeAboutGridItem = function({ title, icon }) {
  return (
    <div className="HomeAboutGridItem">
      <div className="HomeAboutGridItem__holder">
        <div className="HomeAboutGridItem__text-holder">
          <div className="HomeAboutGridItem__icon" data-icon={ icon }></div>
          <div className="HomeAboutGridItem__text">{ title }</div>
        </div>
        <div className="HomeAboutGridItem__line"></div>
      </div>
    </div>
  );
};

export default HomeAboutGridItem;
