
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import CardComponent from '../../Pages/Extrapages/LiveEvents/CovidlLive/Card/CardComponent';
//import CardItem from '../../Card/CardItems';
import { defaults } from 'react-chartjs-2';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Typography, Grid } from '@material-ui/core';
defaults.global.tooltips.enabled = true
class Blog extends React.Component {

  state = {
    users: null,

  }



  chart = null;

  async componentDidMount() {

    console.log(this.props.location.state.data)
    this.setState({ users: this.props.location.state.data })
    this.configureChart(this.props.location.state.data);
  }














  configureChart = async data => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [{
          label: "Estimated Result ",
          data: [data.Deaths.value, data.Affecteds.value,data.Injureds.value],

          backgroundColor: ["#DE924B", "skyblue","seagreen"],
          borderColor: "#DE924B",
          borderWidth: 1,
        },],
        labels: ["Deaths","Affected" ,"Injured"]
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
      <>
        <div className='result-body'>
        
        
        <div>
          <h1> This is Result</h1>
          <div className="main-card-result">
          <div className="card-result1">
            
            <h1>Death</h1>
          <h3>Estimation = {this.props.location.state.data.Deaths.Estimation}</h3>
          
        <p> System Estimate That {this.props.location.state.data.Deaths.range} People Get Injured Due to Earthquake.</p>

          
          </div>
          <div className="card-result2">
          <h1>Affected</h1>
          
          <h3>Estimation = {this.props.location.state.data.Affecteds.Estimation}</h3>
        <p> System Estimate That {this.props.location.state.data.Affecteds.range} People Get Injured Due to Earthquake.</p>
          </div>
          <div className="card-result3">
          <h1>Injured</h1>
          <h3>Estimation = {this.props.location.state.data.Injureds.Estimation}</h3>
          
        <p> System Estimate That {this.props.location.state.data.Injureds.range} People Get Injured Due to Earthquake.</p>
          </div>
          </div>
         

          
          <canvas className='Bar-graph'
            height={200}
            width={600}
            ref={chart => {
              this.chart = chart;
            }}
          />

        </div>
        <div>
  <section>

            <Map classNam="Map" google={this.props.google} zoomfit={2}  center={{
              lat: this.props.location.state.data.location.Lat,
              lng: this.props.location.state.data.location.Long

            }} >

              <Marker onClick={this.onMarkerClick}
                position={{ lat: this.props.location.state.data.location.Lat, lng: this.props.location.state.data.location.Long }} />

             
            </Map>

          </section>
  
</div>
</div>
      </>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ('AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4')
})(Blog)