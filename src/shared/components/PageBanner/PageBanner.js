import React from "react";
import "./PageBanner.css";

const PageBanner = function({ children }) {
  return (
    <div className="PageBanner">
      <div className="absolute PageBanner__image"></div>
      <div className="absolute PageBanner__color"></div>
      <div className="absolute PageBanner__content">
        <div className="PageBanner__content__holder">{ children }</div>
      </div>
    </div>
  );
};

export default PageBanner;
