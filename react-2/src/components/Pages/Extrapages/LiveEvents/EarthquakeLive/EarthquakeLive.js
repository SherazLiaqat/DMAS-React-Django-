import React,{Component} from 'react';
import styles from './EarthquakeLive.module.css';

import image from '../../../../images/image.jpg';
//import {fetchData} from './CovidApi/Index';

class EarthquakeLive extends React.Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>
                {
                    this.state.show? <div><h1>Hide and Show</h1></div> : null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
            </div>
          </header>
        </div>
      );
    }
  }

export default EarthquakeLive