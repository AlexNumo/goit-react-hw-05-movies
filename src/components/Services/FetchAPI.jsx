// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

function fetchAPI() {
    const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
    const API_KEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzg3NjRmYjQ3OTMyZjlmODE1YTIzY2U4ZTg5YThiZSIsInN1YiI6IjYyMGY5MDhkMWYwMjc1MDA2YTY1YzQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5M_87tbuSHaRtltHOPO9-Q1KPzwFZAKAa1ja2RRxfU';
    const query = 'popular';
    const defaultPath = `https://api.themoviedb.org/3/movie`;
    
    return fetch(`${defaultPath}/${query}?api_key=${API_KEY_V3}&language=en-US&page=1`)

    .then(response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error('Somes wrong'))
    })
};

export default fetchAPI;

// results: Array(20)
// 0:
// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 634649
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 9805.303
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.3
// vote_count: 8089