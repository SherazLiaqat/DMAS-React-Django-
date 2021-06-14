/*import React, { useState,Component } from "react";

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import axios from "axios";


      fetchData()=async=> {
        const [users,setusers]=useState("");
        try {
          const result = await axios.get("http://127.0.0.1:8000/Earthquake_Injured/")
          console.log(result.data);
          setusers(result.data);
        } catch (error) {
          console.error(error);
        }
    }

function Map(){

  return(
    <GoogleMap 
    defaultZoom={10}
    defaultCenter={{lat: parseFloat(users.Lat,5) , lng: parseFloat(users.Long,5) }}>
    <Marker
    position={{lat: parseFloat(users.Lat,5) , lng: parseFloat(users.Long,5) }}
    />
    </GoogleMap>
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
}*/