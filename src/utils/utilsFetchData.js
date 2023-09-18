import axios from "axios";

export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2bdec45b41mshd5e74bd72dd7b53p1aa718jsncaaf16804838',
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
    return data;
} 


