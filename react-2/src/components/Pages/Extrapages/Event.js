import React,{useState,useEffect} from 'react'
import Blog from '../../Pages/Blog';
import Heavyrain from '../Infopages/Heavyrain';
import axios from 'axios';
import './Event.css';
import { PostAddSharp } from '@material-ui/icons';

export const Event = () => {

    return (
        <div className="div-main">
          
            
            <div  className='event-container-Blog'>
            < Blog />
            </div>
            <div className='event-container-HeavyRain'>
            <Heavyrain/>
            </div>
            <div  className='event-container-Blog'>
            < Blog/>
            </div>
            <div className='event-container-HeavyRain'>
            <Heavyrain/>
            </div>
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
