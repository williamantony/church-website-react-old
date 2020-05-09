import React from "react";
import { connect } from "react-redux";
import { closeDrawer } from "../../redux/actions";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import DrawerCloseIcon from "../DrawerCloseIcon/DrawerCloseIcon";
import "./DrawerHeader.css";

const DrawerHeader = function({ logo = "ipa", closeDrawer }) {
  return (
    <div className="DrawerHeader Header--theme-light"> 
      <div className="wrapper wrapper--max wrapper--inner">
        <div className="DrawerHeader__holder">
          <div className="DrawerHeader__logo">
            <HeaderLogo logo={ logo } type="full" />
          </div>
          <DrawerCloseIcon onClick={ closeDrawer } />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  closeDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHeader);
