import React, { Component } from "react";
import SliderControls from "../SliderControls/SliderControls";
import "./Slider.css";

class Slider extends Component {
  state = {
    index: 0,
    count: 3,
  }

  goto = index => {
    this.setState({ index });
  }

  prevSlide = () => {
    const { index } = this.state;
    const prevIndex = index === 0 ? 0 : index - 1;

    this.goto(prevIndex);
  }

  nextSlide = () => {
    const { index, count } = this.state;
    const nextIndex = index === (count - 1) ? count - 1 : index + 1;

    this.goto(nextIndex);
  }

  render() {
    const style = {
      marginLeft: `-${ this.state.index * 100 }%`,
    };

    return (
      <div className="Slider">
        <div className="Slider__content" style={ style }>
          {
            React.Children.map(this.props.children, (child) => {
              const childProps = { };
              return React.cloneElement(child, childProps);
            })
          }
        </div>
        <SliderControls onPrev={ this.prevSlide } onNext={ this.nextSlide } />
      </div>
    );
  }
}

export default Slider;
