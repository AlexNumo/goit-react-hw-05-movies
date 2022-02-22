import { Link } from 'react-router-dom';

const MovieInfo = ({ hits, searchObject }) => {
    return (
        <div>
            <ul>
                {hits.map(({id, title}) => (
                    <li
                        key={id}>
                        <Link to={`/movies?query=${searchObject}`}>{title}</Link>
                    </li>
            ))}
        </ul>
        </div>
    )
}

export default MovieInfo;