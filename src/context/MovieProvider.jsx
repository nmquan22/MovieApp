import { createContext, useState } from "react";
import PropTypes from "prop-types";
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
const MovieContext = createContext();

const MovieProvider = ({children})=>{
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
    return(
        <MovieContext.Provider value = {{ handleTrailer }}>
            {children}
            <Modal
        isOpen={modalIsOpen}    
        onRequestClose={()=>setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <YouTube videoId={trailerKey} opts={opts} onReady={onPlayerReady} />
        </Modal>
        </MovieContext.Provider>
    )
}
MovieProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export {MovieProvider,MovieContext}