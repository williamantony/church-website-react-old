import React, { Component } from "react";
import { connect } from "react-redux";
import { showHeader, hideHeader, setHeaderTheme } from "../../redux/actions";

const withScrollAction = function (Header) {
  class ScrollAction extends Component {
    scroll = {
      direction: null,
      current: null,
    };

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
      const last = this.scroll.current;
      const current = window.scrollY;

      if (last !== null) {
        const newDirection = current - last < 0 ? "UP" : "DOWN";

        if (newDirection !== this.scroll.direction) {
          this.scroll.direction = newDirection;

          if (newDirection === "DOWN") {
            this.props.hideHeader();
          } else if (newDirection === "UP") {
            this.props.showHeader();
          }
        }

        const newTheme = current > 100 ? "dark" : null;
        this.props.setHeaderTheme(newTheme);
      }

      this.scroll.current = current;
    };

    render() {
      return <Header {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {};
  };

  const mapDispatchToProps = {
    showHeader,
    hideHeader,
    setHeaderTheme,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScrollAction);
};

export default withScrollAction;
