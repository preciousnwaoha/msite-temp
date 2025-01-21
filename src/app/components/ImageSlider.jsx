"use client";

import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const FIRST_IMAGE = {
  imageUrl: "images/m5.jpg",
};
const SECOND_IMAGE = {
  imageUrl: "images/m9.jpg",
};
/* ... */

const ImageSlider = () => {
  return (
    <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  );
};


export default ImageSlider;