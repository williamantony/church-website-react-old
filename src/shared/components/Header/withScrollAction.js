import React, { Component } from "react";
import { connect } from "react-redux";
import { showHeader, hideHeader } from "../../redux/actions";

const withScrollAction = function (Header) {
  class ScrollAction extends Component {
    scroll = {
      direction: null,
      current: null,
    };

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
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
          this.handleScrollChange();
        }
      }

      this.scroll.current = current;
    };

    handleScrollChange = () => {
      const { showHeader, hideHeader } = this.props;

      if (this.scroll.direction === "DOWN") hideHeader();
      else showHeader();
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
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScrollAction);
};

export default withScrollAction;
