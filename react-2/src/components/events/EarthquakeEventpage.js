import React, { useState, useEffect } from "react";
import Deathbar from "./Earthquake events/Deathbar";
import Deathdpie from "./Earthquake events/Deathpie";
import Earthquakes from "./Earthquake events/Earthquakehappened";
import { Line, Bar,Pie,defaults } from 'react-chartjs-2';
import Affectedbar from "./Earthquake events/Affectedbar";
import Affectedpie from "./Earthquake events/Affectedpie";
import Injuredbar from "./Earthquake events/Injuredbar";
import Injuredpie from "./Earthquake events/Injuredpie";

import { NativeSelect, FormControl } from '@material-ui/core';
import fetchCountries from '../Pages/Extrapages/LiveEvents/CovidlLive/CovidApi/Index'
import axios from "axios";
import "./Event.css";
import { PostAddSharp } from "@material-ui/icons";
defaults.global.tooltips.enabled = true
//country
const c=''
 const Event = ({handleCountryChange})=> {
  const [user,setuser]=useState("");
  

    const [countries, setCountries] = useState([]);
    const [filter,setFilter]=useState("all");
  
    useEffect(() => {
      
        
      fetchAPI();
    }, []);

    const fetchAPI = async () => {
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
    setCountries(data.Country);
    };

    const callback= async()=>{
      fetchAPI()
    }

    const barChart = (
    
      <Bar
        data={{
          labels: user.lebel,
          datasets: [
            {
              label: 'No. of Earthquake Happen in Years',
              backgroundColor: "red",
              borderColor: "#DE924B",
              data: user.data,
            },
            {
                label: 'No. of Earthquake Happen in Years',
                data: user.data,
                type: "line",
                borderColor: 'rgba(54,162,235,1)',
                fill: false,
                borderWidth: 2,
                backgroundColor:'black',
              },
          ],
          
        }}
        options={{}}
        
      />
      
    
  );

  const lineCharts = (
   
      <Bar
      data={{
        labels: user.deaths_years,
        datasets: [
          {
            label: 'No. of Death in Years',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', ],
            data: user.deaths,
          },
          {
              labels: 'sat,lat,long',
              data: user.deaths,
              type: "line",
              borderColor: 'rgba(54,162,235,1)',
              fill: false,
              borderWidth: 2,
              backgroundColor:'black',
            },
        ],
        
      }}
      
      />
    
  );
  const lineChart = (
   
    <Bar
    data={{
        labels: user.Injured_years,
        datasets: [
          {
            label: 'No. of Injuried People in Years',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            data: user.Injured,
          },
          {
              labels: 'sat,lat,long',
              data: user.Injured,
              type: "line",
              borderColor: 'rgba(54,162,235,1)',
              fill: false,
              borderWidth: 2,
              backgroundColor:'black',
            },
        ],
        
      }}
      options={{}}
    />
  
);
const lineCharty = (
   
  <Bar
  data={{
      labels: user.Affected_years,
      datasets: [
        {
          label: 'No. of Affected People in Years',
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          data: user.Affected,
        },
        {
            labels: ['sat'],
            data: user.Affected,
            type: "line",
            borderColor: 'rgba(54,162,235,1)',
            fill: false,
            borderWidth: 2,
            backgroundColor:'black',
          },
      ],
      
    }}
    options={{}}
  />

);

const deathpie=(
    <Pie
    data={{
        
        label:["Low", "Medium", "High", "Very High", "Extreme"],
          datasets: [
            {
              data: user.dead_count,
              backgroundColor: [
                "#1a8604",
                "#0839f0",
                "#e9f308",
                "#fe7104",
                "#f61212",
              ],
            },
          ],
  
          labels: ["Low", "Medium", "High", "Very High", "Extreme"],
        
    }}
    
    
    />

)
const injuriedpie=(
  <Pie
  data={{
      
      label:["Low", "Medium", "High", "Very High", "Extreme"],
        datasets: [
          {
            data: user.Injured_count,
            backgroundColor: [
              "#1a8604",
              "#0839f0",
              "#e9f308",
              "#fe7104",
              "#f61212",
            ],
          },
        ],

        labels: ["Low", "Medium", "High", "Very High", "Extreme"],
      
  }}
  
  
  />

)
const Affectedpie=(
  <Pie
  data={{
      
      label:["Low", "Medium", "High", "Very High", "Extreme"],
        datasets: [
          {
            data: user.Affected_count,
            backgroundColor: [
              "#1a8604",
              "#0839f0",
              "#e9f308",
              "#fe7104",
              "#f61212",
            ],
          },
        ],

        labels: ["Low", "Medium", "High", "Very High", "Extreme"],
      
  }}
  
  
  />

)
  return (
    <>


    <div>
  
    {filter}
    </div>
    <div className="div-main">
    <select
          className="Changing"
          id="Type"
          name="Type"
          onChange={(e) => setFilter(e.target.value)}
          onClick={callback}
        >
          <option>Global</option>
          {countries.map((country) => <option  value={country}>{country}</option>)}
        </select>
       
    <h1>Earthquake Happened</h1>
    <p style={{textAlign:'center'}}> Number of earthqauake happend in Last years</p>
      <div className="event-container-Blog">
      { barChart }
      </div>
      <h1>Earthquake Deaths</h1>
      <div className="event-container-Blog">
      { lineChart}
      </div>
      <div className="event-container-HeavyRain">
      {deathpie}
      </div>
      <div>
        <h1>Injuried</h1>
        <div className="event-container-Blog">
        { lineCharty}
        </div>
        <div className="event-container-HeavyRain">
        {injuriedpie}
        </div>
      </div>
      <div>
        <h1>Affected </h1>
        <div className="event-container-Blog">
        { lineCharts}
        </div>
        <div className="event-container-HeavyRain">
        {Affectedpie}
        </div>
      </div>
    </div>
    </>
  );
};
export default Event;
