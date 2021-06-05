import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import csv from 'd3';
class Result extends React.Component {
 



 
 chart = null;

  async componentDidMount() {
  
   this.configureChart();
 }

 configureChart = () => {
   const chartCanvas = ReactDOM.findDOMNode(this.chart);

   const mixedChart = new Chart(chartCanvas, {
     type: "bar",
     data: {
       datasets: [
         {
           label: "Bar Dataset",
           data: this.state.users.data,
           
           type: "bar",
           backgroundColor: "#DE924B"
         },
        
         {
           label: "Line Dataset 2",
           data: this.state.users.data,
           type: "line",
           backgroundColor:'black',
           fill: "empty",
           // pointRadius: 0,
           pointStyle: "circle",
          
         }
       ],
       labels:[
        "Jan"
        
      ]
     },
     options: {
       elements: {
         line: {
           tension: 0.000001
         }
       },
       tooltips: {
         displayColors: false
       },
       legend: {
         display: true,
         position: "bottom"
       },
       scales: {
         yAxes: [
           {
             display: true,
             // stacked: true,
             ticks: {
               beginAtZero: true
             }
           }
         ],
         xAxes: [
           {
             display: true,
             stacked: true,
             barThickness: 25,
             ticks: {
               beginAtZero: true
             }
           }
         ]
       }
     }
   });
 };

 render() {
   return (
     <div>
        
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


export default Result;  
 /*import React,{Component} from 'react';
 import ReactDOM from 'react-dom';
 import Chart from 'chart.js';
 
 
class Result extends React.Component() {
  state = {
    users: null,
   
  }
  chart = null;

  async componentDidMount() {
    this.configureChart();
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart,);

    const mixedChart = new Chart(chartCanvas, {
        type: "horizontalBar",
      data: {
        datasets: [
        
          {
            label: "Deaths",
            data: [7],
            pointHoverRadius: [5],
            
            backgroundColor:'brown',
            fill: "empty",
            // pointRadius: 0,
            pointStyle: "circle",
           
          }
        ],
        labels: [
          "Jan"
          
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0.178901
          }
        },
        tooltips: {
          displayColors: false
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              display: true,
              // stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              display: true,
              stacked: true,
              barThickness: 25,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };
 
  render() {
    return (
      <div>
         
        <canvas
        height={100}
        width={800}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}


export default Result;  */