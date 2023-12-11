import css from "./SearchMoviesList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieListItem from "components/MovieListItem/MovieListItem";

const SearchMoviesList = ({ searchResults }) => {
  const location = useLocation();

  return (
    <section className={css.searchedMovies}>
      {searchResults.length > 0 ? (
        <ul className={css.moviesList}>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.movieLink}
              >
                <MovieListItem movieDetails={movie} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.info}>Let's try to find some movies.</p>
      )}
    </section>
  );
};

export default SearchMoviesList;
