import css from './BackButton.module.css';

const BackButton = () => {

  return (
    <button type='button' className={css.backButton}>
      Go Back
    </button>
  );
};

export default BackButton;