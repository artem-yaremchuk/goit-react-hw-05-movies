import css from "./MovieCard.module.css";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const MovieCard = ({ movieDetails }) => {
  const releaseDate = movieDetails.release_date;
  const releaseYear = releaseDate.split(" ")[0];

  return (
    <section className={css.movieCard}>
      <div>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
          }
          alt={movieDetails.title}
          className={css.movieCardImg}
        />
      </div>
      <div className={css.movieCardInfo}>
        <h2 className={css.movieCardTitle}>
          {movieDetails.title} ({releaseYear})
        </h2>
        <p className={css.movieCardScore}>
          User Score: {Math.round(movieDetails.popularity)}%
        </p>
        <h3 className={css.movieCardOverview}>Overview</h3>
        <p className={css.movieCardOverviewDesc}>{movieDetails.overview}</p>
        <h3 className={css.movieCardGenres}>Genres</h3>
        <ul className={css.genresList}>
          {movieDetails.genres.map((genre) => (
            <li key={genre.id} className={css.genreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MovieCard;
