import React from 'react'
import Blog from '../../Pages/Blog';
import Heavyrain from '../Infopages/Heavyrain';
import './Event.css';
export const Event = () => {
    return (
        <div className="div-main">
          
            <div  className='event-container-Blog'>
            < Blog/>
            </div>
            <div className='event-container-HeavyRain'>
            <Heavyrain/>
            </div>
        </div>
    )
}
export default Event;
