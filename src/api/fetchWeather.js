import axios from 'axios';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '8b40c817d9c6a9eacde6ca85845c297c';

const fetchWeather = async (query) => {
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric',
            APPID:key
        }
    });
    return data;
}

export default fetchWeather;
