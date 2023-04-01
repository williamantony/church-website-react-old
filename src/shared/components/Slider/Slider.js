import React, { useState } from "react";
import SliderControls from "../SliderControls/SliderControls";
import "./Slider.css";

const Slider = function (props) {
  const [index, setIndex] = useState(0);
  const [count] = useState(3);

  const goto = (nextIndex) => {
    setIndex(nextIndex);
  };

  const gotoPrevSlide = () => {
    const prevIndex = index === 0 ? 0 : index - 1;
    goto(prevIndex);
  };

  const gotoNextSlide = () => {
    const nextIndex = index === count - 1 ? count - 1 : index + 1;
    goto(nextIndex);
  };

  const style = {
    marginLeft: `-${index * 100}%`,
  };

  return (
    <div className="Slider">
      <div className="Slider__content" style={style}>
        {React.Children.map(props.children, (child) => {
          const childProps = {};
          return React.cloneElement(child, childProps);
        })}
      </div>
      <SliderControls onPrev={gotoPrevSlide} onNext={gotoNextSlide} />
    </div>
  );
};

export default Slider;
