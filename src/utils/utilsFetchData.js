import axios from "axios";

export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5d1955e4fbmshbe7275792e4a684p12220cjsn7577739455dd',
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


