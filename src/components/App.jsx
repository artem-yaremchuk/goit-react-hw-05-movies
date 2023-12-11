import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Movies = lazy(() => import("../pages/Movies/Movies.jsx"));
const MovieDetails = lazy(() => import("../pages/Movies/MovieDetails.jsx"));
const Cast = lazy(() => import("../pages/Movies/Cast.jsx"));
const Reviews = lazy(() => import("../pages/Movies/Reviews.jsx"));

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Route>
      </Routes>
  );
};

export default App;
