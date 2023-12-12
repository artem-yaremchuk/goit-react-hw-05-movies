import { useEffect, useState } from "react";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { getReviews } from "../../components/api/api";
import Notiflix from "notiflix";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movieId) {
      const handleData = async () => {
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
    }
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={css.reviews}>
          {reviews.results.length > 0 ? (
            <ul className={css.reviewsList}>
              {reviews.results.map((review) => (
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
