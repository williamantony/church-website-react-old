import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { closeDrawer } from "../../redux/actions";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import DrawerItem from "../DrawerItem/DrawerItem";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import SearchDrawer from "../SearchDrawer/SearchDrawer";
import LocationMapDrawer from "../LocationMapDrawer/LocationMapDrawer";
import "./Drawer.css";

const Drawer = function ({ isMounted, isOpen, type = "none", closeDrawer }) {
  const DrawerClass = classNames(
    "Drawer",
    `Drawer--${isOpen ? "open" : "closed"}`,
    `Drawer--${type}`
  );

  return (
    <div className={DrawerClass}>
      <div className="Drawer__overlay" onClick={closeDrawer}></div>
      <div className="Drawer__board">
        {isMounted ? (
          <div className="Drawer__holder">
            <DrawerHeader logo="ipa" />
            <DrawerItem name="navigation" component={<NavigationDrawer />} />
            <DrawerItem name="search" component={<SearchDrawer />} />
            <DrawerItem name="location-map" component={<LocationMapDrawer />} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
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
