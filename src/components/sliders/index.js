import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import { sliders } from "../../content_option";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

export default function Sliders() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {sliders.map((data, i) => {
        return (
          <Carousel.Item className="home-slider-item">
            <img className="d-block w-100" src={data.img} alt="slider image" />
            <Carousel.Caption className="slider-item-content">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div className="slider-button">
                <button></button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      {/* // <Carousel
    //   transitionTime={310}
    //   animationHandler={rotateAnimationHandler}
    //   showArrows={true}
    //   swipeable={true}
    //   autoPlay={true}
    //   showThumbs={false}
    // > */}
      {/* //   {sliders.map((data, i) => {
    //     return (
    //       <div>
    //         <img alt="" src={data.img} />
    //         <p className="legend">{data.title}</p>
    //       </div>
    //     );
    //   })} */}
    </Carousel>
  );
}

const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
    transform: `rotate(0)`,
    position:
      state.previousItem === state.selectedItem ? "relative" : "absolute",
    inset: "0 0 0 0",
    zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
    opacity: state.previousItem === state.selectedItem ? "1" : "0",
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: "relative",
      zIndex: 2,
      filter: `blur(0)`,
    },
    prevStyle: {
      ...slideStyle,
      transformOrigin: " 0 100%",
      transform: `rotate(${
        state.previousItem > state.selectedItem ? "-45deg" : "45deg"
      })`,
      opacity: "0",
      filter: `blur( ${
        state.previousItem === state.selectedItem ? "0px" : "5px"
      })`,
    },
  };
};
