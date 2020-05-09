import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";

const HeaderLogo = function({ logo = "none", size = "medium", type = "name" }) {
  const classes = {
    logo: ` HeaderLogo--logo-${ logo }`,
    size: ` HeaderLogo--size-${ size }`,
    type: ` HeaderLogo--type-${ type }`,
  };

  return (
    <div className={ `HeaderLogo${ classes.logo }${ classes.size }${ classes.type }` }>
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
