import css from "./MoviesList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if(!movies) {
    return;
  }

  return (
      <ul className={css.moviesList}>
        {movies.results.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <MovieListItem movieDetails={movie} />
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default MoviesList;
