
import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import csv from 'd3';
let formfield =null;
class Blog extends React.Component {
  
  state = {
    users: null,
    country:null,
   
  }

 
  
  

   async componentDidMount() {
     
    const url =
    "http://127.0.0.1:8000/Earthquake_Events/";
   
  const response = await fetch(url);
  const data = await response.json();

console.log(this.props.val);
  this.setState({ users: data });
    
  }




 


    // in render 
    
    
    render() {
      
      
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      
    
    return (
      <div>
         <Map
                
                google={this.props.google}
                zoom={2}
                
              >
                  {this.users.map((city)=>(
                <Marker
                  onClick={this.onMarkerClick}
                  position={[city.positions,city.positions]}
                 
                />
                ))}
              </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4",
  })(Blog); 