import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-3xl font-bold">{title}</h2>
      <Carousel
        responsive={responsive}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customLeftArrow={
          <button className="absolute left-6 p-2 !bg-gray-800 text-white">
            ◀
          </button>
        }
        customRightArrow={
          <button className="absolute right-14 p-2 !bg-gray-800 text-white">
            ▶
          </button>
        }
        ssr={true}
        partialVisible={false}
        className="w-screen space-x-4"
        containerClass="carousel-container"
      >
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group flex-shrink-0"
            >
              <div className="relative group w-[200px] h-[300px] overflow-hidden transform transition-transform duration-300 ease-in-out origin-center group-hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;