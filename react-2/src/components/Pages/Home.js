import React from 'react';

import Herosection from '../Herosection/Herosection';
import About from './Extrapages/About';
import Awareness from './Awareness';
//import '../../App.css';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
      <>
       
        <Herosection/>
        <Awareness/>
        <About/>
        
        </>
    );  
}

export default Home
