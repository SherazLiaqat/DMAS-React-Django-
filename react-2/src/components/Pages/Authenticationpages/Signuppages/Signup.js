import React, { Component } from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import {Button }from '../../../Button/Button';
import validate from './Validateinfo';
import Form from './Form';

class Signup extends React.Component {
 constructor()
 {
  super();
  this.state={
      username:"",
      email:"",
      password:" ",
      password2:" ",
      usernameerror:"",
      passworderror:"",
      password2error:"",
      emailerror:""
    }}
   valid(){
     if(!this.state.username.trim("")&&!this.state.email.includes("@")&& !this.state.password.trim("") && !this.state.password2.trim(""))
     {
       this.setState({usernameerror:"Invalid username",passworderror:"Enter password" ,emailerror:"Enter valid email adress",password2error:"Confirm password must be Required" })
     }
    else if(!this.state.username.trim("") )
     {
       this.setState({usernameerror:"Invalid username"})
     }
     else if(!this.state.email.includes("@"))
     {
       this.setState({ emailerror:"Enter valid email adress"  })
      
     }
     else if(!this.state.password.trim(""))
     {
       this.setState({ passworderror:"Enter password"  })
      
     }
     else if(this.state.password.length < 6){
        this.setState({passworderror: "Please add at least 6 charachter."})
      }
      
     
     else if( !this.state.password2.trim(""))
     {
       this.setState({ password2error:"Enter password"  })
      
     }
     else if(this.state.password != this.state.password2)
     {
       this.setState({ password2error:"Please Confirmed your password" })
      
     }
     else{
      return true
    }
   }
   
   
    submit(){
      this.setState({usernameerror:"", passworderror:"",emailerror:"",password2error:""  })
    
      
      if(this.valid()){
      alert("Form has been submited")}
    }
    render(){
  return (
    <>
   <div className='form-content-right'>
     
 
  <h1 className='h1'>
        <br/>Get started with us today!<br/> Create your account by filling out the
        information below.
      </h1>
      <span className='form-input-login'>
        Already have an account? Login < a href='/Login'>here</a>
        
      </span>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'><i class="fa fa-user icon"></i>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
          onChange={(event)=>{this.setState({username:event.target.value})}}/>
         
      <p>{this.state.usernameerror}</p>
      </div>
          <div
    className='form-inputs'>
    <label className='form-label'><i class="fa fa-envelope icon"></i>Email</label>
    <input
      className='form-input'
      type='email'
      name='email'
      placeholder='Enter your email'
     
      onChange={(event)=>{this.setState({email:event.target.value})}}     />
         
         <p><p>{this.state.emailerror}</p></p>
    
      </div>  
          
      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
         onChange={(event)=>{this.setState({password:event.target.value})}}    />
         
         <p>{this.state.passworderror}</p>

      </div>

      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Confirm Password</label>
       <input
         className='form-input'
         type='password'
         name='password2'
         placeholder='Confirm your password'
         onChange={(event)=>{this.setState({password2:event.target.value})}}     />
         
      <p> {this.state.password2error}</p>

      </div>

      
            <button className='SignupButton' onClick={()=>this.submit()}>Sign Up</button>
           {/*  <Link to='/Estimation'>
            </Link>*/}
     

            
          <br/>
         
      <br/>
      </div>
      
      












    
  </div>
   {/*  <div className='form-content-right'>
    
    <form  className='form' >
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
        
        />
      
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
         
        />
       
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Confirm Password</label>
        <input
          className='form-input'
          type='password'
          name='password2'
          placeholder='Confirm your password'
         
        />
        
      </div>
    
          <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          onClick=''>
            SIGN-UP  <i class="fa fa-chevron-right"></i>
          </Button>
          </div>
      <span className='form-input-login'>
        Already have an account? Login 
        <Link
                to='/Home'
                className='nav-links'
                
              >
                LOgin
              </Link>
          
         < a href='/Home'>here</a>
      </span>
    </form>
  </div>*/}
  </>
  );
}}

export default Signup
