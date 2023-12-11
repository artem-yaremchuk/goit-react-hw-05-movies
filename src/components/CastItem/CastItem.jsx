import css from "./CastItem.module.css";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const CastItem = ({ actor }) => {
  return (
    <li className={css.castCard}>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : defaultImg
        }
        alt={actor.name}
        className={css.castCardImg}
      />
      <div className={css.castText}>
        <h2 className={css.castName}>{actor.name}</h2>
        <p className={css.castCharacter}>Character: {actor.character}</p>
      </div>
    </li>
  );
};

export default CastItem;
