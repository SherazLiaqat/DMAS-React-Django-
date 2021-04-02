

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Footer from './components/Footer/Footer';
import Signup from './components/Pages/Authenticationpages/Signuppages/Signup';
import Awareness from './components/Pages/Awareness';
import Home from './components/Pages/Home';
import Product from './components/Pages/Blog';
import News from './components/Pages/News';
import Earthquakeinfo from './components/Pages/Infopages/Earthquakeinfo';
//import Flood from './components/Pages/Infopages/Floodinfo';
import Herosection from './components/Herosection/Herosection';
import Floodinfo from './components/Pages/Infopages/Floodinfo';
import Login from './components/Pages/Authenticationpages/Loginpages/Login';
import Fireinfo from './components/Pages/Infopages/Fireinfo';
import Covid19 from './components/Pages/Infopages/Covid-19info';
import Heavyraininfo from './components/Pages/Infopages/Heavyrain';
import Carditem from './components/Card/CardItems';
import Blog from './components/Pages/Blog';
//import Fireinfo from './components/Pages/Infopages/Fireinfo';
import About from './components/Pages/Extrapages/About';
import Contact from './components/Pages/Extrapages/Contact';
import Estimation from './components/Pages/Extrapages/Estimation';
import Death from './components/Pages/Estimationpages/Earthquake/Death';
import Affected from './components/Pages/Estimationpages/Earthquake/Affected';
import Injured from './components/Pages/Estimationpages/Earthquake/Injured';
import Locust from './components/Pages/Infopages/Locusts';
import Event from './components/Pages/Extrapages/Event';
import Api from './components/Pages/Api/Api';
//import NewsApi from './components/Pages/Api/NewsApi/NewsApi';
import am4core from './components/Pages/Api/NewsApi/NewsApi';
import Live from './components/Pages/Extrapages/Live';
import CovidLive from './components/Pages/Extrapages/LiveEvents/CovidlLive/CovidLive';
import FloodLive from './components/Pages/Extrapages/FloodLive';
import EarthquakeLive from './components/Pages/Extrapages/LiveEvents/EarthquakeLive/EarthquakeLive';
import MyBlog from './components/Pages/Extrapages/Blog';
function App(){
  
  return (
    <>
    <Router>
      
      <Navbar />

      <Switch>
        
        <Route path='/'   component={Home} exact/>
        <Route path='/Awareness' component={Awareness} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Blog' component={Blog} />
        <Route path='/News' component={News} />
        <Route path='/Death' component={Death} />
        <Route path='/Affected' component={Affected} />
        <Route path='/Injured' component={Injured} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/Login' component={Login} />
        <Route path='/Event' component={Event} />
        <Route path='/Live' component={Live} />
     
      </Switch>
     
      
    <Switch>
    <Route path='/Earthquakeinfo'  component={Earthquakeinfo}exact />
    <Route path='/Floodinfo'  component={Floodinfo}exact />
    <Route path='/Fireinfo'  component={Fireinfo}exact />
    <Route path='/Covid19'  component={Covid19}exact />
    <Route path='/Heavyrain'  component={Heavyraininfo}exact />
    <Route path='/Fireinfo'  component={Fireinfo} />
    <Route path='/About'  component={About}exact />
    <Route path='/Locust'  component={Locust}exact />
    <Route path='/Estimation'  component={Estimation}exact />
    <Route path='/Api'  component={Api}exact />
    <Route path='/CovidLive'  component={CovidLive}exact />
    <Route path='/FloodLive'  component={FloodLive}exact />
    <Route path='/EarthquakeLive'  component={EarthquakeLive}exact />
    <Route path='/MyBlog'  component={MyBlog}exact />
    
    

    
    
    </Switch>
    <Footer/>
    
    </Router>

  </>
  );
} 

export default App;
