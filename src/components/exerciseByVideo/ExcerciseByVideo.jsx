import React, { useEffect,useState } from 'react'
import { response, youtubeOption } from '../../utils/utilsFetchData'
import VideoCard from './VideoCard';
import "./ExerciseByVideo.scss";
import { useSelector } from 'react-redux';

const ExcerciseByVideo = (props) => {
    const [video,setVideo] = useState([]);
    const {name,target} = props

    useEffect(()=>{
        const fetchVdieo = async() =>{
            const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}-${target}-excercise`;
            const getData = await response(url,youtubeOption);
            setVideo(getData.contents)
        }
      if(name){fetchVdieo()}
    },[name,target])

  return (
    <div className='videoCardBody' style={{justifyContent: 'center'}} >
   {
    video ?  <VideoCard video={video}/> : <div>Loading</div>
   }
    </div>
  )
}

export default ExcerciseByVideo