import { Link } from 'react-router-dom';

const TrendingToday = ({showMovies}) =>{
    return(
        <ul>
            {showMovies.map(({id, title}) => (
                <li
                    key={id}>
                        <Link to='/title' >{title}</Link>
                        </li>
            ))}
        </ul>
    )
};

export default TrendingToday;