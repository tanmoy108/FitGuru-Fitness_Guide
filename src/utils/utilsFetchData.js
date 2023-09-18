import axios from "axios";

export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_ANOTHER_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const response = async (url, option) => {
    const res = await axios.request(url, option);
    const data = res.data;
    return data;
} 


