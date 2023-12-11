import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../components/api/api";
import MovieList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import Notiflix from "notiflix";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleTrendingMovies();
  }, []);

  return (
    <div>{isLoading ? <Loader /> : <MovieList movies={trendingMovies} />}</div>
  );
};

export default Home;
