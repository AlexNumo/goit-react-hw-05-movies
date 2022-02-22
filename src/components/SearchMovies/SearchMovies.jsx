import {ImSearch} from 'react-icons/im';
import { useState, useEffect } from 'react';
// import fetchAPI from 'components/Services/FetchAPI';
import MovieInfo from 'components/Movieinfo/Movieinfo';

const SearchMovies = () => {
    const [search, setSearch] = useState('');
    const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    function fetchAPI() {
    const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
    const defaultPath = `https://api.themoviedb.org/3/search/movie`;
    
    return fetch(`${defaultPath}?api_key=${API_KEY_V3}&language=en-US&query=${search}&page=1&include_adult=false`)

    .then(response => {
        if(response.ok) {
            return response.json();
            // return console.log(response.json());
        }
        return Promise.reject(
            new Error('Somes wrong'))
    })
    };
    // fetchAPI();

    useEffect(() => {
        if (!search) return;

        // setIsLoading(true)

        fetchAPI()
            .then(({ results }) => {
                const moviesList = results.map(({ id, title }) => ({
                    id, title
                }))
                if (results.length === 0) {
                    return Promise.reject(new Error("Check your enter"))
                }
                setHits((state) => [...state, ...moviesList])
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [searchObject]);

    const handleFormSubmit = query => {
        setSearchObject(query)
        setCurrentPage(1)
        setHits([])
        setError(null)
    }

    const handleNameChange = e => {
        setSearch(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(search.trim() === '') {
            return alert('Please entry')
        }
        handleFormSubmit(search)
        // setSearch('')
    }

    console.log("hits: ", hits);
    console.log("search: ", search);
    console.log("searchObject: ", searchObject);

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input  value={search}
                        name='images'
                        className="input"
                        type="text"
                        placeholder="Search movies"
                        onChange={handleNameChange}/>
                <button type="submit" className="button">
                    <ImSearch style={{marginRight: 8}}/>
                    <span>Search</span>
                </button>
            </form>
            <MovieInfo hits={hits} searchObject={searchObject}/>
        </div>
    )}

export default SearchMovies;