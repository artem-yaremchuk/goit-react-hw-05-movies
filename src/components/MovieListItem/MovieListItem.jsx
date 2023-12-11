import css from "./MovieListItem.module.css";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const MovieListItem = ({ movieDetails }) => {

  return (
    <div className={css.movieListItem}>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        alt={movieDetails.title}
        className={css.movieListItemImg}
      />
      <h2 className={css.movieListItemTitle}>
        {movieDetails.title}
      </h2>
    </div>
  );
};

export default MovieListItem;
