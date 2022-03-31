import { NavLink, useParams, Outlet, useNavigate} from "react-router-dom";
import {getMovieById} from "../../Services/FetchAPI";
import {useEffect, useState} from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";

export const PreviewPage = () => {
  const {itemId} = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

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
      <button onClick={goBack}>Go Back</button>
      {item && <MovieCard item={item}/>}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to='cast'>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to='reviews'>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>)
};