import React from "react";
import "./SocialMediaIcon.css";

const SocialMediaIcon = function ({ name }) {
  return (
    <div className={`SocialMediaIcon SocialMediaIcon--${name}`}>
      <div className="SocialMediaIcon__image"></div>
    </div>
  );
};

export default SocialMediaIcon;
