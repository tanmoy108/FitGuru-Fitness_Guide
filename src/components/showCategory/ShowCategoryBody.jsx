import { React, useEffect, useState } from 'react';
import { exerciseOption, response } from '../../utils/utilsFetchData';
import CategoryItem from './CategoryItem';
import './CategoryItem.scss';
import ShowAll from '../showAll/ShowAll';
import { useDispatch } from 'react-redux';
import { exerciseText } from '../../redux/excersiseText/excerciseTextAction';

const ShowCategoryBody = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchDataCategory = async () => {
            const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
            // console.log(url);
            const categoryData = await response(url, exerciseOption)
            // console.log(categoryData);
            setCategory(categoryData)
        }
        fetchDataCategory()
    }, [])

    const HandleCategory = (itemName) => {
        dispatch(exerciseText(itemName))
    }

    return (
        <>
            <div className="category-container" >
                {
                    category.map((item, id) => {
                        return (
                            <CategoryItem key={id} item={item} HandleCategory={HandleCategory} />
                        )
                    })
                }
            </div>
            <ShowAll />
        </>
    )
}

export default ShowCategoryBody