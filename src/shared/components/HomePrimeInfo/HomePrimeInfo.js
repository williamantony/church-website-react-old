import React from "react";
import HomePrimeInfoItem from "../HomePrimeInfoItem/HomePrimeInfoItem";
import "./HomePrimeInfo.css";

const HomePrimeInfo = function(props) {
  return (
    <div className="HomePrimeInfo">
      <div className="HomePrimeInfo__bg HomePrimeInfo__bg--one"></div>
      <div className="HomePrimeInfo__bg HomePrimeInfo__bg--two"></div>
      <div className="HomePrimeInfo__gradient"></div>
      <div className="wrapper wrapper--inner">
        <div className="HomePrimeInfo__holder">
          <HomePrimeInfoItem title="Updates" icon="speaker">
            Check latest announcements <br/>
            for our upcoming events.
          </HomePrimeInfoItem>
          <HomePrimeInfoItem title="Sermons" icon="sound-waves">
            Watch or listen to <br/>
            our preachings and messages.
          </HomePrimeInfoItem>
          <HomePrimeInfoItem title="Giving" icon="giving">
            You can give your tithes <br/>
            and offerings online.
          </HomePrimeInfoItem>
        </div>
      </div>
    </div>
  );
};

export default HomePrimeInfo;
