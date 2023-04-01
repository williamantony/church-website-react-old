import React from "react";
import Button from "../Button/Button";
import "./HomeWelcome.css";

const HomeWelcome = function (props) {
  return (
    <div className="HomeWelcome">
      <div className="HomeWelcome__title">
        Welcome to <span className="HomeWelcome__title__name">IPA Chicago</span>
      </div>
      <div className="HomeWelcome__text">Let's worship together</div>
      <div className="HomeWelcome__buttons">
        <Button text="Get Involved" hoverType="outline" />
      </div>
    </div>
  );
};

export default HomeWelcome;
