import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

const DrawerItem = function ({ name = "", component, type }) {
  if (type !== name) return null;

  const DrawerItemClass = classNames("DrawerItem", `DrawerItem--${name}`);

  return <div className={DrawerItemClass}>{component}</div>;
};

const mapStateToProps = (state) => {
  return {
    type: state.drawer.type,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerItem);
