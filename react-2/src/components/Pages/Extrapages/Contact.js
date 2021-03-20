import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h4 className="Header"> HAVE ANY QUERY?</h4>
            <h1 className="Header2"> Contact Us</h1>
            <p className='intro'>Please complete the form below to contact us. We will do our best to get back to you as soon as possible!</p>
            <div className='divlocation'>
        <h1 className='contactform-label'><i class="fa fa-map-marker"></i>Locate Us</h1>
      <p className='div-paragraph'> UNIVERSITY OF GUJRAT SIALKOT CAMPUS</p>
                 
      </div>
      <div className='divlocation'>
        <h1 className='contactform-label'><i class="fa fa-phone"></i>Give us a Call</h1>
        <p className='div-paragraph'> OFFICE: 052-1454678</p>
                 
      </div>
      <div className='divlocation'>
        <h1 className='contactform-label'><i class="fa fa-envelope icon"></i>Get in  Online</h1>
        <p className='div-paragraph'> example@gmail.com</p>
                 
      </div><br/>
            <div className='form-inputs1'>
        <label className='form-label1'><i class="fa fa-user icon"></i>Your Name</label>
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
      <div className='form-inputs2'>
        <label className='form-label'><i class='fas fa-book-reader'></i>Your Subject</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                 
      </div>
      <div className='form-inputs2'>
        <label className='form-label'><i class="fa fa-envelope icon"></i>Your Message</label>
        <input
          className='form-input'
          type='text'
          name='name'/>
                
      </div>
      <button className='contactButton'> Contact Us</button> 
        </div>
    )
}

export default Contact