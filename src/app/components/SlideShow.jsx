"use client";

import React, { useState, useEffect } from "react";
import styles from "./SlideShow.module.css";

export default function SlideShow() {
  const images = [
    "/images/m1.jpg",
    "/images/m2.jpg",
    "/images/m3.jpg",
    "/images/m4.jpg",
  ]; // Add the paths to your images here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change image every 500ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className={styles.showcaseSection}>

      <div className={styles.slideShow}>
        {/*  */}
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className={styles.slideShowImage}
        />
      </div>
    </div>
  );
}
