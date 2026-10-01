import { useEffect, useState } from "react";
import "./Homepage.css";

import MovieSection from "../shared/MovieSection";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
// import { BarLoader, ScaleLoader } from "react-spinners";

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTv = async () => {
        setLoading(true)
      try{
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      const data = await res.json()
      setMovies(data.results || []);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    }
    fetchTv();
  }, [API_KEY]);

  useEffect(() => {
    const fetchTv = async () => {
      setLoading(true)
      try {
          const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
          const data = await res.json()
          setTvShows(data.results || []);
          setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
   fetchTv();
  }, [API_KEY]);

  useEffect(() => {
    const fetchTv = async () => {
      setLoading (true)
      try {
        const res = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        const data = await res.json()
        setPopularMovies(data.results || []);
        setLoading (false)
      } catch (error) {
        console.log (error)
        setLoading(false)
      }
    }
    fetchTv();
  }, [API_KEY]);
  
  return (
    <>
      <Header />

      <Hero />

      <MovieSection
        title="Top Rated Movies"
        movies={movies}
      />

      <MovieSection
        title="Popular Movies"
        movies={popularMovies}
      />

     {/* {loading? <ScaleLoader size={100} color="red" /> :  */}
     <MovieSection
        title="TV Shows"
        movies={tvShows}
      />
    </>
  );
}

export default Homepage;