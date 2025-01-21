"use client";

import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const FIRST_IMAGE = {
  imageUrl: "images/m01.jpg",
};
const SECOND_IMAGE = {
  imageUrl: "images/m00.jpg",
};
/* ... */

const ImageSlider = () => {
  return (
    <div style={{ width: "100%", height: "100%", maxWidth: "540px" }}>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
    </div>
  );
};

export default ImageSlider;
