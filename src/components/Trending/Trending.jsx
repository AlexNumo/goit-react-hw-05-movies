import { useState } from "react";
import fetchAPI from "../Services/FetchAPI";

const fetch = fetchAPI();

const TrendingRender = () => {
    console.log(fetch)
    return (
        <div>
            <button>HELLO</button>
        </div>
    )
};

export default TrendingRender;