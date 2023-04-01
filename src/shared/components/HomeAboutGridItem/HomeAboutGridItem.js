import React from "react";
import { Link } from "react-router-dom";
import "./HomeAboutGridItem.css";

const HomeAboutGridItem = function ({ title, icon, to }) {
  return (
    <div className="HomeAboutGridItem">
      <Link to={to}>
        <div className="HomeAboutGridItem__holder">
          <div className="HomeAboutGridItem__text-holder">
            <div className="HomeAboutGridItem__icon" data-icon={icon}></div>
            <div className="HomeAboutGridItem__text">{title}</div>
          </div>
          <div className="HomeAboutGridItem__line"></div>
        </div>
      </Link>
    </div>
  );
};

export default HomeAboutGridItem;
