import {useState,useEffect} from "react";
import Header from './components/Header';
//import './App.css';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
function App() {
  const [movie,setMovie] = useState([]);
  console.log(typeof movie);
  const [movieRated,setMovieRated] = useState([]);

  useEffect(()=>{
    const fetchMovie = async() =>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        }

      };
      console.log("TMDB API Key:", import.meta.env.VITE_TMDB_API_KEY);
      const url = "https://api.themoviedb.org/3/movie/popular?page=1";
      const url1 = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
      const response = await fetch(url,options);
      const data = await response.json();
      //console.log(data);
      setMovie(data.results);

      const response1 = await fetch(url1,options);
      const data1 = await response1.json();
      //console.log(data);
      setMovieRated(data1.results);
    }
    fetchMovie();
  },[]);
  return (
    <>
     <div className="h-full bg-black text-white min-h-screen pb-10 relative">
      <Header/>
      <Banner/>
      <MovieList title={"Phim Hot" } data={movie}/>
      <MovieList title = {"Phim đề cử "} data={movieRated} />
     </div>
    </>
  )
}

export default App
