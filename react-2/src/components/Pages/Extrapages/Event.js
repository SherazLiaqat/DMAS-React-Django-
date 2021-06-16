import React, { useState, useEffect } from "react";
import Blog from "../../Pages/Blog";
import Heavyrain from "../Infopages/Heavyrain";
import Affectedbar from "../../events/Earthquake events/Affectedbar";
import Affectedpie from "../../events/Earthquake events/Affectedpie";
import Injuredbar from "../../events/Earthquake events/Injuredbar";
import Injuredpie from "../../events/Earthquake events/Injuredpie";
import Utils from "util";
import axios from "axios";
import "./Event.css";
import { PostAddSharp } from "@material-ui/icons";

export const Event = () => {
  return (
    <div className="div-main">
      <h1>Earthquake deaths</h1>
      <div className="event-container-Blog">
        <Blog />
      </div>
      <div className="event-container-HeavyRain">
        <Heavyrain />
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
