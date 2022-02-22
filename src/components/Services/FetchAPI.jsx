// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
import axios from 'axios';

const defaultPath = `https://api.themoviedb.org/3/`;
const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
axios.defaults.baseURL = `${defaultPath}`;


export const getPopular = async () =>{
    const response = await axios.get(`movie/popular/?api_key=${API_KEY_V3}&language=en-US&page=1`);
    return response.data;
    // return console.log(response.data);
};

export const getSearch = async ({search}) =>{
    const response = await axios.get(`search/movie/?api_key=${API_KEY_V3}&language=en-US&query=${search}&page=1&include_adult=false`);
    return response.data;
    // return console.log(response.data);
};

export const getMovieById = async (id) =>{
    const response = await axios.get(`movie/${id}?api_key=${API_KEY_V3}&language=en-US`);
    return response.data;
    // return console.log(response.data.budget);
};

export const getMovieCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY_V3}&language=en-US`)
    // return console.log(response.data.cast);
    return response.data.cast;
  }

export const getReviews = async (id) => {
const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY_V3}&language=en-US`)
// return console.log(response.data.results);
return response.data.results;
}