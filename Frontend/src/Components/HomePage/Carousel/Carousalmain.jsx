import carouselimage from '../../../StaticData/Home/carousel.json';
import React from 'react';
import  styles  from "./Carousal.module.css";

const delay = 2500;

function CarouselMain() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carouselimage.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {carouselimage.map((item, index) => (
          <img
            className={styles.slide}
            key={index}
            src={item.src}
          />
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {carouselimage.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot}${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export {CarouselMain}