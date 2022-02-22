import { useEffect, useState } from "react";
import {getPopular} from "../Services/FetchAPI";
import TrendingToday from "components/TrendingToday/TrendingToday";


const TrendingRender = () =>{
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPopular()
        .then(({results}) => {
            const moviesList = results.map(({title, id}) => ({
                title, id
            }))
        setHits((state) => [...state, ...moviesList])
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    }, []);

    // console.log(hits);

    return (
        <div>
            <h2>Trending today</h2>
            <TrendingToday showMovies={hits}/>
        </div>
    )
};

export default TrendingRender;
