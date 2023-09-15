import axios from "axios";

export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'def5a06f22msh0385ea801e530cdp14f836jsn393e7fe7d702',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const response = async (url, option) => {
    const res = await axios.request(url, option);
    const data = res.data;
    console.log(data);
    return data;
} 