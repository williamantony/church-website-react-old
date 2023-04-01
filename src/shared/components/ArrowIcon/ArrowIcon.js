import React from "react";
import classNames from "classnames";
import "./ArrowIcon.css";

const ArrowIcon = function ({ direction = "right", scale = "1", onClick }) {
  let rotation = 0;

  switch (direction.toLowerCase()) {
    case "right":
      rotation = 0;
      break;

    case "left":
      rotation = -180;
      break;

    case "up":
      rotation = -90;
      break;

    case "down":
      rotation = 90;
      break;

    default:
      break;
  }

  const ArrowIconClass = classNames("ArrowIcon", `ArrowIcon--${direction}`);

  const style = {
    transform: `rotate(${rotation}deg) scale(${scale})`,
  };

  return (
    <div className={ArrowIconClass} style={style} onClick={onClick}>
      <div className="ArrowIcon__holder">
        <div className="ArrowIcon__line"></div>
        <div className="ArrowIcon__line"></div>
      </div>
    </div>
  );
};

export default ArrowIcon;
