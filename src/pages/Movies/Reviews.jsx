import { useEffect, useState } from "react";
import ReviewItem from "components/ReviewItem/ReviewItem";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { getReviews } from "../../components/api/api";
import Notiflix from "notiflix";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      if (!movieId) return;

      try {
        setIsLoading(true);
        const data = await getReviews(movieId);
        setReviews(data);
        setIsLoading(false);
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
        <section className={css.reviews}>
          {reviews.length > 0 ? (
            <ul className={css.reviewsList}>
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </ul>
          ) : (
            <p className={css.info}>No reviews yet for this movie.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default Reviews;
