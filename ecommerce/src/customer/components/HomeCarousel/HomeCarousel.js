import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';

import "react-alice-carousel/lib/alice-carousel.css";
function HomeCarousel() {
    const items = MainCarouselData.map((item) => (
      <img
        className="cursor-pointer z-10"
        src={item.image}
        alt=""
        role="presentation"
      />
    ));

  return (
      <AliceCarousel 
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      />
  )
}

export default HomeCarousel
