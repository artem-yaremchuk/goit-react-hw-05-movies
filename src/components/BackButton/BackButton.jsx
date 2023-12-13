import css from './BackButton.module.css';

const BackButton = () => {

  return (
    <button type='button' className={css.button}>
      Go Back
    </button>
  );
};

export default BackButton;