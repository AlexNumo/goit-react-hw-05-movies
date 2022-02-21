import RenderMovies from "./RenderMovies/RenderMovies";
import { Routes, Route, Navigate } from 'react-router-dom';
import SearchMovies from "./SearchMovies/SearchMovies";

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<RenderMovies />}>
    //     <Route path="/movies" element={<SearchMovies />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Route>
    // </Routes>
    <SearchMovies />
  );
};
