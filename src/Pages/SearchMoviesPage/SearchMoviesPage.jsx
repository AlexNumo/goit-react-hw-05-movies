import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {getFoundMovies} from "../../Services/FetchAPI";
import MovieInfo from "../../components/Movieinfo/Movieinfo";
import {SearchMovies} from "../../components/SearchMovies/SearchMovies";



const SearchMoviesPage = () => {

  const [query, setQuery] = useState('');
  const [found, setFound] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    if(query === '') {
      return
    }

    async function fetchItem(){
      try{
        const item = await getFoundMovies(query);
        const movieItem = item.map(({id, title}) => ({id, title}))
        setFound(movieItem)

      } catch (error){
      }
    }

    fetchItem()
  }, [query])

  useEffect(() => {
    if(search === null) {
      return
    }

    async function fetchItem(){
      try{
        const item = await getFoundMovies(search)
        const searchMovie = item.map(({id, overview, poster_path, title}) => ({id, overview, poster_path, title}))
        setFound(searchMovie)
      } catch (error){
      }
    }

    fetchItem()
  }, [search])


  const forForm = (searchQuery) => {
    setQuery(searchQuery);
    navigate({...location, search: `query=${searchQuery}`})
  }

  return (
    <>
      <SearchMovies onSubmit={forForm}/>
      <MovieInfo hits={found}/>
    </>

  );
};

export default SearchMoviesPage;