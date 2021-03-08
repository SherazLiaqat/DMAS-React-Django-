

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Signup from './components/Pages/Authenticationpages/Loginpages/Signup';
import Awareness from './components/Pages/Awareness';
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import News from './components/Pages/News';
import Earthquakeinfo from './components/Pages/Infopages/Earthquakeinfo';
//import Flood from './components/Pages/Infopages/Floodinfo';
import Herosection from './components/Herosection/Herosection';
import Floodinfo from './components/Pages/Infopages/Floodinfo';

function App(){
  
  return (
    <>
    <Router>
      
      <Navbar />

      <Switch>
        
        <Route path='/'   component={Home} exact/>
        <Route path='/Awareness' component={Awareness} />
        <Route path='/Blog' component={Product} />
        <Route path='/News' component={News} />
        <Route path='/sign-up' component={Signup} />
     
      </Switch>
     
    
    <Switch>
    <Route path='/Earthquakeinfo'  component={Earthquakeinfo}exact />
    <Route path='/Floodinfo'  component={Floodinfo}exact />
    
    
    </Switch>
    <Footer/>
    </Router>

  </>
  );
} 

export default App;
