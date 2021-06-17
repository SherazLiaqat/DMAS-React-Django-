import React, { useState, useEffect } from "react";
import Deathbar from "./Earthquake events/Deathbar";
import Deathdpie from "./Earthquake events/Deathpie";

import Affectedbar from "./Earthquake events/Affectedbar";
import Affectedpie from "./Earthquake events/Affectedpie";
import Injuredbar from "./Earthquake events/Injuredbar";
import Injuredpie from "./Earthquake events/Injuredpie";
import Utils from "util";
import axios from "axios";
import "./Event.css";
import { PostAddSharp } from "@material-ui/icons";

export const Event = () => {
  
  return (
    <div className="div-main">
      <h1>Earthquake deaths</h1>
      <div className="event-container-Blog">
        <Deathbar  />
      </div>
      <div className="event-container-HeavyRain">
        <Deathdpie />
      </div>
      <div>
        <h1>Injuried</h1>
        <div className="event-container-Blog">
          <Injuredbar />
        </div>
        <div className="event-container-HeavyRain">
          <Injuredpie />
        </div>
      </div>
      <div>
        <h1>Affected </h1>
        <div className="event-container-Blog">
          <Affectedbar />
        </div>
        <div className="event-container-HeavyRain">
          <Affectedpie />
        </div>
      </div>
    </div>
  );
};
export default Event;
