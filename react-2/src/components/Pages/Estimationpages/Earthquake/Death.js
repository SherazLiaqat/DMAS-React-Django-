import React,{useState} from 'react'

import './Death.css';

const Death = () => {
  
  const[amount,setamount]=useState(0);

  const[amount2,setamount2]=useState(0);
  const[amount3,setamount3]=useState(0);
const toFixed=0.0;
    return (
      <>
        <div className='main'>
         
            <h1 >  This is Death Estimtion page</h1>
           
            <label className='Change'>Earthquake Type:</label>
            <select className='Changing'>
  <option value="grapefruit">Ground Movement</option>
  <option value="lime">Tsaunami</option>
 
</select>
<label className='Change'>Choose a Continent:</label>
            <select className='Changing'>
  <option value="grapefruit">Asia</option>
  <option value="lime">Europe</option>
  <option value="grapefruit">America</option>
  <option value="lime">Africa</option>
  <option value="grapefruit">Ocenia</option>
  
 
</select>

            <div className='form-inputs-Death'>
        <label className='form-label'>Magnitude:</label>
        <input className='box' type="number" value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Magnitude..." />
        
      </div>
     
      <div className='form-inputs-Death'>
        <label className='form-label'>Latitude:</label>
        <input className='box2' type="number"  value={amount2} onChange={(event)=>setamount2(event.target.value)} placeholder="Enter Latitude..." />
      
                 
      </div>
      <div className='form-inputs-Death'>
        <label className='form-label'>Longitude:</label>
        <input className='box3' type="number"  value={amount3} onChange={(event)=>setamount3(event.target.value)} placeholder="Enter Longitude..." />
       
      </div>
     <button className='DeathButton'> Estimate</button>
        </div>
        <div className='side-div'>
            <h className='div-1'> Earthquake Awareness</h>
            <h1> Magnitude</h1>
            <h1> Longitude</h1>
            <h1> Latitude</h1>
          </div>
        </>
    )
}

export default Death
