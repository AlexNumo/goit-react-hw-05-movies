import { Routes, Route, Navigate } from "react-router";
import { Navigation } from "../Pages/Navigation/Navigation";
import { PreviewPage } from "../Pages/PreviewPage/PreviewPage";
import {ActorPage} from "../Pages/ActorPage/ActorPage";
import {ReviewPage} from "../Pages/ReviewPage/ReviewPage";
import { lazy, Suspense} from 'react';
import SearchMoviesPage from "../Pages/SearchMoviesPage/SearchMoviesPage";

const RenderMovies = lazy(() => import('./RenderMovies/RenderMovies.jsx' /* webpackChunkName: "RenderMovies"*/));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<RenderMovies />} />
          <Route path="/home" element={<RenderMovies />} />
          <Route path="/movies/" element={<SearchMoviesPage />} />
          <Route path="/movies/:itemId" element={<PreviewPage />} >
            <Route path='cast' element={<ActorPage/>}/>
            <Route path='reviews' element={<ReviewPage/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </Suspense>
      </div>

  );
};
