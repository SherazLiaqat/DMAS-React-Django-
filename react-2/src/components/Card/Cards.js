import React from 'react';
import './Cards.css';
import CardItem from '../../components/Card/CardItems';
import Earthquakeinfo from '../../components/Pages/Infopages/Earthquakeinfo';
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

              target="_blank"

              
              

              to={{pathname: '/Blog'}}
              path='/Earthquakeinfo'

            />
            <CardItem
              src='images/flood.jpg'
              text='Explore the Flood Information...'
              

              label='Flood'              
              path='/Floodinfo'
              label='Flood'
              path='/Floodinfo'

              target="_blank"

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\fire.jpg'
              text='Explore the Tsaunami Information...'

              label='Fire'

              label='Tsaunami/HeavyRain'

              path='/Heavyrain'
              label='Tsaunami'
              path='/sign-up'


              target="_blank"

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