import React from "react";
import classNames from "classnames";
import { luminosity } from "../../utils/color";
import "./Button.css";

const Button = function ({
  type = "solid",
  hoverType = "solid",
  size = "medium",
  bgColor = "#FFFFFF",
  colorType,
  text,
  props = {},
}) {
  const darkness = luminosity(bgColor).value < 0.6 ? "dark" : "light";
  colorType = colorType ? colorType : darkness;

  const ButtonClass = classNames(
    `Button`,
    `Button--${type}`,
    `Button--hover-${hoverType}`,
    `Button--size-${size}`,
    `Button--color-${colorType}`
  );

  const style = {
    color: bgColor,
  };

  return (
    <button className={ButtonClass} style={style} {...props}>
      <div className="Button__bg"></div>
      <div className="Button__text">{text}</div>
    </button>
  );
};

export default Button;
