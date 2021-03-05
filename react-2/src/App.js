

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Signup from './components/Pages/Signup';
import Awareness from './components/Pages/Awareness';
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import News from './components/Pages/News';
import Herosection from './components/Herosection/Herosection';

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
        <Route path='/Events' component={Product} />
        <Route path='/Estimation' component={Product} />
        <Route path='/sign-up' component={Signup} />
       
        
      </Switch>
  
    </Router>
  </>
  );
} 

export default App;
