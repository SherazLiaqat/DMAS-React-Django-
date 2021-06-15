
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Blog extends React.Component {
  
  state = {
    users: null,
   
  }

 
  
  chart = null;

   async componentDidMount() {

     console.log(this.props.location.state.data)
     this.setState({users:this.props.location.state.data})
     this.configureChart(this.props.location.state.data);
  }











  


  configureChart = async data => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
            label: "Estimated Deaths and Displaced",
            data: [data.Deaths.value,data.Displaceds.value],
            
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            borderWidth: 1,
          },],
        labels:["Deaths","Injureds"]
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
        <h3>Deaths = {this.props.location.state.data.Deaths.Estimation}</h3>
         <h3>Displaced = {this.props.location.state.data.Displaceds.Estimation}</h3>
        <canvas
        height={10}
        width={10}
          ref={chart => {
            this.chart = chart;
          }}
        />
        <div>
        <section>
        
        <Map classNam="Map" google={this.props.google} zoom={1}>
         
         <Marker onClick={this.onMarkerClick}
                 position= {{lat: this.props.location.state.data.Location.Lat , lng: this.props.location.state.data.Location.Long }} />
        
         <InfoWindow onClose={this.onInfoWindowClose}>
             
         </InfoWindow>
        </Map>
        
                 </section>
                 </div>
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ('AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4')
})(Blog)