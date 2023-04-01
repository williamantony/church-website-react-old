import React from "react";
import "./SliderItem.css";

const SliderItem = function ({ children }) {
  return (
    <div className="SliderItem">
      <div className="SliderItem__content">{children}</div>
    </div>
  );
};

export default SliderItem;
