import React from "react";
import { connect } from "react-redux";
import "./Header.css";

const Header = function({ theme = "transparent", logo = "ipa", component }) {
  const classes = {
    theme: ` Header--theme-${ theme }`,
    logo: ` Header--logo-${ logo }`,
  };

  return (
    <header className={ `Header${ classes.theme }${ classes.logo }` }>
      { component }
    </header>
  );
};

const mapStateToProps = (state, props) => {
  return {
    theme: state.drawer.isOpen ? "light" : props.theme,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
