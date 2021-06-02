import React, { useState } from "react";
import "./Dead.css";
import axios from 'axios';
const Dead = () => {
  const [Severity, setSeverity] = useState("");
  const [AffectedArea, setAffectedArea] = useState("");
  //const [Latitude,setLatitude]=useState("");
  const [Magnitude, setMagnitude] = useState("");
  const [CentriodsX, setCentriodsX] = useState("");
  const [CentriodsY, setCentriodsY] = useState("");
  const Floodinfo = async () => {
    let formfield = new FormData();
    formfield.append("Severity", Severity);
    formfield.append("Affected Area", AffectedArea);
    formfield.append("Magnitude", Magnitude);
    formfield.append("Centroid X", CentriodsX);
    formfield.append("Centroid Y", CentriodsY);
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/Flood_Displaced/",
      data: formfield,
    }).then((response) => {
      console.log(response.data);
    });
  };

 /* const [amount, setamount] = useState();
  const [amount1, setamount1] = useState();
  const [amount4, setamount4] = useState();
  const [amount2, setamount2] = useState();
  const [amount3, setamount3] = useState();
  const toFixed = 0.0;*/
  return (
    <>
      <div className="main">
        <h1 >
         
          Estimate The Deaths's Due to Flood
         
        </h1>

        <label className="Change">Severity:</label>
        <select
          className="Changing"
          value={Severity}
          name="Severity"
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option>1</option>
          <option>1.5</option>
          <option>2</option>
        </select>

        <div className="form-inputs-Death">
          <label className="form-label">Affected Area:</label>
          <input
            className="box"
            type="number"
            value={AffectedArea}
            name="AffectedArea"
            onChange={(e) => setAffectedArea(e.target.value)}
           /* value={amount}
            onChange={(event) => setamount(event.target.value)}*/
            placeholder="Enter Affected Area..."
          />
        </div>

        <div className="form-inputs-Death">
          <label className="form-label">Magnitude:</label>
          <input
            className="box2"
            type="number"
            name="Magnitude"
            value={Magnitude}
            onChange={(e) => setMagnitude(e.target.value)}
           /* value={amount1}
            onChange={(event) => setamount1(event.target.value)}*/
            placeholder="Enter Magnitude..."
          />
        </div>

     {/*  <div className="form-inputs-Death">
          <label className="form-label">Latitude:</label>
          <input
            className="box4"
            type="number"
            value={amount2}
            onChange={(event) => setamount2(event.target.value)}
            placeholder="Enter Latitude..."
          />
        </div>*/} 
        <div className="form-inputs-Death">
          <label className="form-label">Centriods X:</label>
          <input
            className="box3"
            type="number"
            name="CentriodsX"
            value={CentriodsX}
            onChange={(e) => setCentriodsX(e.target.value)}
            /*value={amount3}
            onChange={(event) => setamount3(event.target.value)}*/
            placeholder="Enter Centroid X..."
          />
        </div>
        <div className="form-inputs-Death">
          <label className="form-label">Centriods Y:</label>
          <input
            className="box3"
            type="number"
            name="CentriodsY"
            value={CentriodsY}
            onChange={(e) => setCentriodsY(e.target.value)}
           /* value={amount4}
            onChange={(event) => setamount4(event.target.value)}*/
            placeholder="Enter Centroid Y..."
          />
        </div>
        <button className="DeathButton" onClick={Floodinfo}> Estimate</button>
      
        <br />
        <br />
        <br />
      </div>
      {/*   <div className='side-div'>
              <h className='div-1'> Earthquake Awareness</h>
              <h1> Magnitude</h1>
              <h1> Longitude</h1>
              <h1> Latitude</h1>
            </div>*/}
    </>
  );
};
export default Dead;
