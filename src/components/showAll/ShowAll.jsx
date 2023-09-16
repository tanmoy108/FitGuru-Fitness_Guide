import { React, useState, useEffect } from 'react'
import { response, exerciseOption } from '../../utils/utilsFetchData';
import AllItem from './AllItem';
import "./ShowAll.scss"
import { useSelector } from 'react-redux';

const ShowAll = () => {
  const textExercise = useSelector((state) => state.exerciseTextObj);
  if(textExercise!=="")console.log(textExercise);
  // console.log(process.env.REACT_APP_ALL)

  const [allExercise, setAllExercise] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const url = (textExercise!=="") ? process.env.REACT_APP_ALL+"/bodyPart/"+textExercise : process.env.REACT_APP_ALL;
      console.log(url);
      const allData = await response(url, exerciseOption);
      setAllExercise(allData);
    }
    fetchAll()
  }, [textExercise])
  return (
    <div className='item-container'>
      {
        allExercise.filter((items, ids) => {
          return (
            ids < 4
          )
        }).map((item, id) => {
          return (
            <AllItem key={id} item={item} />
          )
        })
      }
    </div>
  )
}

export default ShowAll