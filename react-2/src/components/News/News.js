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

    this.setState(  {  person: data.data[0], loading: false });
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
        <div>{this.state.person.id}</div>
        <div>{this.state.person.score}</div>
        <div>{this.state.person.fields.date.created}</div>
        <div>{this.state.person.fields.primary_type.name}</div>
      </div>
    );
  }
}