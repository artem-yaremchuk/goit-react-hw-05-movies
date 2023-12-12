import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "components/Loader/Loader";
import BackButton from "components/BackButton/BackButton";
import css from "./MovieDetails.module.css";
import { getMovieDetails } from "../../components/api/api";
import Notiflix from "notiflix";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    if (movieId) {
      const handleData = async () => {
        try {
          setIsLoading(true);
          const details = await getMovieDetails(movieId);
          setMovieDetails(details);
        } catch (error) {
          Notiflix.Notify.failure("There is no detailed info about this movie");
        } finally {
          setIsLoading(false);
        }
      };

      handleData();
    }
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Link to={backLinkHref}>
            <BackButton />
          </Link>
          <div>
            <MovieCard movieDetails={movieDetails} />
            <div className={css.addInfo}>
              <h4 className={css.addInfoTitle}>Additional information</h4>
              <ul className={css.addInfoLinks}>
                <li>
                  <Link
                    to={`/movies/${movieDetails.id}/cast`}
                    className={css.movieLink}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/movies/${movieDetails.id}/reviews`}
                    className={css.movieLink}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
