import React, { useState, useEffect } from "react";
import Deathbar from "./Earthquake events/Deathbar";
import Deathdpie from "./Earthquake events/Deathpie";
import Earthquakes from "./Earthquake events/Earthquakehappened";
import Affectedbar from "./Earthquake events/Affectedbar";
import Affectedpie from "./Earthquake events/Affectedpie";
import Injuredbar from "./Earthquake events/Injuredbar";
import Injuredpie from "./Earthquake events/Injuredpie";
import { NativeSelect, FormControl } from '@material-ui/core';
import fetchCountries from '../Pages/Extrapages/LiveEvents/CovidlLive/CovidApi/Index'
import axios from "axios";
import "./Event.css";
import { PostAddSharp } from "@material-ui/icons";
//country
const c=''
 const Event = ({ handleCountryChange })=> {
  const [user,setuser]=useState("");
  

    const [countries, setCountries] = useState([]);
    const [filter,setFilter]=useState("all");
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ country: filter })
      };
      const response = await fetch('http://127.0.0.1:8000/Earthquake_Events/', requestOptions);
      const data = await response.json();
      console.log(data);
      console.log(filter)
      setuser(data);
      };
      fetchAPI();
    }, []);

   
  
  return (
    <>
    <div>
  <h1>hello{user.positions}</h1>
    {filter}
    </div>
    <div className="div-main">
       <FormControl >
      <NativeSelect defaultValue="" onChange={(e) => setFilter(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country) => <option  value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    <h1>Earthquake Happened</h1>
    <p style={{textAlign:'center'}}> Number of earthqauake happend in Last years</p>
      <div className="event-container-Blog">
        <Earthquakes
        data={user.data}
        label={user.lebel}
          />
      </div>
      <h1>Earthquake Deaths</h1>
      <div className="event-container-Blog">
        <Deathbar
        deaths={user.deaths}
        deaths_years={user.deaths_years}
          />
      </div>
      <div className="event-container-HeavyRain">
        <Deathdpie />
      </div>
      <div>
        <h1>Injuried</h1>
        <div className="event-container-Blog">
          <Injuredbar />
        </div>
        <div className="event-container-HeavyRain">
          <Injuredpie />
        </div>
      </div>
      <div>
        <h1>Affected </h1>
        <div className="event-container-Blog">
          <Affectedbar />
        </div>
        <div className="event-container-HeavyRain">
          <Affectedpie />
        </div>
      </div>
    </div>
    </>
  );
};
export default Event;
