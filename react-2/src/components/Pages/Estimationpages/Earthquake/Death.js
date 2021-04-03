import React,{useState} from 'react'

import './Death.css';

const Death = () => {
  
 
  const[amount,setamount]=useState();

  const[amount2,setamount2]=useState();
  const[amount3,setamount3]=useState();
  const toFixed=0.0;
    return (
      
      <>
      
        <div className='main'>
         
            <h1 >  This is Death Estimtion page</h1>
           
            <label className='Change'>Earthquake Type:</label>
            <select className='Changing'>
  <option >Ground Movement</option>
  <option >Tsaunami</option>
 
</select>
<label className='Change'>Choose a Continent:</label>
            <select className='Changing'>
  <option >Asia</option>
  <option >Europe</option>
  <option >America</option>
  <option >Africa</option>
  <option >Ocenia</option>
  
 
</select>

            <div className='form-inputs-Death'>
        <label className='form-label'>Magnitude:</label>
        <input className='box' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Magnitude..." />
        
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
            <h1 className='div-1'> Earthquake Awareness</h1>
            <ul className='Death-Div'>
            
            
            <h1> Longitude</h1>
            <h1> Latitude</h1>
            </ul>
          </div>
        </>
    )
}

export default Death
