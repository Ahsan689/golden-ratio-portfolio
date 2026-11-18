// components/Carousel.js

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

  // Keyboard navigation, scoped to the carousel the pointer is over, so that
  // multiple carousels inside one modal don't all move on an arrow press.
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (!isHovered) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevClick();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextClick();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  // --- Tap/click-to-fullscreen viewer (lightbox) ---
  const [fsOpen, setFsOpen] = useState(false);
  const [fsIndex, setFsIndex] = useState(0);
  const fsTouchStartX = useRef(0);

  const openFullscreen = (index) => {
    setFsIndex(index);
    setFsOpen(true);
  };
  const closeFullscreen = () => setFsOpen(false);
  const fsPrev = () => setFsIndex((i) => (i - 1 + images.length) % images.length);
  const fsNext = () => setFsIndex((i) => (i + 1) % images.length);

  // Tap a slide: the active (center) one opens fullscreen; a side one centers.
  const handleSlideClick = (index) => {
    if (index === currentIndex) openFullscreen(index);
    else setCurrentIndex(index);
  };

  // Fullscreen keyboard, captured so Esc/arrows don't also hit the modal's Esc
  // handler or move the background carousel.
  useEffect(() => {
    if (!fsOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        e.stopImmediatePropagation();
        closeFullscreen();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopImmediatePropagation();
        fsPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopImmediatePropagation();
        fsNext();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsOpen, images.length]);

  const handleFsTouchStart = (e) => {
    fsTouchStartX.current = e.changedTouches[0].clientX;
  };
  const handleFsTouchEnd = (e) => {
    const diff = fsTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? fsNext : fsPrev)();
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
    <div
      className={styles['carousel-container']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles['carousel-wrapper']}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.counter} aria-hidden="true">
          {currentIndex + 1} / {images.length}
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles['carousel-slide']} ${getSlideClass(index)}`}
            onClick={() => handleSlideClick(index)}
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
            {index === currentIndex && (
              <span className={styles.expandHint} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8.5" x2="11" y2="13.5" />
                  <line x1="8.5" y1="11" x2="13.5" y2="11" />
                </svg>
              </span>
            )}
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

      {/* Rendered through a portal to <body> so it escapes the modal's CSS
          transform — otherwise position:fixed would anchor to the modal box,
          not the viewport, and it wouldn't be truly fullscreen. */}
      {fsOpen && typeof document !== "undefined" && createPortal(
        <div
          className={styles.fullscreen}
          onClick={closeFullscreen}
          onTouchStart={handleFsTouchStart}
          onTouchEnd={handleFsTouchEnd}
        >
          <button
            className={styles.fsClose}
            onClick={(e) => { e.stopPropagation(); closeFullscreen(); }}
            aria-label="Close"
          >
            ×
          </button>
          {images.length > 1 && (
            <button
              className={`${styles.fsNav} ${styles.fsPrev}`}
              onClick={(e) => { e.stopPropagation(); fsPrev(); }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <img
            className={styles.fsImage}
            src={images[fsIndex]}
            alt={`Image ${fsIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <button
              className={`${styles.fsNav} ${styles.fsNext}`}
              onClick={(e) => { e.stopPropagation(); fsNext(); }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
          <div className={styles.fsCounter}>
            {fsIndex + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Carousel;
