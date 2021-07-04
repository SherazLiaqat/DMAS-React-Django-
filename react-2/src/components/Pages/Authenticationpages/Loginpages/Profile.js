
import React, { usestate } from "react";




export default class News extends React.Component {
  state = {
    users: null,
    loading: true,
  
    
    
  }


  componentDidMount() {
    const username=localStorage.getItem('username')
    this.makeHttpRequestWithPage(username);
  }


  makeHttpRequestWithPage = async username => {
    const response = await fetch(`http://127.0.0.1:8000/myprofile/${username}`);

    const data = await response.json();
console.log(data.user.username);
    this.setState({
      users: data.user.username,loading: false 
      
    });
  }

  render() {
   
    
      const name=this.state.users
    return (

    <div>
        
        {name}
      </div>
    );
  }}
