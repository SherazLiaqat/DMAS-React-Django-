
import React, { useState } from 'react';
//import './Form.css';
import Signup from './Signup';
//import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Signup submitForm={submitForm} />
        ) : (
          <Signup/>
        )}
      </div>
    </>
  );
};

export default Form;