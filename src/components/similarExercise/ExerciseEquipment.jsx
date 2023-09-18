import React, { useEffect,useState } from 'react'
import { response, exerciseOption } from '../../utils/utilsFetchData';
import SimilarCard from './SimilarCard';

const ExerciseEquipment = ({ equipment,id }) => {
    const [equipmentArr,setEquipmentArr] = useState([]);

    useEffect(() => {
        const fetchVdieo = async () => {
            const url = process.env.REACT_APP_ALL + "/equipment/" + equipment;
            const getData = await response(url, exerciseOption);
            setEquipmentArr(getData)

        }
        if (equipment) { fetchVdieo() }
    }, [equipment])
    return (
        <SimilarCard type="equipment" name={equipment} Arr={equipmentArr} id={id} />
    )
}

export default ExerciseEquipment