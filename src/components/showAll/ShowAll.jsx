import { React, useEffect } from 'react';
import { response, exerciseOption } from '../../utils/utilsFetchData';
import "./ShowAll.scss";
import { useSelector,useDispatch } from 'react-redux';
import FilterAll from './FilterAll';
import { exerciseArray } from "../../redux/excerciseApi/exerciseApiAction";

const ShowAll = () => {
  const textExercise = useSelector((state) => state.exerciseTextObj);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAll = async () => {
      // const url = (textExercise!=="") ? process.env.REACT_APP_ALL+"/bodyPart/"+textExercise : process.env.REACT_APP_ALL;
      const url = process.env.REACT_APP_ALL;
      const allData = await response(url, exerciseOption);
      const newArray = allData.filter((item)=>(item.bodyPart.toLowerCase().includes(textExercise)||item.target.toLowerCase().includes(textExercise)||item.equipment.toLowerCase().includes(textExercise)||item.name.toLowerCase().includes(textExercise)))
      dispatch(exerciseArray(textExercise!=="" ? newArray : allData ))
    }
    fetchAll()
  }, [textExercise,dispatch])

  const Arr = useSelector((state) => state.exerciseApiObj);
  return (
   <FilterAll Arr={Arr} />
  )
}

export default ShowAll