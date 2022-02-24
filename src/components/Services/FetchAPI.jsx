import axios from 'axios';

const defaultPath = `http://api.themoviedb.org/3/`;
const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
axios.defaults.baseURL = `${defaultPath}`;


export const getPopular = async () =>{
    const response = await axios.get(`trending/all/day?api_key=${API_KEY_V3}`);
    return response.data;
};

export const getSearch = async ({search}) =>{
    const response = await axios.get(`search/movie/?api_key=${API_KEY_V3}&language=en-US&query=${search}&page=1&include_adult=false`);
    return response.data;
};

export const getMovieById = async (id) =>{
    const response = await axios.get(`movie/${id}?api_key=${API_KEY_V3}&language=en-US`);
    return response.data;
};

export const getMovieCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY_V3}&language=en-US`)
    return response.data.cast;
  }

export const getReviews = async (id) => {
const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY_V3}&language=en-US`)
return response.data.results;
}