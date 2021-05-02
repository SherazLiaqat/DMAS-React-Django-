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
    
    

    this.setState(  {  person: data.data[7], loading: false });
    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div><h2>ID</h2>{this.state.person.id}</div>
        <div><h2>SCORE</h2>{this.state.person.score}</div>
        <div><h2>STATUS</h2>{this.state.person.fields.status}</div>
        <div><h2>DATE</h2>{this.state.person.fields.date.created}</div>
        <div><h2>TYPE</h2>{this.state.person.fields.primary_type.name}</div>
        <div><h2>HEADLINE</h2>{this.state.person.fields.name}</div>
        
        <div><h2>NAME</h2>{this.state.person.fields.country[0].name}</div>
        <div><h2>LOCATION</h2>{this.state.person.fields.country[0].location.lat}</div>
        <div><h2>DESCRIPTION</h2>{this.state.person.fields.description}</div>
      </div>
    );
  }
}