import React from "react";
import { connect } from "react-redux";

const DrawerItem = function({ name = "", component, type }) {
  if (type !== name)
    return null;

  const classes = {
    name: ` DrawerItem--${ name }`,
  };

  return (
    <div className={ `DrawerItem${ classes.name }` }>
      { component }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    type: state.drawer.type,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerItem);
