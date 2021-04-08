import React from 'react'
//import '../../App.css';
import './Herosection.css';
import {  IoMdBulb} from 'react-icons/io';
import homeimage from '../../components/images/img-12.jpg';
function Herosection() {
    return (
        <div className='hero-container'>
        <img className='image' src={homeimage}/>
        <h1>EMERGENCY  ASSISTANCE</h1>
        <p>What are you waiting for?</p>
        
        <div className='hero-btns'>
        <button className='Button-home'> GET STARTED</button>
         
          <button className='Button-home2'>ESTIMATION<IoMdBulb/> </button>
         
        </div>
      </div>
    );
}

export default Herosection
