import { React, useState, useEffect } from 'react';
import { response, exerciseOption } from '../../utils/utilsFetchData';
import "./ShowAll.scss";
import { useSelector } from 'react-redux';
import FilterAll from './FilterAll';

const ShowAll = () => {
  const textExercise = useSelector((state) => state.exerciseTextObj);

  const [allExercise, setAllExercise] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const url = (textExercise!=="") ? process.env.REACT_APP_ALL+"/bodyPart/"+textExercise : process.env.REACT_APP_ALL;
      const allData = await response(url, exerciseOption);
      setAllExercise(allData);
    }
    fetchAll()
  }, [textExercise])
  return (
   <FilterAll allExercise={allExercise} />
  )
}

export default ShowAll