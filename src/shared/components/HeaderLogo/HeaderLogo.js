import React from "react";
import "./HeaderLogo.css";

const HeaderLogo = function({ logo = "none", size = "medium", type = "name" }) {
  const LogoClassName = [
    "HeaderLogo",
    ` HeaderLogo--logo-${ logo }`,
    ` HeaderLogo--size-${ size }`,
    ` HeaderLogo--type-${ type }`
  ].join("");

  return (
    <div className={ LogoClassName }>
      <div className="HeaderLogo__image">
        <div className="HeaderLogo__image__img HeaderLogo__image__img--light"></div>
        <div className="HeaderLogo__image__img HeaderLogo__image__img--dark"></div>
      </div>
    </div>
  );
};

export default HeaderLogo;
