import React, { Component } from "react";
import "./Page.css";

class Page extends Component {
  state = {
    isFocused: true,
  }

  render() {
    const isFocused = this.state.isFocused ? "focused" : "unfocused";
    const pageClassName = `Page Page--${ isFocused }`;

    return (
      <div className="wrapper wrapper--outer">
        <div className={ pageClassName }>
          { this.props.children }
          <div className="Page__overlay"></div>
        </div>
      </div>
    );
  }
}

export default Page;
