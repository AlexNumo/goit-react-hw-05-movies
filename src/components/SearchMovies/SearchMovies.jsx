import {ImSearch} from 'react-icons/im';
import { useState } from 'react';
import styled from 'styled-components';

const LinkButtonStyle = styled.button`
    width: 100px;
    height: 25px;
`

export const SearchMovies = ({onSubmit}) => {
    const [search, setSearch] = useState('');

    const handleNameChange = e => {
        setSearch(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault()
        if(search.trim() === '') {
            return alert('Please entry')
        }
        onSubmit(search);
        setSearch('');
    };


    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input  name='query'
                        type="text"
                        placeholder="Search movies"
                        onChange={handleNameChange}/>
                    <LinkButtonStyle type="submit" className="button">
                        <ImSearch />
                        <span>Search</span>
                    </LinkButtonStyle>
            </form>
        </div>
    )}
