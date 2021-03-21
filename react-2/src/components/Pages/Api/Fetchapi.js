import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '6a3f8c6f38f2c2843c91462a25843860';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}