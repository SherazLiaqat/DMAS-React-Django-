import React, { Component } from "react";

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";



function Map(){
  return(
    <GoogleMap 
    defaultZoom={10}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    />
  )
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MainMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}