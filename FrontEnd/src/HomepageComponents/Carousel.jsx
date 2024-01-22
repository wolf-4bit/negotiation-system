// Carousel.js
import React, { useState, useRef, useEffect } from "react";
import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import model3 from "../assets/model3.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Carousel.css";

const Carousel = () => {
  const slides = [{ model: model1 }, { model: model2 }, { model: model3 }];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div className="carousel-container">
      <div className="slider-container">
        <img
          ref={imageRef}
          src={slides[currentSlide].model}
          alt={slides[currentSlide].title}
          className="slider-image"
        />
        <h2>{slides[currentSlide].title}</h2>
        <button
          className="arrow-button"
          id="arrow-button-left"
          style={{ left: `calc(50% - ${imageWidth / 2 + 10}px)` }}
          onClick={prevSlide}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          className="arrow-button"
          id="arrow-button-right"
          style={{ right: `calc(50% - ${imageWidth / 2 + 10}px)` }}
          onClick={nextSlide}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
