/*import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Demo = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    const [Users,setUser]=useState("");
    axios
      .get("http://127.0.0.1:8000/Earthquake_Events/")
      .then(response => {
        console.log(response.data);
setUser(response.data);
      
        setChartData({
          labels: Users.Displaced,
          datasets: [
            {
              label: "level of thiccness",
              data: Users.Displaced,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Demo;*/

/*import React from 'react';
import Deathbar from "../components/events/Earthquake events/Deathbar";

let filter=null;
class PostRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: 'Pakistan' })
        };
        const response = await fetch('http://127.0.0.1:8000/Earthquake_Events/', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.deaths });
    }

    render() {
        const { postId } = this.state;
        const {f} = "Pakistan"
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Async/Await</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
                <div className="event-container-Blog">
        <Deathbar
        val={f}
          />
      </div>
            </div>
        );
    }
}

export default PostRequestAsyncAwait ;*/