import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderMenuIcon from "../HeaderMenuIcon/HeaderMenuIcon";
import HeaderSearchIcon from "../HeaderSearchIcon/HeaderSearchIcon";
import "./Header.css";

const Header = function({ theme = "transparent", logo = "ipa" }) {
  const headerClassName = `Header Header--theme-${ theme } Header--logo-${ logo }`;

  return (
    <header className={ headerClassName }>
      <div className="wrapper wrapper--inner">
        <div className="Header__bar">
          <HeaderLogo logo={ logo } />
          <div className="Header__bar__group">
            <HeaderSearchIcon />
            <HeaderMenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
