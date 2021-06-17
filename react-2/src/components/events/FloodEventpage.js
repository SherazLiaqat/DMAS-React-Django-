import React from 'react'
import './Event.css';
import Displacedpie from './flood events/Displacedpie';
import Displacedbar from './flood events/Displacedbar';
import Deadbar from './flood events/Displacedbar';
import Deadpie from './flood events/Deadpie';
const FloodEventpage = () => {
    return (
        <div>
            <div className="div-main">
      <h1>Flood displaced</h1>
      <div className="event-container-Blog">
        <Displacedbar />
      </div>
      <div className="event-container-HeavyRain">
        <Displacedpie  />
      </div>
      <h1>Flood Deaths</h1>
      <div className="event-container-Blog">
        <Deadbar  />
      </div>
      <div className="event-container-HeavyRain">
        <Deadpie  />
      </div>
     
        </div>
        </div>
    )
}

export default FloodEventpage

