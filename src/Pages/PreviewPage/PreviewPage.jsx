import {Link, NavLink, useParams, Outlet, useLocation} from "react-router-dom";
import {getMovieById} from "../../Services/FetchAPI";
import {useEffect, useState} from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";

export const PreviewPage = () => {
  const {itemId} = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  // let [searchParams, setSearchParams] = useSearchParams();
  // let user = searchParams.get("id");
  // // let sdv = setSearchParams({ id: 545});
  // console.log(user);

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

  return (
    <div>
      <Link to={location?.state?.from ?? '/'}>Go Back</Link>
      {item && <MovieCard item={item}/>}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to='cast' state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to='reviews' state={{ from: location?.state?.from ?? '/' }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>)
};