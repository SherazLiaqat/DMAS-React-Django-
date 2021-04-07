import React, { useState,useEffect,row } from 'react'
import { Pie, defaults } from 'react-chartjs-2';
import "./Chart.css"
import {csv} from 'd3';
defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  const[data,setdata]=useState([]);
  useEffect(() => {
    csv('Eathquake.csv',row).then(data=>{
      setdata(data);
    });
    
      
    },[]);
  
  return (
    <div>
      <Pie className="pie"
        data={{
          labels: ['Red', 'Black', 'brown', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data:[909,967,78,67,67,56],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(295, 27, 86, 0.2)',
                'rgba(95, 192, 192, 0.9)',
                'rgba(193, 18, 255, 0.2)',
                'rgba(255, 159, 64, 0.9)',
              ],
              
              borderColor: [
                'rgba(265, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 26, 86, 1)',
                'rgba(75, 1982, 12, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={500}
        
        width={450}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart