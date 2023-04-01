import React from "react";
import classNames from "classnames";
import "./Cover.css";

const Cover = function ({ animate = false, children }) {
  const CoverClass = classNames("Cover", {
    "Cover--animate": animate,
  });

  return (
    <div className={CoverClass}>
      <div className="Cover__image Cover__image--staticImage"></div>
      <div className="Cover__image Cover__image--blurredImage"></div>
      <div className="Cover__overlay Cover__overlay--gradient-top-bottom"></div>
      <div className="Cover__overlay Cover__overlay--gradient-diagonal"></div>
      <div className="Cover__overlay"></div>
      <div className="Cover__content">{children}</div>
    </div>
  );
};

export default Cover;
