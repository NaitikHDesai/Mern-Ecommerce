import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button, Link, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel({data,sectionName}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.4 },
  };

  const sectionLinks = {
    "Men's Kurta": "/men/clothing/mens_kurta",
    "Men's Shirts": "/men/clothing/mens_shirts",
    'Gouns': "/women/clothing/gouns",
    "Dress": "/women/clothing/women_dress",
    "Men's Jeans": "/men/clothing/mens_jeans",
    // Add more sections as needed
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard key={item.id} product={item} link={sectionLinks[sectionName]} />
  ));
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
       <Typography variant="h5" component="h2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,cursor:"pointer" }}>
        {sectionName}
        <Link href={sectionLinks[sectionName]}>
          <Typography variant="body1" component="span">
            See More
          </Typography>
        </Link>
      </Typography>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          ref={carouselRef}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-[]"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",

              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 "
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translatex(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
