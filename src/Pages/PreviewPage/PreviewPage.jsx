import { NavLink, useParams, Outlet, useNavigate} from "react-router-dom";
import {getMovieById} from "../../Services/FetchAPI";
import {useEffect, useState} from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";

export const PreviewPage = () => {
  const {itemId} = useParams();
  // const location = useLocation();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  // const [clicks, setClicks] = useState(0);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = setSearchParams.get('cast');
  // console.log(search);

  const goBack = () => navigate(-1);

//   const goBack = () => {
//   if(clicks === 0 ?? null) {
//     navigate(-1)
//     console.log("-1")
//   };
//   navigate(-2)
//   console.log("-2")
// }
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

  // clicks(0);

  // const clicksBTN = () => {
  //   setClicks(clicks + 1);
  // }
  // console.log(clicks);

  return (
    <div>
      {/* <Link to={location?.state?.from ?? '/'}>Go Back</Link> */}
      <button onClick={goBack}>Go Back</button>
      {/* <button onClick={clicksBTN}>Clicks: </button> */}
      {item && <MovieCard item={item}/>}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
          {/* state={{ from: location?.state?.from ?? '/' }} */}
            <NavLink to='cast'>
              Cast
            </NavLink>
          </li>
          <li>
          {/* state={{ from: location?.state?.from ?? '/' }} */}
            <NavLink to='reviews'>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>)
};