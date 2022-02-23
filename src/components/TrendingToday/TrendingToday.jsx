import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MovieLink = styled(NavLink)`
    display: flex;
    padding: 5px 5px 5px 5px;
      &.active {
    color: tomato;
  }
`
const TrendingToday = ({showMovies}) =>{
    return(
        <ul>
            {showMovies.map(({id, title}) => (
                <li
                    key={id}>
                    <MovieLink to={`/movies/${id}`}>{title}</MovieLink>
                </li>
            ))}
        </ul>
    )
};

export default TrendingToday;