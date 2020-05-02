import React, { Component } from "react";
import { connect } from "react-redux";
import { showNavigation } from "../../redux/actions";
import "./HeaderMenuIcon.css";

class HeaderMenuIcon extends Component {
  state = {
    isOpen: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen !== state.isOpen) {
      return {
        isOpen: props.isOpen,
      };
    }
    return null;
  }

  render() {
    const isOpenedClassName = this.state.isOpen ? " HeaderMenuIcon--open" : "";
    const className = `HeaderMenuIcon${ isOpenedClassName }`;

    return (
      <div className={ className } onClick={ this.props.showNavigation }>
        <div className="HeaderMenuIcon__holder">
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.theme.isNavigationVisible,
  };
};

const mapDispatchToProps = {
  showNavigation,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenuIcon);
