import React from "react";
import "./HeaderSearchIcon.css";

const HeaderSearchIcon = function({ onClick }) {
  return (
    <div className="HeaderSearchIcon" onClick={ onClick }>
      <div className="HeaderSearchIcon__icon"></div>
    </div>
  );
};

export default HeaderSearchIcon;
