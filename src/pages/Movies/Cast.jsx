import { useEffect, useState } from "react";
import CastItem from "components/CastItem/CastItem";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css";
import { getCredits } from "../../components/api/api";
import Notiflix from "notiflix";
import Loader from "../../components/Loader/Loader";

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      if (!movieId) return;

      try {
        setIsLoading(true);
        const data = await getCredits(movieId);
        setCredits(data);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleData();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={css.cast}>
          <ul className={css.castList}>
            {credits.cast.map((actor) => (
              <CastItem key={actor.id} actor={actor} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Cast;
