import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';

import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from 'react-router-dom';


const handleDragStart = (e) => e.preventDefault();

function HomeCarousel() {
  const navigate=useNavigate();
    const items = MainCarouselData.map((item) => (
      <img
        className="cursor-pointer z-10"
        src={item.image}
        onClick={()=>navigate(item.path)}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    ));

  return (
      <AliceCarousel 
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
      />
  )
}

export default HomeCarousel
