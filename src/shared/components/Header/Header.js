import React from "react";
import { connect } from "react-redux";
import { setHeaderTheme } from "../../redux/actions";
import withScrollAction from "./withScrollAction";
import "./Header.css";

const Header = function ({
  theme = "transparent",
  logo = "ipa",
  isVisible,
  component,
  setHeaderTheme,
}) {
  setHeaderTheme(theme);

  const classes = {
    theme: ` Header--theme-${theme}`,
    logo: ` Header--logo-${logo}`,
    visible: isVisible ? " Header--isVisible" : "",
  };

  const className = `Header${classes.theme}${classes.logo}${classes.visible}`;

  return <header className={className}>{component}</header>;
};

const mapStateToProps = (state) => {
  return {
    theme: state.header.theme,
    isVisible: state.header.isVisible,
  };
};

const mapDispatchToProps = {
  setHeaderTheme,
};

export default withScrollAction(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
