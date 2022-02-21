import { useEffect, useState } from "react";
import FetchAPI from "../Services/FetchAPI";
import TrendingToday from "components/TrendingToday/TrendingToday";
import { Navigation } from "Pages/Navigation/Navigation";


const TrendingRender = () =>{
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        FetchAPI()
        .then(({results}) => {
            const moviesList = results.map(({title, id}) => ({
                title, id
            }))
        setHits((state) => [...state, ...moviesList])
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    }, [])
;
    return (
        <div>
            <Navigation/>
            <h2>Trending today</h2>
            <TrendingToday showMovies={hits}/>
        </div>
    )
};

export default TrendingRender;
