import RenderMovies from "./RenderMovies/RenderMovies";
import SearchMovies from "./SearchMovies/SearchMovies";
import { Routes, Route, Navigate } from "react-router";
import { Navigation } from "../Pages/Navigation/Navigation";
import { PreviewPage } from "Pages/PreviewPage/PreviewPage";
import {ActorPage} from "../Pages/ActorPage/ActorPage";
import {ReviewPage} from "../Pages/ReviewPage/ReviewPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<RenderMovies />} />
        <Route path="/home" element={<RenderMovies />} />
        <Route path="/movies/" element={<SearchMovies />} />
        <Route path="/movies/:itemId" element={<PreviewPage />} >
          <Route path='cast' element={<ActorPage/>}/>
          <Route path='reviews' element={<ReviewPage/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
