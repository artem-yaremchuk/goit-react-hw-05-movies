import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "b3fc73cdb1b0c02fab862c555a617adf";

export const getTrendingMovies = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  const { data } = await axios.get(`/trending/all/day?${params}`);

  return data;
};

export const getCredits = async (movieId) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  const { data } = await axios.get(`/movie/${movieId}/credits?${params}`);

  return data;
};

export const getMovieDetails = async (movieId) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  const response  = await axios.get(`/movie/${movieId}?${params}`);
  console.log(response.status);
  return response.data;
  
};

export const searchMovies = async (searchItem) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    query: searchItem,
  });
  const { data } = await axios.get(`/search/movie?${params}`);

  return data;
};

export const getReviews = async (movieId) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  const { data } = await axios.get(`/movie/${movieId}/reviews?${params}`);

  return data;
};
