import axios from "axios";
import React, { useState } from "react";
import Result from "../../Chart/Result";
import { Link,useHistory } from 'react-router-dom';

import "./Death.css";


 
const Death = () => {
  
  
    /*  const [amount, setamount] = useState();

  const [amount2, setamount2] = useState();
  const [amount3, setamount3] = useState();
  const toFixed = 0.0;*/
  const [val,setval]=useState("");
  const [Magnitude,setMagnitude]=useState("");
 const [Latitude,setLatitude]=useState("");
 const [Longitude,setLongitude]=useState("");
 const [Type,setType]=useState("");
 const [Continent,setContinent]=useState("");
 const [users,setusers]=useState("");
 const [count,setcount]=useState("");
 
 
 
 
 const contactinfo = async () => {
  let formfield = new FormData();
  formfield.append("Continent",Continent );
  formfield.append("Earthquake_Type", Type);
  formfield.append("Magnitude", Magnitude);
  formfield.append("Latitude", Latitude);
  formfield.append("Longitude", Longitude);

 await axios({
  method: "POST",
  url: "http://127.0.0.1:8000/earthquakeEstimation/",
  data: formfield,
}).then((response) => {
  console.log(response.data);
  setusers(response.data);
  
  
});
}
const history = useHistory();
const DelayReturnToHomePage = (e) => {

   setTimeout(() => {
      var pageType = {
          pathname: '/DeathResult',
          state: {
            data:users
          }
        }
        history.push(pageType); 
 
 
   }, 1700)
 }


  return (
    <>
      <div className="main">
        <h1> Estimate Death's Due to Earthquake Instantly</h1>

        <label className="Change">Earthquake Type:</label>
        <select
          className="Changing"
          id="Type"
          name="Type"
          value={Type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Ground_Movement</option>
          <option>Tsaunami</option>
        </select>
        <label className="Change">Choose a Continent:</label>
        <select
          className="Changing"
          id="Continent"
          name="Continent"
          value={Continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option>Asia</option>
          <option>Europe</option>
          <option>America</option>
          <option>Africa</option>
          <option>Ocenia</option>
        </select>
        
          <div className="form-inputs-Death">
            <label className="form-label">Magnitude:</label>
            <input
              className="Box"
              type="number"
              id="Magnitude"
              name="Magnitude"
              value={Magnitude}
              onChange={(e) => setMagnitude(e.target.value)}
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
              id="Latitude"
              name="Latitude"
              value={Latitude}
              onChange={(e) => setLatitude(e.target.value)}
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
              id="Longitude"
              name="Longitude"
              value={Longitude}
              onChange={(e) => setLongitude(e.target.value)}
              
              /* value={amount3}
            onChange={(event) => setamount3(event.target.value)}*/
              placeholder="Enter Longitude..."
            />
          </div>
          
          <button className="DeathButton-Earthquake" onClick={contactinfo }> Estimate</button>
          <button className="DeathButton" onClick={DelayReturnToHomePage}>Result</button>
       
      </div>
      <div>
    
    <div>
      
        <p>Damage:{users.Estimation}</p>
        <p>Latitude:{users.Lat}</p>
        <p>longitude:{users.Long}</p>
        <p> System Estimate That  People Get Injured Due to Earthquake.</p>
        <Result />
        </div>
      
    
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
