import React from 'react'
import AllItem from './AllItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loader from './Loader';

const FilterAll = ({ Arr, condition, id }) => {

  if (!Arr.length) return <Loader />;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1035},
      items: 3
    },
    tablet: {
      breakpoint: { max: 1035, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
      {
        Arr.filter((items, ids) => {
          return (
            condition === "true" ? ids < 20 && items.id !== id : ids < 20
          )
        }).map((item, id) => {
          return (
            <AllItem key={id} item={item} />
          )
        })
      }
    </Carousel>
  )
}

export default FilterAll
