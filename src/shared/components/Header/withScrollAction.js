import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showHeader, hideHeader, setHeaderTheme } from "../../redux/actions";

const withScrollAction = function (Header) {
  const ScrollAction = function (props) {
    const scroll = {
      direction: null,
      current: null,
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScroll = () => {
      const last = scroll.current;
      const current = window.scrollY;

      if (last !== null) {
        const newDirection = current - last < 0 ? "UP" : "DOWN";

        if (newDirection !== scroll.direction) {
          scroll.direction = newDirection;

          if (newDirection === "DOWN") {
            props.hideHeader();
          } else if (newDirection === "UP") {
            props.showHeader();
          }
        }

        const newTheme = current > 100 ? "dark" : null;
        props.setHeaderTheme(newTheme);
      }

      scroll.current = current;
    };

    return <Header {...props} />;
  };

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
