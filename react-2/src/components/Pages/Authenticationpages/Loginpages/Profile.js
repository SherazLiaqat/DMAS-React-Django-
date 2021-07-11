
import React, { usestate } from "react";
import './Profile.css';



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
      <div style={{justifyContent:'center',display:'flex',margin:'20px',borderRadius: '50%',
    }}>
     <img  src={avatar} alt="blog-image" />
     
     </div>
     <div className='Profile-info' style={{marginBottom:'40px'}}>
     <label className='Profile-label'>Your Bio</label>
     <div className='Profile-detail'>
       <p>{bio}</p>
     
        </div>
        </div>
     <div className='Profile-info'>
     <label className='Profile-label'>Your Info</label>
     <div className='Profile-detail'>
     <div style={{display:'flex',justifyContent:'space-around' ,marginLeft:'-290px'}}>
        First-Name:{fname} </div>
  
        <div style={{display:'flex',justifyContent:'space-around',marginLeft:'-298px'}}>
        Last-Name:{lname}</div>
        <div style={{display:'flex',justifyContent:'space-around',marginLeft:'-283px'}}>
        UserName:         {name}</div>
        <div style={{display:'flex',justifyContent:'space-around',marginLeft:'-283px'}}>
        E-mail:{email}</div>
        </div>
        </div>
        <div>
          
        
         
        </div>
      </div>
    );
  }}
