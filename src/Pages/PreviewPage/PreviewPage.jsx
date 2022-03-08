import {NavLink, useParams, Outlet} from "react-router-dom";
import {getMovieById} from "../../Services/FetchAPI";
import {useEffect, useState} from "react";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";
import styled from 'styled-components';

const LinkStyle = styled(NavLink)`
  display: flex;
  flex-direction: column;
`

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

  return (
    <div>
      <NavLink to='/'>Go Back</NavLink>
      {item && <MovieCard item={item}/>}
      <LinkStyle to='cast'>Cast</LinkStyle>
      <LinkStyle to='reviews'>Reviews</LinkStyle>
      <Outlet/>
    </div>)
};