import React from 'react';
import './Cards.css';
<<<<<<< Updated upstream
import CardItem from './CardItems'
import Earthquakeinfo from '../Pages/Infopages/Earthquakeinfo';
=======
import CardItem from '../../components/Card/CardItems';
import Earthquakeinfo from '../../components/Pages/Infopages/Earthquakeinfo';
>>>>>>> Stashed changes
import Awareness from '../../components/Pages/Awareness';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these  DIsaster Awareness!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            path='/Earthquakeinfo'  
            
              src='images/img-11.jpg'
              text='Explore the Earthquake Information...'
              label='Earthquake'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
              target="_blank"
>>>>>>> Stashed changes
              
              
=======
              to={{pathname: '/Blog'}}
              path='/Earthquakeinfo'
>>>>>>> Stashed changes
            />
            <CardItem
              src='images/flood.jpg'
              text='Explore the Flood Information...'
              
<<<<<<< Updated upstream
              label='Flood'              
              path='/Floodinfo'
<<<<<<< Updated upstream
=======
              label='Flood'
              path='/Blog'
>>>>>>> Stashed changes
=======
              target="_blank"
>>>>>>> Stashed changes
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\fire.jpg'
              text='Explore the Tsaunami Information...'
<<<<<<< HEAD
              label='Fire'
=======
<<<<<<< Updated upstream
              label='Tsaunami/HeavyRain'
>>>>>>> e63c5648cc21a51177b196afa6ed9bf74465ed20
              path='/Heavyrain'
<<<<<<< Updated upstream
=======
              label='Tsaunami'
              path='/sign-up'

>>>>>>> Stashed changes
=======
              target="_blank"
>>>>>>> Stashed changes
            />
            <CardItem
              src='images/covid.jpg'
              text='Explore the COVID-19 Information...'
              label='COVID-19'
              path='/Covid19'
              target="_blank"
              
            />
            <CardItem
              src='images/sand.jpg'
              text='Explore the Sand-Storm Information...'
              label='Sand-Storm'
              path='/Fireinfo'
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;