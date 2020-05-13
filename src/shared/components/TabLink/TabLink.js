import React from "react";
import { connect } from "react-redux";
import { selectTab } from "../../redux/actions";
import "./TabLink.css";

const TabLink = function ({ set, name, text, isSelected, selectTab }) {
  const classes = {
    name: ` TabLink--${name}`,
    selected: isSelected ? " TabLink--selected" : "",
  };

  const handleClick = () => {
    selectTab(set, name);
  };

  return (
    <div
      className={`TabLink${classes.name}${classes.selected}`}
      onClick={handleClick}
    >
      <div className="TabLink__holder">
        <div className="TabLink__text">{text}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { set, name }) => {
  return {
    isSelected: state.tabs.selection[set] === name,
  };
};

const mapDispatchToProps = {
  selectTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabLink);
