import axios from 'axios';

export  const fetchCountries = async () => {
    try {
      const countries = await axios.get(`http://127.0.0.1:8000/Flood_Events/`);
      
  
      return countries.Country.map((country) => country);
      
    } catch (error) {
       
      return error;
    }
  };
  export default fetchCountries