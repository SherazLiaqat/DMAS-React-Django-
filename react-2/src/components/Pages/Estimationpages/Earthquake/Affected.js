import React,{useState} from 'react'
import './Death.css';
const Affected = () => {
  const[amount,setamount]=useState();

    return (
        <div>
        <h1> This is Affected Estimtion page</h1>
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
        <input className='box' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Magnitude..." />
        
      </div>
     
      <div className='form-inputs-Death'>
        <label className='form-label'>Latitude:</label>
        <input className='box2' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Latitude..." />
      
                 
      </div>
      <div className='form-inputs-Death'>
        <label className='form-label'>Longitude:</label>
        <input className='box3' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Longitude..." />
       
      </div>
      <a className='DeathButton' href='/AffectedResult'  > Estimate</a><br/><br/><br/>
 
    </div>
    )
}

export default Affected