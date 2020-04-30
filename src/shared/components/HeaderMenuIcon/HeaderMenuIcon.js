import React, { Component } from "react";
import "./HeaderMenuIcon.css";

class HeaderMenuIcon extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const isOpenedClassName = this.state.isOpen ? " HeaderMenuIcon--open" : "";
    const className = `HeaderMenuIcon${ isOpenedClassName }`;
    return (
      <div className={ className } onClick={ this.handleClick }>
        <div className="HeaderMenuIcon__holder">
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
          <div className="HeaderMenuIcon__line"></div>
        </div>
      </div>
    );
  }
}

export default HeaderMenuIcon;
