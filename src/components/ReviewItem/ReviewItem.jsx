import css from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li className={css.reviewItem}>
      <h3 className={css.author}>Author: {author}</h3>
      <p className={css.content}>{content}</p>
    </li>
  );
};

export default ReviewItem;