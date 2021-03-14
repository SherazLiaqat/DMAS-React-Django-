import React from 'react'
import './Login.css';
import {Button }from '../../../Button/Button';
import { Link } from 'react-router-dom';

function Login () {
  
  return (
    <>
   <div className='form-content-right'>
     
 
  <h1 >
         Welcome back!<br/> Help out the Pendamic suffering people.
        
      </h1>
  <div className='hello'>
      <div className='form-inputs'>
        <label className='form-label'>  <i class="fa fa-user icon"></i>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
        
        />
        
      
      </div>
       
      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Password</label>
       <input
         className='form-input'
         type='password'
         name='password'
         placeholder='Enter your password'
         required="required"
        
       />
      
      

      </div>
      
      < a className='a' href='/'>Forgot Your Password?<br/></a>
      
            <button className='LoginButton'>Login</button>
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
}

export default Login
