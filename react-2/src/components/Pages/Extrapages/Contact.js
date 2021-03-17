import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h4 className="Header"> HAVE ANY QUERY?</h4>
            <h1 className="Header2"> Contact Us</h1>
            <p className='intro'>Please complete the form below to contact us. We will do our best to get back to you as soon as possible!</p>
            <div className='location div'>
                <h4 className='location'><i class="fa fa-map-marker"></i>Locate us</h4>
                <p className='p'> University of sialkot </p>
            </div>
            <div className='form-inputs1'>
        <label className='form-label'><i class="fa fa-user icon"></i>Your Name</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                 
      </div>
      <div className='form-inputs1'>
        <label className='form-label'><i class="fa fa-envelope icon"></i>Your E-mail</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                 
      </div>
      <div className='form-inputs'>
        <label className='form-label'><i class='fas fa-book-reader'></i>Your Subject</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                 
      </div>
      <div className='form-inputs'>
        <label className='form-label'><i class="fa fa-envelope icon"></i>Your Message</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                 
      </div>
        </div>
    )
}

export default Contact
