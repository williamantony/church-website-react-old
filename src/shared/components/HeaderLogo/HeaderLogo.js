import React from "react";
import "./HeaderLogo.css";

const HeaderLogo = function(props) {
  return (
    <div className="HeaderLogo">
      <div className="HeaderLogo__image">
        <div className="HeaderLogo__image__img HeaderLogo__image__img--light"></div>
        <div className="HeaderLogo__image__img HeaderLogo__image__img--dark"></div>
      </div>
    </div>
  );
};

export default HeaderLogo;
