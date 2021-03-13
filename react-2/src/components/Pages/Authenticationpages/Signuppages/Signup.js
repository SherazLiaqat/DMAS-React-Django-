import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import {Button }from '../../../Button/Button';
import validate from './Validateinfo';
import Form from './Form';

function Signup () {
   const { handleChange, handleSubmit, values, errors } = Form(
    validate)
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
          value={values.username}
          onChange={handleChange}
        />
       {errors.username && <p>{errors.username}</p>}
      
      </div>
          <div
    className='form-inputs'>
    <label className='form-label'><i class="fa fa-envelope icon"></i>Email</label>
    <input
      className='form-input'
      type='email'
      name='email'
      placeholder='Enter your email'
      value={values.email}
      onChange={handleChange}
    />
    {errors.email && <p>{errors.email}</p>}
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
         value={values.password}
         onChange={handleChange}
       />
       {errors.password && <p>{errors.password}</p>}
      

      </div>

      <div
       className='form-inputs'>
       <label className='form-label'> <i class="fa fa-key icon"></i>Confirm Password</label>
       <input
         className='form-input'
         type='password'
         name='password2'
         placeholder='Confirm your password'
         value={values.password2}
         onChange={handleChange}
       />
       {errors.password2 && <p>{errors.password2}</p>}

      </div>

      <Link to='/Estimation'>
            <button className='SignupButton'>Sign Up</button>
            </Link>
     

            
          <br/>
          <span className='form-input-login'>
        Already have an account? Login < a href='/Login'>here</a>
        
      </span>
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
}

export default Signup
