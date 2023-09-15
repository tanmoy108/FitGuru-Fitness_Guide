import {React,useState,useEffect} from 'react'
import { response,exerciseOption } from '../../utils/utilsFetchData';
import AllItem from './AllItem';

const ShowAll = () => {
    const [allExercise,setAllExercise] = useState([]);
    useEffect(()=>{
        const fetchAll = async() =>{
            const url = process.env.REACT_APP_ALL;
            const allData = await response(url,exerciseOption);
            setAllExercise(allData);
        }
        fetchAll()
    },[])
  return (
    <>
    {
      allExercise.map((item,id)=>{
        return(
          <AllItem key={id} item={item} />
        )
      })
    }
    </>
  )
}

export default ShowAll