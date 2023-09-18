import React, { useEffect } from 'react'
import { response, exerciseOption } from '../../utils/utilsFetchData';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseArray } from "../../redux/excerciseApi/exerciseApiAction";
import SimilarCard from './SimilarCard';
const ExerciseTarget = ({ target,id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVdieo = async () => {
            const url = process.env.REACT_APP_ALL + "/target/" + target;
            const getData = await response(url, exerciseOption);
            dispatch(exerciseArray(getData))
        }
        if (target) { fetchVdieo() }
    }, [target,dispatch])

    const tar = useSelector((state) => state.exerciseApiObj);
    return (
            <SimilarCard type="target" name={target} Arr={tar} id={id} />
    )
}

export default ExerciseTarget