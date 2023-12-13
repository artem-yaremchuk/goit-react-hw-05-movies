import css from "./SearchMoviesList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "../MovieListItem/MovieListItem";

const SearchMoviesList = ({ searchResults }) => {
  const location = useLocation();

  if(!searchResults) {
    return;
  }

  return (
    <section className={css.searchedMovies}>
        <ul className={css.moviesList}>
          {searchResults.map((movie) => (
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
    </section>
  );
};

export default SearchMoviesList;
