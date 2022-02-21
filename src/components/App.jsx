import RenderMovies from "./RenderMovies/RenderMovies";
import SearchMovies from "./SearchMovies/SearchMovies";
import { Routes, Route, Navigate } from "react-router";
import {Navigation} from "../Pages/Navigation/Navigation";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<RenderMovies />} />
        <Route path="/movies" element={<SearchMovies />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Route>
    </Routes>
    // <SearchMovies />
  );
};
