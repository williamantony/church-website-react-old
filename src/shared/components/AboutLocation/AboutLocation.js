import React from "react";
import Button from "../Button/Button";
import "./AboutLocation.css";
import churchPhoto from "./images/church_image.png";

const AboutLocation = function(props) {
  return (
    <div className="AboutLocation">
      <div className="wrapper wrapper--inner">
        <div className="AboutLocation__content">
          <div className="AboutLocation__image">
            <img src={churchPhoto} alt="IPA Chicago Church Building" draggable={false} />
          </div>
          <div className="AboutLocation__info">
            <div className="AboutLocation__info__icon"></div>
            <div className="AboutLocation__info__text">
              6200 West Foster Avenue,<br/>
              Chicago, IL 60630
            </div>
            <Button text="Get Direction" type="outline" size="small" bgColor="#263238" />
          </div>
        </div>
        <div className="AboutLocation__text">
          <p>
            We are caring church, where the love of the Lord is evident. <br/>
            Attend our church service to experience love, power and presence of the Holy Spirit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLocation;
