import React from "react";
import { connect } from "react-redux";
import { showNavigation, showSearch } from "../../redux/actions";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderSearchIcon from "../HeaderSearchIcon/HeaderSearchIcon";
import HeaderMenuIcon from "../HeaderMenuIcon/HeaderMenuIcon";
import "./PrimaryHeader.css";

const PrimaryHeader = function({ logo, showSearch, showNavigation }) {
  return (
    <div className="PrimaryHeader">
      <div className="wrapper wrapper--inner">
        <div className="PrimaryHeader__content">
          <div className="PrimaryHeader__main">
            <HeaderLogo logo={ logo } />
            <HeaderSearchIcon onClick={ showSearch } />
          </div>
          <HeaderMenuIcon onClick={ showNavigation } />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {
  showSearch,
  showNavigation,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryHeader);
