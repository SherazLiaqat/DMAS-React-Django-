import axios from 'axios';

const baseUrl = "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=full&preset=latest&slim=1";

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}`);
        return data;
    }catch(error) {
        throw error;
    }
}
