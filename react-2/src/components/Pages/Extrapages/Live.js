import React from 'react'
import Cards from '../../Card/Cards'
import './Live.css';
import CardItem from '../../Card/CardItems';
const Live = () => {
    return (
        <div className='live'>
            <h1 >Explore The Live Information About Disaster</h1><br/><br/>
            
            <ul className='cards__items'>
            <CardItem
              src='images\Floodlive.jpg'
              text='Explore the Flood Information...'

              label='Flood'

              

              path='/FloodLive'
             

              target="_blank"

            />
            <CardItem
              src='images/corona.jpg'
              text='Explore the COVID-19 Information...'
              label='COVID-19'
              path='/CovidLive'
              target="_blank"
              
            />
            <CardItem
              src='images/Live.jpg'
              text='Explore the Earthquake Information...'
              label='Earthquake'
              path='/EarthquakeLive'
              target="_blank"
            />
          </ul>
        </div>
    )
}

export default Live
