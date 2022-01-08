import React from "react";
import "./FooterLocationMap.css";

const FooterLocationMap = function (props) {
  return (
    <div className="FooterLocationMap">
      <div className="FooterLocationMap__static-map"></div>
      <div className="FooterLocationMap__overlay">
        <div className="FooterLocationMap__marker">
          <div className="FooterLocationMap__marker__circle"></div>
          <div className="FooterLocationMap__marker__circle"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterLocationMap;
