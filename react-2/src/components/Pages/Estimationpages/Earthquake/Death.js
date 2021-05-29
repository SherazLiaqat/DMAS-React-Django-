import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Death.css";

const Death = () => {
  {
    /*  const [amount, setamount] = useState();

  const [amount2, setamount2] = useState();
  const [amount3, setamount3] = useState();
  const toFixed = 0.0;*/
  }
  const [Magnitude,setMagnitude]=useState("");
 const [Latitude,setLatitude]=useState("");
 const [Longitude,setLongitude]=useState("");
 const [Type,setType]=useState("");
 const [Continent,setContinent]=useState("");
 function saveData()
 {
   console.warn(
     {Magnitude,Latitude,Longitude,Type,Continent}
   );
   let data={Magnitude,Latitude,Longitude,Type,Continent}
 // console.warn(data);
   fetch("http://127.0.0.1:8000/Earthquake_Deaths/", {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify(data)
   }).then((resp)=>{
     // console.warn("resp",resp);;
     resp.json().then((result)=>{
       console.warn("result",result)
     })
    })
 }
  return (
    <>
      <div className="main">
        <h1> Estimate Death's Due to Earthquake Instantly</h1>

        <label className="Change">Earthquake Type:</label>
        <select
          className="Changing"
          onChange={(e) => setType(e.target.value)}
          id="Type"
          value={Type}
        >
          <option>Ground Movement</option>
          <option>Tsaunami</option>
        </select>
        <label className="Change">Choose a Continent:</label>
        <select
          className="Changing"
          onChange={(e) => {setContinent(e.target.value)}}
          id="Continent"
          value={Continent}
        >
          <option>Asia</option>
          <option>Europe</option>
          <option>America</option>
          <option>Africa</option>
          <option>Ocenia</option>
        </select>
        <form >
          <div className="form-inputs-Death">
            <label className="form-label">Magnitude:</label>
            <input
              className="Box"
              type="number"
              onChange={(e) => {setMagnitude(e.target.value)}}
              value={Magnitude}
              id="Magnitude"
              /*   value={amount}
            onChange={(event) => setamount(event.target.value)}*/
              placeholder="Enter Magnitude..."
            />
          </div>

          <div className="form-inputs-Death">
            <label className="form-label">Latitude:</label>
            <input
              className="Box2"
              type="number"
              onChange={(e) => {setLatitude(e.target.value)}}
              value={Latitude}
              id="Latitude"
              /*  value={amount2}
            onChange={(event) => setamount2(event.target.value)}*/
              placeholder="Enter Latitude..."
            />
          </div>
          <div className="form-inputs-Death">
            <label className="form-label">Longitude:</label>
            <input
              className="Box3"
              type="number"
              onChange={(e) => {setLongitude(e.target.value)}}
              value={Longitude}
              id="Longitude"
              /* value={amount3}
            onChange={(event) => setamount3(event.target.value)}*/
              placeholder="Enter Longitude..."
            />
          </div>
          <button className="DeathButton-Earthquake" onClick={saveData}> Estimate</button>
        </form>
       
      </div>
      {/*  <div className='side-div'>
            <h1 className='div-1'> Earthquake Awareness</h1>
            <ul className='Death-Div'>
            
            
            <h1> Longitude</h1>
            <h1> Latitude</h1>
            </ul>
          </div>*/}
    </>
  );
};

export default Death;
