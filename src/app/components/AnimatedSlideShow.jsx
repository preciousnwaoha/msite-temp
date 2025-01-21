"use client"

import React, { useState, useEffect } from "react";
import styles from "./AnimatedSlideShow.module.css";

export default function AnimatedSlideShow() {
  const images = [
    "/images/m02.jpg",
    "/images/m03.jpg",
  ]; // Add paths to your images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className={styles.anotherSection}>
      <h1>Melania-Type Hat Meme Generator Coming Soon ;)</h1>

      <div className={styles.anotherSectionImageWrapper}>
        <img
          src={images[currentIndex]}
          alt="Slider"
          key={currentIndex} // Key helps trigger CSS animations
          className={styles.sliderImage}
        />
      </div>
    </div>
  );
}
