import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense} from 'react';

const Navigation = lazy(() => import('../Pages/Navigation/Navigation' /* webpackChunkName: "Navigation"*/).then(module => ({default: module.Navigation,})));
const RenderMovies = lazy(() => import('./RenderMovies/RenderMovies.jsx' /* webpackChunkName: "RenderMovies"*/));
const SearchMoviesPage = lazy(() => import('../Pages/SearchMoviesPage/SearchMoviesPage.jsx' /* webpackChunkName: "SearchMoviesPage"*/));
const PreviewPage = lazy(() => import('../Pages/PreviewPage/PreviewPage' /* webpackChunkName: "PreviewPage"*/).then(module => ({default: module.PreviewPage,})));
const ActorPage = lazy(() => import('../Pages/ActorPage/ActorPage' /* webpackChunkName: "ActorPage"*/).then(module => ({default: module.ActorPage,})));
const ReviewPage = lazy(() => import('../Pages/ReviewPage/ReviewPage' /* webpackChunkName: "ReviewPage"*/).then(module => ({default: module.ReviewPage,})));

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
