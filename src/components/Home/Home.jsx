import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";

const sliderContent = [
  {
    image: slide1,
    title: "Discover Excellence in Every Step",
    description:
      "Unleash your potential with our premium services tailored to elevate your experience. We turn your dreams into reality, one step at a time.",
    buttonText: "Explore Now",
    redirectTo: "/services",
  },
  {
    image: slide2,
    title: "Your Vision, Our Mission",
    description:
      "Dedicated to bringing your ideas to life with innovation, creativity, and unmatched expertise. Let’s create something extraordinary together.",
    buttonText: "Get Started",
    redirectTo: "/contact",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderContent.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <div className="slider" {...handlers}>
        <div
          className="slider-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sliderContent.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button onClick={() => handleButtonClick(slide.redirectTo)}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Home;
