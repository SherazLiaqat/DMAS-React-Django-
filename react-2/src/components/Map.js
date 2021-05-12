import React, { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class MainMap extends Component {
  
  

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>
         
      </InfoWindow>
    </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4")
})(MainMap)