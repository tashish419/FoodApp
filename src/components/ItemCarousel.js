import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMG_URL } from "../utils/constants";

const ItemCarousel = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Hey, what's on your mind?</h2>
      <Carousel responsive={responsive}>
        {data.info.map((cardData) => (
          <div key={cardData.id} className="pr-6 block cursor-pointer">
            <img
              src={IMG_URL + cardData.imageId}
              className="object-cover border-none"
              alt={`Image ${cardData.id}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ItemCarousel;
