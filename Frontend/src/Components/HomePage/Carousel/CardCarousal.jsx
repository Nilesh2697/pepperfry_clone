import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import RecipeReviewCard from "./RecipeReviewCard";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    "src" : "https://ii2.pepperfry.com/media/wysiwyg/banners/promo_3621_2x_new1.jpg",
    "icons":"https://snipstock.com/assets/cdn/png/b277fac3cdf935239ec61f4af260a43c.png"
  },
  {
      "src": "https://ii2.pepperfry.com/media/wysiwyg/banners/01_hero_2x_20621.jpg",
      "icons":"https://snipstock.com/assets/cdn/png/b277fac3cdf935239ec61f4af260a43c.png"
  },
  {
      "src": "https://ii2.pepperfry.com/media/wysiwyg/banners/02_hero_2x_20621.jpg",
      "icons":"https://snipstock.com/assets/cdn/png/b277fac3cdf935239ec61f4af260a43c.png"
  },
  {
      "src": "https://ii2.pepperfry.com/media/wysiwyg/banners/03_hero_2x_20621.jpg",
      "icons":"https://snipstock.com/assets/cdn/png/b277fac3cdf935239ec61f4af260a43c.png"
  },
  {
      "src": "https://ii2.pepperfry.com/media/wysiwyg/banners/04_hero_2x_20621.jpg",
      "icons":"https://snipstock.com/assets/cdn/png/b277fac3cdf935239ec61f4af260a43c.png"
  }
]

const CardCarousel = React.memo(props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => onExiting()}
        onExited={() => onExited()}
        key={item.src}
      >
        <RecipeReviewCard src={item.src}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={() => next()}
      previous={() => previous()}
      style={{border:'1px solid black'}}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={newIndex => goToIndex(newIndex)}
      />
      {slides}
      <CarouselControl
        direction="prev"
       
        onClickHandler={() => previous()}
      />
      <CarouselControl
        direction="next"
        onClickHandler={() => next()}
      />
    </Carousel>
  );
}, []);

export default CardCarousel;
