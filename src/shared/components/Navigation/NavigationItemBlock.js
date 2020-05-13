import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItemBlock = function ({ menu, onToggleCollapse }) {
  return (
    <div className="NavigationItemBlock">
      {menu.link ? (
        <NavLink to={menu.link} className="NavigationItemBlock__text">
          {menu.text}
        </NavLink>
      ) : (
        <div className="NavigationItemBlock__text">{menu.text}</div>
      )}

      {menu.children ? (
        <div
          className="NavigationItemBlock__icon NavigationItemBlock__icon--expand"
          onClick={onToggleCollapse}
        >
          <div className="NavigationItemBlock__icon__img"></div>
        </div>
      ) : null}
    </div>
  );
};

export default NavigationItemBlock;
