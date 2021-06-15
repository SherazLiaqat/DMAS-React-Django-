
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import csv from 'd3';
class Blog extends React.Component {
  
  state = {
    users: null,
   
  }

 
  
  chart = null;

   async componentDidMount() {

    this.configureChart();
    console.log(this.props.location.state.data)
    this.setState({users:this.props.location.state.data})
  }











  


  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
            label: "No. of Earthquakes in Years",
            data: [14],
            
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            borderWidth: 1,
          },],
        labels:["sunday"]
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
         {this.state.users.Deaths.Estimation}
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


export default Blog;  