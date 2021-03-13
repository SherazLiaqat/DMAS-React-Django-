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
=======
              label='Flood'
              path='/Blog'
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
=======
              label='Tsaunami'
              path='/sign-up'

>>>>>>> Stashed changes
            />
            <CardItem
              src='images/covid.jpg'
              text='Explore the COVID-19 Information...'
              label='COVID-19'
              path='/Covid19'
              
            />
            <CardItem
              src='images/sand.jpg'
              text='Explore the Sand-Storm Information...'
              label='Sand-Storm'
              path='/Fireinfo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;