import React, { Component } from 'react'
import './Login.css';
import {Button }from '../../../Button/Button';
import { Link } from 'react-router-dom';
import {  FaUserAlt,FaKey} from 'react-icons/fa';

class Login extends React.Component  {
  constructor()
  {
   super();
   this.state={
       email:"",     
       password:"",
       usernameerror:"",
       passworderror:""
     
     }}
    valid(){
      if(!this.state.email.trim("") && !this.state.password.trim("")){
        this.setState({usernameerror:"UserName is required",passworderror:"Password is required"})
      }
      else if(!this.state.email.trim(""))
      {
       this.setState({usernameerror:"username Required"})
      }
      else if(!this.state.password.trim(""))
      {
       this.setState({passworderror:"Password Required"})
      }
      else{
        return true;
      }
    }
     
     
      submit(){
        this.setState({usernameerror:"", passworderror:"" })
      
        if(this.valid()){
         alert('submitted')
        }
        }
     render(){
  return (
    <>
   <div className='form-content-right'>
     
 
  <h1 className='heading-h1' >
         Welcome back!<br/> Help out the Pendamic suffering people.
        
      </h1>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'>  <FaUserAlt/>Username</label>
        <input
          className='form-input'
          type='text'
          name='text'
          placeholder='Enter your username'
          onChange={(event)=>{this.setState({email:event.target.value})}}/>
         
          <p>{this.state.usernameerror}</p>
        
        
      
      </div>
       
      <div
       className='form-inputs'>
       <label className='form-label'> <FaKey/>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
         
         onChange={(event)=>{this.setState({password:event.target.value})}}/>
         
         <p>{this.state.passworderror}</p>
      
      

      </div>
      
      < a className='password-forget' href='/'>Forgot Your Password?<br/></a>
      
            <button className='LoginButton' onClick={()=>this.submit()}>Login</button>
           {/* <Link to=''>
            </Link>*/} 
     

            </div>
          <br/>
          <span className='span-login'>
        Don't have an account? Signup < a href='/sign-up'>here</a>
        <br/><br/>
        
      </span>


    
  </div>
  
  </>
  );
}}
export default Login
