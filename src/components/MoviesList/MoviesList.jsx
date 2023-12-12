import css from "./MoviesList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <section className={css.trendingMovies}>
      <h1 className={css.trendingMoviesTitle}>Trending today</h1>
      <ul className={css.trendingMoviesList}>
        {movies.results.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.trendingMoviesLink}
              state={{ from: location }}
            >
              <MovieListItem movieDetails={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
