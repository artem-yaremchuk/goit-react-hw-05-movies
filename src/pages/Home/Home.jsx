import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../components/api/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import Notiflix from "notiflix";
import css from "./Home.module.css";

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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.trendingMovies}>
          <h1 className={css.trendingMoviesTitle}>Trending today</h1>
          <MoviesList movies={trendingMovies} />
        </div>
      )}
    </div>
  );
};

export default Home;
