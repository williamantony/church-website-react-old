import React from "react";
import { connect } from "react-redux";
import "./TabItem.css";

const TabItem = function ({ name, component, isVisible }) {
  const classes = {
    name: ` TabItem--${name}`,
    visible: isVisible ? " TabItem--visible" : "",
  };

  return (
    <div className={`TabItem${classes.name}${classes.visible}`}>
      {component}
    </div>
  );
};

const mapStateToProps = (state, { set, name }) => {
  return {
    isVisible: state.tabs.selection[set] === name,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TabItem);
