import React from "react";
import "./LocationStaticMap.css";

const LocationStaticMap = function (props) {
  return (
    <div className="LocationStaticMap">
      <div className="LocationStaticMap__map"></div>
      <div className="LocationStaticMap__gradient"></div>
      <div className="LocationStaticMap__gradient"></div>
      <div className="LocationStaticMap__overlay">
        <div className="LocationStaticMap__marker">
          <div className="LocationStaticMap__marker__circle"></div>
          <div className="LocationStaticMap__marker__circle"></div>
        </div>
      </div>
    </div>
  );
};

export default LocationStaticMap;
