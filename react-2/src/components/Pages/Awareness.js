import React from 'react';
//import './App.css';
import Card from '../Card/Cards';
import Footer from '../Footer/Footer'
import Earthquakeinfo from './Infopages/Earthquakeinfo'
import Flood from '../Pages/Infopages/Floodinfo';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function Awareness() {
  return (
    <>
    <Router>
        
    <Switch>
        <Route path='/Earthquakeinfo'  component={Earthquakeinfo} />
        
        <Route path='/Floodinfo' component={Flood} />
       
       
        </Switch>
      
        <Card/>
      <Footer/>
        </Router>
      
      
      </>
  );  
}

export default Awareness