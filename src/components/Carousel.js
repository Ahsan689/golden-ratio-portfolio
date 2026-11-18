// components/Carousel.js

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/carousel.module.css';

// How many slides on EACH side of the active one get their src set.
// 1 = active + the two visible previews; we use 2 so the next slide in either
// direction is already downloaded before it animates into view.
const PRELOAD_RADIUS = 2;

// Set of indexes within PRELOAD_RADIUS of `center` (wrapping around the ends).
const nearIndexes = (center, length) => {
  const set = new Set();
  if (length > 0) {
    for (let d = -PRELOAD_RADIUS; d <= PRELOAD_RADIUS; d++) {
      set.add(((center + d) % length + length) % length);
    }
  }
  return set;
};

const Carousel = ({images, autoPlayInterval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState({}); // tracks which image indexes have finished loading
  // Indexes whose <img> should actually have a src. Accumulates as you navigate
  // so a slide, once loaded, is never unloaded/re-fetched when you scroll back.
  const [toLoad, setToLoad] = useState(() => nearIndexes(0, images.length));
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // As the active slide changes, add its neighborhood to the load set.
  useEffect(() => {
    setToLoad((prev) => {
      const next = new Set(prev);
      nearIndexes(currentIndex, images.length).forEach((i) => next.add(i));
      // Avoid a state update if nothing new was added.
      return next.size === prev.size ? prev : next;
    });
  }, [currentIndex, images.length]);

  const handleImageLoad = (index) => {
    setLoaded((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
  };

  // --- AUTO-RUN LOGIC START ---
  useEffect(() => {
    // Create the interval
    // const timer = setInterval(() => {
    //   handleNextClick();
    // }, autoPlayInterval);

    // Clean up the interval when the component unmounts 
    // or before the effect runs again due to currentIndex changing
    // return () => clearInterval(timer);
  }, [currentIndex]); // Re-setting on index change ensures the full delay after a manual click
  // --- AUTO-RUN LOGIC END ---

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
            {index === currentIndex && !loaded[index] && (
              <div className={styles.skeleton} aria-hidden="true" />
            )}
            <img
              // Lazy load: only slides near the active one get a real src.
              // Far-off slides stay empty until you navigate toward them.
              src={toLoad.has(index) ? image : undefined}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(index)}
              // Fade in only applies to the active (center) slide; side/preview
              // slides render normally and are left untouched.
              style={{
                opacity: index === currentIndex && !loaded[index] ? 0 : 1,
              }}
            />
            {/* <div className={styles['slide-overlay']}>
              <button className={styles['slide-button']}>DISCOVER</button>
            </div> */}
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
