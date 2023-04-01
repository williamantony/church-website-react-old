import React from "react";
import pastorPhoto from "./images/pastor-joseph_k_joseph.png";
import "./HomeGreetings.css";

const HomeGreetings = function (props) {
  return (
    <div className="HomeGreetings">
      <div className="wrapper wrapper--content">
        <div className="HomeGreetings__content">
          <div className="HomeGreetings__pastor">
            <div className="HomeGreetings__pastor__image">
              <img
                src={pastorPhoto}
                alt="Pr. Joseph K Joseph"
                draggable="false"
              />
            </div>
            <div className="HomeGreetings__pastor__info">
              <div className="HomeGreetings__pastor__info__name">
                Pr. Joseph K. Joseph
              </div>
              <div className="HomeGreetings__pastor__info__role">
                Senior Pastor
              </div>
            </div>
          </div>
          <div className="HomeGreetings__text">
            <h2 className="h2--thin">Greetings</h2>
            <p>I am glad you are here to know about our church.</p>
            <br />
            <p>
              If you are interested in worshipping with us, I whole-heartedly
              welcome you to attend our worship service and experience the touch
              and power of God.
            </p>
            <br />
            <p>Thank you and God bless you.</p>
            <div className="HomeGreetings__signature"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGreetings;
