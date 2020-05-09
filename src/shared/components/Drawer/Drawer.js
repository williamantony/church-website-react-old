import React from "react";
import { connect } from "react-redux";
import { closeDrawer } from "../../redux/actions";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import DrawerItem from "../DrawerItem/DrawerItem";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import SearchDrawer from "../SearchDrawer/SearchDrawer";
import "./Drawer.css";

const Drawer = function({ isMounted, isOpen, type = "none", closeDrawer }) {
  const classes = {
    open: ` Drawer--${ isOpen ? "open" : "closed" }`,
    type: ` Drawer--${ type }`,
  };

  return (
    <div className={ `Drawer${ classes.open }${ classes.type }` }>
      <div className="Drawer__overlay" onClick={ closeDrawer }></div>
      <div className="Drawer__board">
        {
          isMounted ? (
            <div className="Drawer__holder">
              <DrawerHeader logo="ipa" />
              <DrawerItem name="navigation" component={ <NavigationDrawer /> } />
              <DrawerItem name="search" component={ <SearchDrawer /> } />
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { isOpen, isMounted, type } = state.drawer;
  return {
    isMounted,
    isOpen,
    type,
  };
};

const mapDispatchToProps = {
  closeDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
