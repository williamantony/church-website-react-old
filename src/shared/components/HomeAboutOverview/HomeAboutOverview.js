import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./HomeAboutOverview.css";

const HomeAboutOverview = function (props) {
  return (
    <div className="HomeAboutOverview">
      <div className="wrapper wrapper--text">
        <div className="HomeAboutOverview__text">
          <h2 className="h2--thin">Overview</h2>
          <p>
            We are a church that honors God's Word, believes in the work of the
            Holy Spirit, and worship the Lord in spirit and truth. We are a
            caring and loving church that has been in existence since 1972. We
            are a missionary-minded church that believes in reaching the
            unreached with the love of Jesus Christ.
          </p>
          <br />
          <br />
          <Link to="/about">
            <Button text="Learn More" type="outline" bgColor="#263238" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutOverview;
