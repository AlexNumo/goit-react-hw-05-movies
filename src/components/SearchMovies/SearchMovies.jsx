import {ImSearch} from 'react-icons/im';
import { useState, useEffect } from 'react';
import MovieInfo from 'components/Movieinfo/Movieinfo';
import {getSearch} from '../Services/FetchAPI';
import { Link } from 'react-router-dom';

const SearchMovies = () => {
    const [search, setSearch] = useState('');
    const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!search) return;

        setIsLoading(true)

        getSearch({search})
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
    }

    // console.log("hits: ", hits);
    // console.log("search: ", search);
    // console.log("searchObject: ", searchObject);
    // const Linkos = () => {
    //     <Link to={`/movies?query=${searchObject}`}/>
    // }

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
                    {/* <Link to={`?query=${searchObject}`}> */}
                    <ImSearch style={{marginRight: 8}}/>
                    <span>Search</span>
                    {/* </Link> */}
                    </button>
                
            </form>
            <MovieInfo hits={hits}/>
        </div>
    )}

export default SearchMovies;