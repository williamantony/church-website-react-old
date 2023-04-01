import React, { useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import NavigationSet from "./NavigationSet";
import NavigationItemBlock from "./NavigationItemBlock";

const NavigationItem = function ({ menu, level, pageName }) {
  const [isCollapsed, setCollapseStatus] = useState(true);

  const handleToggleCollapse = () => {
    setCollapseStatus(!isCollapsed);
  };

  const NavItemClass = classNames("NavigationItem", {
    "NavigationItem--collapsed": isCollapsed,
    "NavigationItem--selected": pageName === menu.id,
  });

  return (
    <li className={NavItemClass}>
      <NavigationItemBlock
        menu={menu}
        level={level}
        onToggleCollapse={handleToggleCollapse}
      />
      <NavigationSet
        set={menu.children}
        level={level + 1}
        isCollapsed={isCollapsed}
      />
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    pageName: state.page.name,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
