import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./HeaderLogo.css";

const HeaderLogo = function ({
  logo = "none",
  size = "medium",
  type = "name",
}) {
  const LogoClass = classNames(
    "HeaderLogo",
    `HeaderLogo--logo-${logo}`,
    `HeaderLogo--size-${size}`,
    `HeaderLogo--type-${type}`
  );

  return (
    <div className={LogoClass}>
      <Link to="/">
        <div className="HeaderLogo__image">
          <div className="HeaderLogo__image__img HeaderLogo__image__img--light"></div>
          <div className="HeaderLogo__image__img HeaderLogo__image__img--dark"></div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
