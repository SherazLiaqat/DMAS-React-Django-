import React from 'react'
import './Login.css';
import {Button }from '../../../Button/Button';

function Login () {
  
  return (
    <>
   <div className='form-content-right'>
     
 
  <h1 className='h1'>
        Get started with us today!<br/> Create your account by filling out the
        information below.
      </h1>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
        
        />
        
      
      </div>
         
        
          
      <div
       className='form-inputs'>
       <label className='form-label'>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
        
       />
      
      

      </div>

     

      <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            Login
          </Button>

            </div>
          <br/>
          <span className='span-login'>
        Don't have an account? Signup < a href='/Blog'>here</a>
        <br/><br/>
        
      </span>


    
  </div>
  
  </>
  );
}

export default Login