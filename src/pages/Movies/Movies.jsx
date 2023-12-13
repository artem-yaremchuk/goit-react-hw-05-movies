import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import { searchMovies } from "../../components/api/api";
import { Outlet, useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";
import Loader from "../../components/Loader/Loader";
import css from "./Movies.module.css";

const Movies = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchItem) => {
    try {
      setIsLoading(true);
      const data = await searchMovies(searchItem);
      setSearchResults(data);
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <SearchBar submit={handleSubmit} />
          {searchResults && (
            <div className={css.searchedMovies}>
              <MoviesList movies={searchResults} />
              <Outlet />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
