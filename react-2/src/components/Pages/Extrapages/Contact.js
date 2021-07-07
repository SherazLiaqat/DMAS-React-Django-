import React, { useState } from "react";
import "./Contact.css";

import '../Authenticationpages/Signuppages/Signup.css';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

import axios from 'axios';

const Contact = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  

  const contactinfo = async () => {
    let formfield = new FormData();
    formfield.append("name", username);
    formfield.append("email", email);
    formfield.append("subject", subject);
    formfield.append("massage", message);
  
   await axios({
    method: "post",
    url: "http://127.0.0.1:8000/contact/",
    data: formfield,
  }).then((response) => {
    console.log(response.data);
    alert('Your response Has been Submitted! Thankyou')
  });
}

  {
    /* constructor()
  {
   super();
   this.state={
    username:"",
    email:"",
    subject:"",
    message:"",
      /* username:"",
       email:"",
       subject:"",
       message:"",
      
       usernameerror:"",
       emailerror:"",
       subjecterror:"",
       messagaerror:"",
      
     
     valid()
      if(!this.state.username.trim("")&&!this.state.email.includes("@")&& !this.state.subject.trim("") && !this.state.message.trim(""))
      {
        this.setState({usernameerror:" username Required",messageerror:"Enter Message" ,emailerror:"Enter valid email adress",subjecterror:"Subject must be Required" })
      }
     else if(!this.state.username.trim("") )
      {
        this.setState({usernameerror:" username Required"})
      }
      else if(!this.state.email.includes("@"))
      {
        this.setState({ emailerror:"Enter valid email adress"  })
       
      }
      else if(!this.state.subject.trim(""))
      {
        this.setState({ passworderror:"Enter Subject"  })
       
      }
     
       
      
      else if( !this.state.message.trim(""))
      {
        this.setState({ password2error:"Enter Message"  })
       
      }
     
      else{
       return true
     }
    
    
    
     /*submit(){
       this.setState({usernameerror:"", emailerror:"",subjecterror:"",messageerror:""  })
     
       
       if(this.valid()){
       alert("Form has been submited")}
     }*/

    return (
      <div className="main-body">
        <h4 className="Header"> HAVE ANY QUERY?</h4>
        <h1 className="Header2"> Contact Us</h1>
        <p className="intro">
        Feel free to contact us! if you have some concerns over website's content or
you can give us your precious feedback.
        </p>
        <div className="Contact-Div-Location">
          <div className="divlocation">
            <h1 className="contactform-label">
              <MdLocationOn />
              Locate Us
            </h1>
            <p className="div-paragraph">
              {" "}
              UNIVERSITY OF GUJRAT SIALKOT CAMPUS
            </p>
          </div>
          <div className="divlocation">
            <h1 className="contactform-label">
              <FiPhoneCall />
              Give us a Call
            </h1>
            <p className="div-paragraph"> OFFICE: 052-1454678</p>
          </div>
          <div className="divlocation">
            <h1 className="contactform-label">
              <MdEmail />
              Get in Online
            </h1>
            <p className="div-paragraph"> example@gmail.com</p>
          </div>
          <br />
        </div>
        <div className="contact-detail">
          <div className="form-inputs1">
            <label className="form-label1">
              <FaUserAlt />
              Your Name*
            </label>
            <input
              className="form-input"
              placeholder=" Enter User Name..."
              type="text"
              name="name"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />
            <div>
              
            </div>
          </div>
          <div className="form-inputs1">
            <label className="form-label1">
              <MdEmail />
              Your E-mail
            </label>
            <input
              className="form-input"
              placeholder=" Enter Your Valid Email..."
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />

           
          </div>
        </div>
        <div className="contact-detail-2">
          <div className="form-inputs2">
            <label className="form-label1">
              <MdEmail />
              Your Subject
            </label>
            <input
              className="form-input"
              type="text"
              placeholder=" Enter Subject..."
              name="name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              /* onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />

            
          </div>

          <div className="form-inputs2">
            <label className="form-label1">
              <BiMessageRounded />
              Your Message
            </label>
            <input
              className="form-input"
              placeholder=" Enter Your Message..."
              type="text"
              name="name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              /*  onChange={(event)=>{this.setState({username:event.target.value})}}*/
            />

            
          </div>
        </div>
        <button className="contactButton" onClick={contactinfo}/* onClick={()=>this.submit()}*/>
          {" "}
          Contact Us
        </button>
        <p className="last">
       
        </p>
        <br />
      </div>
    );
  }
};
export default Contact;
