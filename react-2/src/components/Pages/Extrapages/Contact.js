import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h1 className="Header"> HAVE ANY QUERY?</h1>
            <h1 className="Header2"> Contact Us</h1>
            <form id="contact-form" >
    <div className="form-inputs">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-input">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-inputs">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="form-inputss">Submit</button>
</form>
            <div className='location div'>
                <h4 className='location'><i class="fa fa-map-marker"></i>Locate us</h4>
                <p className='p'> University of sialkot </p>
            </div>
        </div>
    )
}

export default Contact
