import React from 'react';
import './Cards.css';
import CardItem from './CardItems'
import Earthquakeinfo from '../Pages/Infopages/Earthquakeinfo';
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
            
              src='images/img-1.jpg'
              text='Explore the Earthquake Information...'
              label='Earthquake'
              
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore the Flood Information...'
              
              label='Flood'              
              path='/Floodinfo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\img-5.jpg'
              text='Explore the Tsaunami Information...'
              label='Tsaunami/HeavyRain'
              path='/Heavyrain'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explore the COVID-19 Information...'
              label='COVID-19'
              path='/Covid19'
              
            />
            <CardItem
              src='images/img-8.jpg'
              text='Explore the Sand-Storm Information...'
              label='Sand-Storm'
              path= '/Home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;