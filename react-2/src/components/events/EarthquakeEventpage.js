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
export const Event = ({ handleCountryChange })=> {
  
    const [countries, setCountries] = useState([]);
    const [filter,setFilter]=useState("");
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);

   
  
  return (
    <>
    <div>
    {filter}
    </div>
    <div className="div-main">
       <FormControl >
      <NativeSelect defaultValue="" onChange={(e) => setFilter(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    <h1>Earthquake Happened</h1>
      <div className="event-container-Blog">
        <Earthquakes
        
          />
      </div>
      <h1>Earthquake deaths</h1>
      <div className="event-container-Blog">
        <Deathbar
        val={filter}
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
