import React, { Component } from "react";
import { connect } from "react-redux";
import { setPageName, closeDrawer } from "../../redux/actions";
import Drawer from "../Drawer/Drawer";
import "./Page.css";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    props.setPageName(props.name);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.props.closeDrawer();

      this.setState({
        isLoaded: true,
      });
    }, 250);
  }

  render() {
    const { name, isActive, isScrollable } = this.props;

    if (isScrollable) document.body.classList.remove("no-scroll");
    else document.body.classList.add("no-scroll");

    let pageClassName = "Page";
    pageClassName += ` Page--${name}`;
    pageClassName += ` Page--${isActive ? "active" : "inactive"}`;
    pageClassName += this.state.isLoaded ? " Page--loaded" : "";

    return (
      <div className="wrapper wrapper--outer">
        <div className={pageClassName}>
          <Drawer />
          <div className="Page__content">{this.props.children}</div>
          <div className="Page__overlay"></div>
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
