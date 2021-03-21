import React,{useState} from 'react'

const Injured = () => {
  const[amount,setamount]=useState(0);
    return (
        <div>
        <h1> This is Injured Estimtion page</h1>
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
 <button className='DeathButton'> Estimate</button>
    </div>
    )
}

export default Injured