import React, { Component } from "react";
import { connect } from "react-redux";
import { setPageName, closeDrawer } from "../../redux/actions";
import Drawer from "../Drawer/Drawer";
import "./Page.css";

class Page extends Component {
  constructor(props) {
    super(props);
    props.setPageName(props.name);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { name, isActive, isScrollable } = this.props;

    if (isScrollable) document.body.classList.remove("no-scroll");
    else document.body.classList.add("no-scroll");

    const classes = {
      name: ` Page--${name}`,
      active: ` Page--${isActive ? "active" : "inactive"}`,
    };

    return (
      <div className="wrapper wrapper--outer">
        <div className={`Page${classes.name}${classes.active}`}>
          <Drawer />
          <div className="Page__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isActive, isScrollable } = state.page;
  return {
    isActive,
    isScrollable,
  };
};

const mapDispatchToProps = {
  setPageName,
  closeDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
