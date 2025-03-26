import React, { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const onPlayerReady = (event) => {
  event.target.playVideo();
};
Modal.setAppElement("#root"); 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey,setTrailerKey] = useState("");
  const handleTrailer = async(id)=>{
    setTrailerKey('')
    try{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const response = await fetch(url, options); 
      const data = await response.json(); 
      console.log(data);

      if (data.results && data.results.length > 0) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      } else {
        console.log("No trailer found.");
        setModalIsOpen(false);
      }
    } catch(error){
      setModalIsOpen(false);
      console.log(error);
    }
  }
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
              onClick={()=>handleTrailer(item.id)}
            >
              <div className="relative group w-[200px] h-[300px] overflow-hidden transform transition-transform duration-300 ease-in-out origin-center group-hover:scale-105 cursor-pointer">
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

      <Modal
        isOpen={modalIsOpen}    
        onRequestClose={()=>setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} onReady={onPlayerReady} />
      </Modal>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;