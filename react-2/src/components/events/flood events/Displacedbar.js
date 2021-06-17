
import React from 'react';
import ReactDOM from 'react-dom';
import {defaults } from 'react-chartjs-2';
import Chart from 'chart.js';
import csv from 'd3';
defaults.global.tooltips.enabled = true
class Floodbar extends React.Component {
  
  state = {
    users: null,
   
  }

 
  
  chart = null;

   async componentDidMount() {
    const url =
    "http://127.0.0.1:8000/Flood_Events/";
  const response = await fetch(url);
  const data = await response.json();


  this.setState({ users: data });
    this.configureChart();
  }











  


  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
            label: "No. of Dispalce Due to Floods in Years",
            data: this.state.users.Displaced,
            
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            borderWidth: 1,
          },{
            label: "Line Dataset 2",
            data: this.state.users.Displaced,
            type: "line",
            borderColor: 'rgba(54,162,235,1)',
            fill: false,
            borderWidth: 2,
            backgroundColor:'black',
            // pointRadius: 0,
            //pointStyle: "circle",
          }],
        labels:this.state.users.Displaced_years
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };
 


    // in render 
    
    
    render() {
      
      
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      
    
    return (
      <div>
         
        <canvas
        height={500}
        width={1000}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}


export default Floodbar;  