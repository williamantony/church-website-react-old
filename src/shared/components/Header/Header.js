import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initHeader, showHeader, hideHeader } from "../../redux/actions";
import withScrollAction from "./withScrollAction";
import classNames from "classnames";
import "./Header.css";

const Header = function ({
  logo = "ipa",
  component,
  defaultTheme,
  currentTheme,
  isVisible,
  initHeader,
  showHeader,
}) {
  useEffect(() => {
    initHeader(defaultTheme);

    if (window.scrollY < 100) {
      showHeader();
    }
  }, []);

  let headerClass = classNames(
    "Header",
    `Header--theme-${currentTheme}`,
    `Header--logo-${logo}`,
    {
      "Header--isVisible": isVisible,
    }
  );

  return <header className={headerClass}>{component}</header>;
};

const mapStateToProps = (state, props) => {
  const defaultTheme = props.theme || state.header.theme.default;

  return {
    defaultTheme,
    currentTheme: state.header.theme.current || defaultTheme,
    isVisible: state.header.isVisible,
  };
};

const mapDispatchToProps = {
  initHeader,
  showHeader,
  hideHeader,
};

export default withRouter(
  withScrollAction(connect(mapStateToProps, mapDispatchToProps)(Header))
);
