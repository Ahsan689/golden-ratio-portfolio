// components/Carousel.js

import { useState, useEffect } from 'react';

// const images = [
//   '/DISPLAY_PICTURES/001.jpg',
//   '/DISPLAY_PICTURES/002.jpg',
//   '/DISPLAY_PICTURES/003.jpg'
// ];

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={"carousel"}>
    <div className={"slides"}
    >
      {images.map((image, index) => (
        <div className={`slide ${index === currentIndex ? "active" : 'not-show'}`} key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
    {/* <div className={"indicators"}>
      {images.map((_, index) => (
        <span key={index} className={`indicator ${index === currentIndex ? "active" : ''}`}
        onClick={()=> handleIndicatorClick(index)}>

        </span>
      ))}
    </div> */}
    <button className={`button prev`} onClick={handlePrevClick}>‹</button>
      <button className={`button next`} onClick={handleNextClick}>›</button>
  </div>
  );
};

export default Carousel;
