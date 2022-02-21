import {ImSearch} from 'react-icons/im';
import { useState, useEffect } from 'react';
import fetchAPI from 'components/Services/FetchAPI';

const SearchMovies = () => {
    const [search, setSearch] = useState('');
    const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() =>{
        if( !searchObject) return;

        setIsLoading(true)

        fetchAPI(searchObject, currentPage)
            .then(({hits}) => {
                const images = hits.map(({webformatURL, id, tags, largeImageURL}) => ({
                    webformatURL, id, tags, largeImageURL
                }))
                if(hits.length === 0) {
                    return Promise.reject(new Error("Проверьте ввод запроса"))
                }
                setHits((state) => [...state, ...images])
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [searchObject, currentPage])

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
        setSearch('')
    }

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
        </div>
    )}

export default SearchMovies;