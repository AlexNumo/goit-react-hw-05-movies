const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
const API_KEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzg3NjRmYjQ3OTMyZjlmODE1YTIzY2U4ZTg5YThiZSIsInN1YiI6IjYyMGY5MDhkMWYwMjc1MDA2YTY1YzQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5M_87tbuSHaRtltHOPO9-Q1KPzwFZAKAa1ja2RRxfU';
const PER_AGE = 12;
const search = '&query=trending';

function fetchAPI() {
    return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY_V3}&${search}`)

    .then(response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error('Somes wrong'))
    })
};

export default fetchAPI;
