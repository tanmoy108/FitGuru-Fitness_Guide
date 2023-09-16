import React, { useEffect,useState } from 'react'
import { response, youtubeOption } from '../../utils/utilsFetchData'
import VideoCard from './VideoCard';
import "./ExerciseByVideo.scss";


const ExcerciseByVideo = (props) => {
    const [video,setVideo] = useState([]);
    const {name,target} = props
    console.log(name);

    useEffect(()=>{
        const fetchVdieo = async() =>{
            const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}-${target}-excercise`;
            // console.log(url);
            const getData = await response(url,youtubeOption);
            // console.log(getData.contents);
            setVideo(getData.contents)
        }
      if(name){fetchVdieo()}
    },[name,target])

    console.log(video)
  return (
    <div className='videoCardBody' style={{justifyContent: 'center'}} >
   {
    video ?  <VideoCard video={video}/> : <div>Loading</div>
   }
    </div>
  )
}

export default ExcerciseByVideo