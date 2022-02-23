import {ImSearch} from 'react-icons/im';
import { useState, useEffect } from 'react';
import MovieInfo from 'components/Movieinfo/Movieinfo';
import {getSearch} from '../Services/FetchAPI';
import {Link} from "react-router-dom";
// import styled from 'styled-components';

// const LinkButtonStyle = styled.button`
//     width: 100px;
//     height: 25px;
// `

const SearchMovies = () => {
    const [search, setSearch] = useState('');
    // const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);

    useEffect(() => {
        if (!search) return;
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
    }, [search]);

    const handleFormSubmit = query => {
        // setSearchObject(query)
        setHits([])
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

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input  value={search}
                        name='images'
                        className="input"
                        type="text"
                        placeholder="Search movies"
                        onChange={handleNameChange}/>
                    {/* <LinkButtonStyle type="submit" className="button"> */}
                        <Link to={{
                            search: `?query=${search}`,
                            state: {search}
                        }}>
                        <ImSearch />
                        <span>Search</span>
                        </Link>
                    {/* </LinkButtonStyle> */}
            </form>
            <MovieInfo hits={hits}/>
        </div>
    )}

export default SearchMovies;