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
      const url = (textExercise!=="") ? process.env.REACT_APP_ALL+"/bodyPart/"+textExercise : process.env.REACT_APP_ALL;
      const allData = await response(url, exerciseOption);
      dispatch(exerciseArray(allData))
    }
    fetchAll()
  }, [textExercise,dispatch])

  const Arr = useSelector((state) => state.exerciseApiObj);
  return (
   <FilterAll Arr={Arr} />
  )
}

export default ShowAll