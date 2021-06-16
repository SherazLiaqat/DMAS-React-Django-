import React, { useState,useEffect,row,Component } from 'react'
import { Pie, defaults,tooltips } from 'react-chartjs-2';
import "./Chart.css";
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import {csv} from 'd3';
defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

class BarChart  extends React.Component {
  state = {
    users: null,
   
  }

 
  
  chart = null;

   async componentDidMount() {
    const url =
    "http://127.0.0.1:8000/Earthquake_Events/";
  const response = await fetch(url);
  const data = await response.json();


  this.setState({ users: data });
    this.configureChart();
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "pie",
      data: {
        datasets: [
          {
            data: this.state.users.dead_count,
            backgroundColor: [
                      '#1a8604',
                      '#0839f0',
                      '#e9f308',
                      '#fe7104',
                      '#f61212',
            ]}],
            
       labels: ['Low', 'Medium', 'High', 'Very High', 'Extreme'],
      },
    });
  };
 
  render() {
    return (
      <div>
          <tooltips/>
        <canvas
        height={400}
        width={400}
          ref={chart => {
            this.chart = chart;
          }}
         
        />
      </div>
    );
  }
}


export default BarChart