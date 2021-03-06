import React from 'react'
import '../../App.css';
import './Herosection.css';
import {Button }from '../../components/Button/Button';
import homeimage from '../../components/images/img-1.jpg';
function Herosection() {
    return (
        <div className='hero-container'>
        <img className='image' src={homeimage}/>
        <h1>EMERGENCY  ASSISTANCE</h1>
        <p>What are you waiting for?</p>
        
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            ESTIMATION <i class="fas fa-lightbulb"/>
          </Button>
        </div>
      </div>
    );
}

export default Herosection
