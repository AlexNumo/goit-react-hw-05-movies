import {getMovieCast} from "../../Services/FetchAPI";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Cast} from "../../components/Cast/Cast";

export const ActorPage = () => {
  const {itemId} = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    async function fetchItem(){
      try{
        const item = await getMovieCast(itemId);
        setItem(item)
      } catch (error){
        toast.error('information not found')
      }
    }
    fetchItem()
  },[itemId])

  return (
    <>
      {item && <Cast items={item}/>}
    </>

  );
};

