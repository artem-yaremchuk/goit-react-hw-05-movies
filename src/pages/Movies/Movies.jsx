import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import SearchMoviesList from "components/SearchMoviesList/SearchMoviesList";
import { searchMovies } from "components/api/api";
import { Outlet, useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";
import Loader from "components/Loader/Loader";

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchItem) => {
    try {
      setIsLoading(true);
      const data = await searchMovies(searchItem);
      setSearchResults(data.results);
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
          <SearchMoviesList searchResults={searchResults} />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Movies;
