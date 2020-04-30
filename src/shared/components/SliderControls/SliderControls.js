import React from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import "./SliderControls.css";

const SliderControls = function({ onPrev, onNext }) {
  return (
    <div className="SliderControls">
      <div className="wrapper wrapper--inner">
        <div className="SliderControls__arrows">
          <div className="SliderControls__button" onClick={ onPrev }>
            <ArrowIcon direction="left" scale="0.5" />
          </div>
          <div className="SliderControls__button" onClick={ onNext }>
            <ArrowIcon direction="right" scale="0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderControls;
