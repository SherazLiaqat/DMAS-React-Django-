import { map } from "d3-array";
import React from "react";

export default class News extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=full&preset=latest&slim=1";
    const response = await fetch(url);
    const data = await response.json();
    
    

  this.setState(  {  person: data.data, loading: false });

    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    const elements = [0,1,2,3,4,5,6,7,8,9];

    return (
      
        
          <div>
          
        {elements.map((i, index) => {
        return (<div>
        <h2>SCORE</h2>{this.state.person[i].score}
      <h2>ID</h2>{this.state.person[i].id}
        <h2>STATUS</h2>{this.state.person[i].fields.status}
        <h2>DATE</h2>{this.state.person[i].fields.date.created}
        <h2>TYPE</h2>{this.state.person[i].fields.primary_type.name}
        <h2>HEADLINE</h2>{this.state.person[i].fields.name}
        
        <h2>NAME</h2>{this.state.person[i].fields.country[0].name}
        <h2>LOCATION</h2>{this.state.person[i].fields.country[0].location.lat}
        <h2>DESCRIPTION</h2>{this.state.person[i].fields.description}
        </div>
      )
      })}
          
          </div>
      
      
    );
  }
}