import { React, useEffect, useState } from 'react'
import { exerciseOption, response } from '../../utils/utilsFetchData'
import CategoryItem from './CategoryItem';
import './CategoryItem.scss';
import ShowAll from '../showAll/ShowAll';

const ShowCategoryBody = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchDataCategory = async () => {
            const url = process.env.REACT_APP_BODYPARTS;
            // console.log(url);
            const categoryData = await response(url, exerciseOption)
            // console.log(categoryData);
            setCategory(categoryData)
        }
        fetchDataCategory()
    }, [])

    return (
        <>
                <div className="category-container" >
            {
                category.map((item, id) => {
                    return (
                        <CategoryItem key={id} item={item} />
                    )
                })
            }
        </div>
        <ShowAll/>
        </>
    )
}

export default ShowCategoryBody