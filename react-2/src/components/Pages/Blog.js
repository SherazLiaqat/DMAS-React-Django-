 import React from 'react';
 import ReactDOM from 'react-dom';
 import Chart from 'chart.js';
 import csv from 'd3';
class Blog extends React.Component {
  chart = null;

  componentDidMount() {
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
            data: [75, 53, 75, 65, 80, 65, 80],
            
            type: "bar",
            backgroundColor: "#DE924B"
          },
         
          {
            label: "Line Dataset 2",
            data: [75, 53, 75, 65, 100, 60, 80, 50, 75, 55, 80, 65, 80],
            pointHoverRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            type: "line",
            backgroundColor:'black',
            fill: "empty",
            // pointRadius: 0,
            pointStyle: "circle",
           
          }
        ],
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
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
        height={500}
        width={500}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}


export default Blog;  