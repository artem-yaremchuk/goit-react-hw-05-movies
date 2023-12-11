import { useState } from "react";
import css from "./SearchBar.module.css";
import Notiflix from "notiflix";

const Searchbar = ({ submit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === "") {
      Notiflix.Notify.warning("Please, fill in the field!");
      return;
    }
    submit(query);
  };

  return (
    <div className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchBtn}>
          <span className={css.searchBtnLabel}>Search</span>
        </button>

        <input
          className={css.searchInput}
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    </div>
  );
};

export default Searchbar;
