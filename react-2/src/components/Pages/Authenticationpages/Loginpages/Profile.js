
import React, { usestate } from "react";




export default class News extends React.Component {
  state = {
    users: null,
    fname: null,
    email: null,
    lname:null,
    loading: true,
  bio:null,
  avatar:null,

    
    
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
      users: data.user.username,
      loading: false ,
      lname: data.user.last_name,
      fname: data.user.first_name,
      email: data.user.email,
      bio: data.profile.bio,
      avatar: data.profile.files,
      
    });
  }

  render() {
   
    
      const name=this.state.users
      const fname=this.state.fname
      const lname=this.state.lname
      const email=this.state.email
      const bio=this.state.bio

      const avatar=this.state.avatar
    return (

    <div>
      <div style={{justifyContent:'center',alignItems:'center',}}>
     <img  src={avatar} alt="blog-image" />
     </div>
        First Name:{fname}
        Last Name:{lname}
        UserNmae{name}
        Email{email}
        <div>
          
          <div>
            {bio}
          </div>
        </div>
      </div>
    );
  }}
