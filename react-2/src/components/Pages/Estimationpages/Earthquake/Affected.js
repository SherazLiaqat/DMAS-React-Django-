import React from 'react'

const Affected = () => {
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
        <div className='form-inputs'>
    <label className='form-label'>Magnitude</label>
    <input
      className='form-input'
      type='text'
      name='name'/>
             
  </div>
  <div className='form-inputs'>
    <label className='form-label'>Latitude</label>
    <input
      className='form-input'
      type='text'
      name='name'/>
             
  </div>
  <div className='form-inputs'>
    <label className='form-label'>Longitude</label>
    <input
      className='form-input'
      type='text'
      name='name'/>
             
  </div>
 <button className='DeathButton'> Estimate</button>
    </div>
    )
}

export default Affected