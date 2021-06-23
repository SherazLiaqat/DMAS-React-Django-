
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import csv from 'd3';
let formfield =null;
let methods=null;

class Blog extends React.Component {
  
  state = {
    users: null,
    country:null,
   
  }

 
  
  chart = null;

   async componentDidMount() {
     
    /*const requestOptions = {
      
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: this.props.val })
  };
  const response = await fetch('http://127.0.0.1:8000/Earthquake_Events/', requestOptions);
  const data = await response.json();
  this.setState({ users: data });*/
  console.log(this.props.deaths);
  this.configureChart();
  }



  configureChart = () => {
    
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
            label: "No. of Death in Years",
            data: this.props.deaths,
            
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            borderWidth: 1,
          },{
            label: "No. of Death in Years",
            data: this.props.deaths,
            type: "line",
            borderColor: 'rgba(54,162,235,1)',
            fill: false,
            borderWidth: 2,
            backgroundColor:'black',
            // pointRadius: 0,
            //pointStyle: "circle",
          }],
        labels:this.props.deaths_years
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


export default Blog;  