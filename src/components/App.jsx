// import RenderMovies from "./RenderMovies/RenderMovies";
// import SearchMovies from "./SearchMovies/SearchMovies";
import { Routes, Route, Navigate } from "react-router";
import { Navigation } from "../Pages/Navigation/Navigation";
import { PreviewPage } from "../Pages/PreviewPage/PreviewPage";
import {ActorPage} from "../Pages/ActorPage/ActorPage";
import {ReviewPage} from "../Pages/ReviewPage/ReviewPage";
import { lazy, Suspense} from 'react';

// const Navigation = lazy(() => import('../Pages/Navigation/Navigation.jsx' /* webpackChunkName: "Navigation"*/));
const RenderMovies = lazy(() => import('./RenderMovies/RenderMovies.jsx' /* webpackChunkName: "RenderMovies"*/));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies.jsx' /* webpackChunkName: "SearchMovies"*/));
// const PreviewPage = lazy(() => import('../Pages/PreviewPage/PreviewPage.jsx' /* webpackChunkName: "PreviewPage"*/));
// const ActorPage = lazy(() => import('../Pages/ActorPage/ActorPage.jsx' /* webpackChunkName: "ActorPage"*/));
// const ReviewPage = lazy(() => import('../Pages/ReviewPage/ReviewPage.jsx' /* webpackChunkName: "ReviewPage"*/));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
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
      </Suspense>
      </div>

  );
};
