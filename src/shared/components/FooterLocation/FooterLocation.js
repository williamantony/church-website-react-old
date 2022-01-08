import React from "react";
import FooterLocationMap from "../FooterLocationMap/FooterLocationMap";
import FooterLocationInfo from "../FooterLocationInfo/FooterLocationInfo";
import "./FooterLocation.css";

const FooterLocation = function (props) {
  return (
    <div className="FooterLocation">
      <FooterLocationInfo />
      <FooterLocationMap />
    </div>
  );
};

export default FooterLocation;
