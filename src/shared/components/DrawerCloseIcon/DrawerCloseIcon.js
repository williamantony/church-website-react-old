import React from "react";
import "./DrawerCloseIcon.css";

const DrawerCloseIcon = function ({ onClick }) {
  return (
    <div className="DrawerCloseIcon" onClick={onClick}>
      <div className="DrawerCloseIcon__holder">
        <div className="DrawerCloseIcon__icon">
          <div className="DrawerCloseIcon__line"></div>
          <div className="DrawerCloseIcon__line"></div>
          <div className="DrawerCloseIcon__line"></div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCloseIcon;
