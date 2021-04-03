import React,{useState} from 'react'

const Dead = () => {
    const[amount,setamount]=useState();

    const[amount2,setamount2]=useState();
    const[amount3,setamount3]=useState();
  const toFixed=0.0;
      return (
        <>
          <div className='main'>
           
              <h1 >  This is Death Estimtion page</h1>
             
              <label className='Change'>Severity:</label>
              <select className='Changing'>
    <option value="grapefruit">1</option>
    <option value="lime">1.5</option>
    <option value="lime">2</option>
   
  </select>
  
  <div className='form-inputs-Death'>
          <label className='form-label'>Affected Area:</label>
          <input className='box' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Affected Area..." />
          
        </div>
  
              <div className='form-inputs-Death'>
          <label className='form-label'>Magnitude:</label>
          <input className='box' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Magnitude..." />
          
        </div>
       
        <div className='form-inputs-Death'>
          <label className='form-label'>Latitude:</label>
          <input className='box2' type="number"  value={amount2} onChange={(event)=>setamount2(event.target.value)} placeholder="Enter Latitude..." />
        
                   
        </div>
        <div className='form-inputs-Death'>
          <label className='form-label'>Centriods X:</label>
          <input className='box3' type="number"  value={amount3} onChange={(event)=>setamount3(event.target.value)} placeholder="Enter Centroid X..." />
         
        </div>
        <div className='form-inputs-Death'>
          <label className='form-label'>Centriods Y:</label>
          <input className='box3' type="number"  value={amount3} onChange={(event)=>setamount3(event.target.value)} placeholder="Enter Centroid Y..." />
         
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
export default Dead