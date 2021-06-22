
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import csv from 'd3';
let formfield =null;
class Blog extends React.Component {
  
  state = {
    users: null,
    country:null,
   
  }

 
  
  chart = null;

   async componentDidMount() {
     
    const url =
    "http://127.0.0.1:8000/Earthquake_Events/";
   
  const response = await fetch(url);
  const data = await response.json();

console.log(this.props.val);
  this.setState({ users: data });
    this.configureChart();
  }




  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
            label: "No. of Earthquake in Years",
            data: this.state.users.data,
            
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            borderWidth: 1,
          },{
            label: "No. of Earthquake in Years",
            data: this.state.users.data,
            type: "line",
            borderColor: 'rgba(54,162,235,1)',
            fill: false,
            borderWidth: 2,
            backgroundColor:'black',
            // pointRadius: 0,
            //pointStyle: "circle",
          }],
        labels:this.state.users.lebel
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
         {this.props.val}
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