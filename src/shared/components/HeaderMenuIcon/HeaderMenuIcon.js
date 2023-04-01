import React from "react";
import "./HeaderMenuIcon.css";

const HeaderMenuIcon = ({ onClick }) => {
  return (
    <div className="HeaderMenuIcon" onClick={onClick}>
      <div className="HeaderMenuIcon__holder">
        <div className="HeaderMenuIcon__icon">
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuIcon;
