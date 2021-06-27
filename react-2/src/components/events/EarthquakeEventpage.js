import React, { useState, useEffect } from "react";

import { Line, Bar,Pie,defaults } from 'react-chartjs-2';
import styles from '../Pages/Extrapages/LiveEvents/CovidlLive/CountryPicker/CountryPicker.module.css';
import GoogleMapReact from 'google-map-react';
import { NativeSelect, FormControl } from '@material-ui/core';
import fetchCountries from '../Pages/Extrapages/LiveEvents/CovidlLive/CovidApi/Index'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from "axios";
import "./Event.css";
import { color } from "d3";
//import { PostAddSharp } from "@material-ui/icons";
defaults.global.tooltips.enabled = true
//country
const c=''
const Marker = ({ icon }) => <div>{icon}</div>;
 const Event = ({props})=> {
  const [user,setuser]=useState("");
  
<<<<<<< Updated upstream
  const [countries, setCountries] = useState([]);
=======

    const [countries, setCountries] = useState([]);
>>>>>>> Stashed changes
    const [position, setPosition] = useState([]);
    const [filter,setFilter]=useState("Global");
  
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
    setPosition(data.positions)
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
              label: 'No. of Earthquake Happend in Years',
              backgroundColor: "#DE924B",
            borderColor: "#DE924B",
              data: user.data,
            },
            {
                labels: 'No. of Earthquake Happen in Years',
                data: user.data,
                type: "line",
                borderColor: 'rgba(54,165,235,1)',
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
    <div className='event-bar'>
      <Bar
      data={{
        labels: user.deaths_years,
        datasets: [
          {
            label: 'No. of Death in Years',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
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
      options={{}}
      />
    </div>
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
            label:'No. of Affected People in Years' ,
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
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 1
};

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
const image =
<div style={{color:"red",border:"1px solid white"}}>
    <LocationOnIcon/>
    </div>

  return (
    <>
<<<<<<< Updated upstream
=======
 <div style={{ height: '76vh',marginBottom:'5%' ,width: '100%' }}> 
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
{position.map((u)=>(
       <Marker
          lat={u[1]}
          lng={u[2]}
          icon={image}
        />
        ))}
        <marker
        position={{lat:43,long:30}}
        />
      </GoogleMapReact>
    </div>

    <div>
>>>>>>> Stashed changes
 

   
    <div className="div-main">
    
      
    <h1>Earthquake Happened</h1>
    <p style={{textAlign:'center'}}> Number of earthqauake happend in Last years</p>
    <div className="country-selecter">
    <FormControl className={styles.formControl}>
      <NativeSelect   onChange={(e) => setFilter(e.target.value)}
          onClick={callback}
          id="Type"
          name="Type"
      
      >
         <option>Global</option>
          {countries.map((country) => <option  value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
    <div style={{ height: '76vh',marginBottom:'5%' ,width: '100%' }}> 
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
{position.map((u)=>(
       <AnyReactComponent
          lat={u[1]}
          lng={u[2]}
          text="My Marker"
        />
        ))}
      
      </GoogleMapReact>
    </div>
      <div >
      <p style={{textAlign:'center',marginTop:'15px',fontSize:'14px'}}>Number of Earthquake happen in {filter}</p>
     
      { barChart  }
      </div>
      <h1 style={{marginTop:'30px'}}>Earthquake Deaths</h1>
      
      <p style={{textAlign:'center',marginTop:'15px',fontSize:'14px'}}>Number of Deaths Due To Earthquake in {filter}</p>

      { lineChart}
      
      <div className="event-container-HeavyRain">
      {deathpie}
      </div>
      <div>
        <h1 style={{marginTop:'30px'}}>Injuried</h1>
        <div className="event-container-Blog">
      <p style={{textAlign:'center',marginTop:'15px',fontSize:'14px'}}>Number of inJuries Due To Earthquake in {filter}</p>

        { lineCharty}
        </div>
        <div className="event-container-HeavyRain">
        {injuriedpie}
        </div>
      </div>
      <div>
        <h1 style={{marginTop:'30px'}}>Affected </h1>
        <div className="event-container-Blog">
        <p style={{textAlign:'center',marginTop:'15px',fontSize:'14px'}}> Number of earthqauake happend in Last years</p>
        { lineCharts}
        </div>
        <div className="event-container-pie">
        {Affectedpie}
        </div>
      </div>
      <h4 style={{marginBottom:'20px'}}>To See data in Tabular form <a href="/Earthquakecsv">Click here</a></h4>
    </div>
    </>
  );
};
export default Event; 
