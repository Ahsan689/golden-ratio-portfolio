// components/Carousel.js

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/carousel.module.css';

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // minimum distance to trigger swipe
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // swiped left, go to next slide
        handleNextClick();
      } else {
        // swiped right, go to previous slide
        handlePrevClick();
      }
    }
  };

  const getSlideClass = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;
    if (diff === 0) return styles.slideActive;
    // diff === 1 is the next slide (right), diff === images.length -1 is the previous (left)
    if (diff === 1) return `${styles.side} ${styles['side-right']}`;
    if (diff === images.length - 1) return `${styles.side} ${styles['side-left']}`;
    return styles.hidden;
  };

  return (
    <div className={styles['carousel-container']}>
      <div 
        className={styles['carousel-wrapper']}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${styles['carousel-slide']} ${getSlideClass(index)}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className={styles['slide-overlay']}>
              <button className={styles['slide-button']}>DISCOVER</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['carousel-controls']}>
        <button className={`${styles['carousel-nav']} ${styles['prev-btn']}`} onClick={handlePrevClick}>‹</button>
        
        <div className={styles['carousel-indicators']}>
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>

        <button className={`${styles['carousel-nav']} ${styles['next-btn']}`} onClick={handleNextClick}>›</button>
      </div>

      <div className={styles['carousel-footer']}>
        <p>VIEW ALL DESTINATIONS</p>
      </div>
    </div>
  );
};

export default Carousel;
