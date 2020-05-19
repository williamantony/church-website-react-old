import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initHeader, showHeader, hideHeader } from "../../redux/actions";
import withScrollAction from "./withScrollAction";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: props.defaultTheme,
      isVisible: props.isVisible,
    };

    props.initHeader(props.defaultTheme);
  }

  static getDerivedStateFromProps(props, state) {
    const newState = {};

    if (state.theme !== props.currentTheme) {
      newState.theme = props.currentTheme;
    }

    if (state.isVisible !== props.isVisible) {
      newState.isVisible = props.isVisible;
    }

    if (Object.keys(newState).length !== 0) {
      return newState;
    }

    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.scrollY < 100) {
        this.props.showHeader();
      }
    }, 0);
  }

  componentWillUnmount() {
    this.props.hideHeader();
  }

  render() {
    const { theme, isVisible } = this.state;
    const { logo = "ipa", component } = this.props;

    let headerClassName = "Header";
    headerClassName += ` Header--theme-${theme}`;
    headerClassName += ` Header--logo-${logo}`;
    headerClassName += isVisible ? " Header--isVisible" : "";

    return <header className={headerClassName}>{component}</header>;
  }
}

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
