import React,{Component} from 'react';
import styles from './EarthquakeLive.module.css';

import image from '../../../../images/image.jpg';
//import {fetchData} from './CovidApi/Index';

class EarthquakeLive extends React.Component {
  
    render(){
        
    return (
        <div className={styles.container}>
            <img className={styles.image}src={image} alt='Earthquake-Live-info'/>
            <h3>Check-Out These Covid-19 Live Information!</h3>
          
        </div>
    )
}}

export default EarthquakeLive