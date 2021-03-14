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
      username:" ",
      email:" ",
      password:" ",
      password2:" "
    }}
    submit(){
      alert("submit")
    }
    render(){
  return (
    <>
   <div className='form-content-right'>
     
 
  <h1 className='h1'>
        <br/>Get started with us today!<br/> Create your account by filling out the
        information below.
      </h1>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'><i class="fa fa-user icon"></i>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
          onChange={(event)=>{this.setstate({name:event.target.value})}}/>
         
      <p></p>
      </div>
          <div
    className='form-inputs'>
    <label className='form-label'><i class="fa fa-envelope icon"></i>Email</label>
    <input
      className='form-input'
      type='email'
      name='email'
      placeholder='Enter your email'
     
     onChange={(event)=>{this.setstate({email:event.target.value})}}/>
         
         <p></p>
    
      </div>  
          
      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
         onChange={(event)=>{this.setstate({password:event.target.value})}}/>
         
         <p></p>

      </div>

      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Confirm Password</label>
       <input
         className='form-input'
         type='password'
         name='password2'
         placeholder='Confirm your password'
         onChange={(event)=>{this.setstate({password2:event.target.value})}}/>
         
      <p></p>

      </div>

      
            <button className='SignupButton' onClick={()=>this.submit}>Sign Up</button>
           {/*  <Link to='/Estimation'>
            </Link>*/}
     

            
          <br/>
          <span className='form-input-login'>
        Already have an account? Login < a href='/Login'>here</a>
        
      </span>
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
