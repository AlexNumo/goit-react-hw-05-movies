import {Link, useParams, Outlet} from "react-router-dom";
import {getMovieById} from "../../components/Services/FetchAPI";
import {useEffect, useState} from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";


export const PreviewPage = () => {
  const {itemId} = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    async function fetchItem(){
      try{
        const item = await getMovieById(itemId);
        setItem(item)
      } catch (error){
        toast.error('NOT FOUND, PLEASE ENTRY')
      }
    }
    fetchItem()
  }, [itemId])
  // console.log(item)

  return (
    <div>
      <Link to='/'>Go Back</Link>
      {item && <MovieCard item={item}/>}
      {/* <h2>Additional information</h2> */}
      <Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link>
      {/* <hr/> */}
      <Outlet/>
    </div>)
};