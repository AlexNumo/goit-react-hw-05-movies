import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';


export const PreviewPage = () => {
    const [search, setSearch] = useState('');
    const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  function FetchAPI() {
    const API_KEY_V3 = '978764fb47932f9f815a23ce8e89a8be';
    const API_KEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzg3NjRmYjQ3OTMyZjlmODE1YTIzY2U4ZTg5YThiZSIsInN1YiI6IjYyMGY5MDhkMWYwMjc1MDA2YTY1YzQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5M_87tbuSHaRtltHOPO9-Q1KPzwFZAKAa1ja2RRxfU';
    const external_id = '476669';
    const defaultPath = `https://api.themoviedb.org/3/movie`;
    
    return fetch(`${defaultPath}/${external_id}?api_key=${API_KEY_V3}&language=en-US`)

    .then(response => {
        if(response.ok) {
          return console.log(response.json());
          // return response.json();
        }
        return Promise.reject(
            new Error('Somes wrong'))
    })
};

  useEffect(() => {
    FetchAPI();
  }, []);

  console.log(hits);
  
  return (
    <div>
      
      <h2>{hits.id}</h2>
    </div>
  );
};


// adult: false
// backdrop_path: "/6qkeXdIEwqOuOWuxsomwnin2RdD.jpg"
// belongs_to_collection: null
// budget: 100000000
// genres: (4) [{…}, {…}, {…}, {…}]
// homepage: "https://www.20thcenturystudios.com/movies/the-kings-man"
// id: 476669
// imdb_id: "tt6856242"
// original_language: "en"
// original_title: "The King's Man"
// overview: "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them."
// popularity: 5541.815
// poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2021-12-22"
// revenue: 124005195
// runtime: 131
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Witness the bloody origin."
// title: "The King's Man"
// video: false
// vote_average: 7.1
// vote_count: 1200