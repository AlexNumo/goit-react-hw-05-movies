import {getReviews} from "../../components/Services/FetchAPI";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Reviews} from "../../components/Reviews/Reviews";
import {toast} from "react-hot-toast";

export const ReviewPage = () => {

  const {itemId} = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    async function fetchItem(){
      try{
        const item = await getReviews(itemId);
        setItem(item)
      } catch (error){
        toast.error('no description')
      }
    }
    fetchItem()
  },[itemId])

  return (
    <>
      {item && <Reviews items={item}/>}
    </>
  )
}
