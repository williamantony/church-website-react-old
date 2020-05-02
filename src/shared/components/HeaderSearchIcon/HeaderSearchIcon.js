import React from "react";
import { connect } from "react-redux";
import { showSearchBar } from "../../redux/actions";
import "./HeaderSearchIcon.css";

const HeaderSearchIcon = function({ showSearchBar }) {
  return (
    <div className="HeaderSearchIcon" onClick={ showSearchBar }>
      <div className="HeaderSearchIcon__icon"></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  showSearchBar
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchIcon);

