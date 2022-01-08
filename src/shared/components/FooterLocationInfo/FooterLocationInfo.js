import React from "react";
import Button from "../Button/Button";
import "./FooterLocationInfo.css";

const FooterLocationInfo = function (props) {
  return (
    <div className="FooterLocationInfo">
      <div className="FooterLocationInfo__holder">
        <h4 className="h4--thin">Our Address</h4>
        <div className="FooterLocationInfo__text">
          6200 West Foster Avenue,
          <br /> Chicago, Illinois - 60630
          <br /> United States
        </div>
        <Button text="View Map" size="small" type="outline" bgColor="#263238" />
      </div>
    </div>
  );
};

export default FooterLocationInfo;
