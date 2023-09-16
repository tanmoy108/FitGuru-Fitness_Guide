import axios from "axios";

export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1e1ee9da79msh89b67c58c0bb738p1931f6jsn384ad3bb0b59',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '300d70fa7fmsh9bd7a6e8894f6c7p1f8764jsncdf022bc733d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const response = async (url, option) => {
    const res = await axios.request(url, option);
    const data = res.data;
    // console.log(data);
    return data;
} 


