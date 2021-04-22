import React,{useState} from 'react'

const Affectedpeopel = () => {
    const[amount,setamount]=useState();

    const[amount2,setamount2]=useState();
    const[amount3,setamount3]=useState();
  
      return (
        <>
          <div className='main'>
           
              <h1 >   Estimate The Result of Affected Displacement Due to Flood<br/> And help them to Provide Food Shelter Etc</h1>
             
              <label className='Change'>Earthquake Type:</label>
              <select className='Changing'>
    <option >Ground Movement</option>
    <option >Tsaunami</option>
   
  </select>
  <label className='Change'>Choose a Continent:</label>
              <select className='Changing'>
    <option >Asia</option>
    <option >Europe</option>
    <option value="grapefruit">America</option>
    <option value="lime">Africa</option>
    <option value="grapefruit">Ocenia</option>
    
   
  </select>
  
              <div className='form-inputs-Death'>
          <label className='form-label'>Magnitude:</label>
          <input className='Box' type="number"  value={amount} onChange={(event)=>setamount(event.target.value)} placeholder="Enter Magnitude..." />
          
        </div>
       
        <div className='form-inputs-Death'>
          <label className='form-label'>Latitude:</label>
          <input className='Box2' type="number"  value={amount2} onChange={(event)=>setamount2(event.target.value)} placeholder="Enter Latitude..." />
        
                   
        </div>
        <div className='form-inputs-Death'>
          <label className='form-label'>Longitude:</label>
          <input className='Box3' type="number"  value={amount3} onChange={(event)=>setamount3(event.target.value)} placeholder="Enter Longitude..." />
         
        </div>
        <a className='DeathButton-Earthquake' href='/DisplacedResult'  > Estimate</a><br/><br/><br/>
   
          </div>
       {/*  <div className='side-div'>
              <h className='div-1'> Earthquake Awareness</h>
              <h1> Magnitude</h1>
              <h1> Longitude</h1>
              <h1> Latitude</h1>
            </div>*/}  
          </>
      )
  }
export default Affectedpeopel