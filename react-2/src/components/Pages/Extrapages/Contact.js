import React from 'react'
import './Contact.css';
class Contact extends React.Component {
  constructor()
  {
   super();
   this.state={
       username:"",
       email:"",
       subject:"",
       message:"",
       usernameerror:"",
       emailerror:"",
       subjecterror:"",
       messagaerror:""
     }}
     valid(){
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
    }
    
    
     submit(){
       this.setState({usernameerror:"", emailerror:"",subjecterror:"",messageerror:""  })
     
       
       if(this.valid()){
       alert("Form has been submited")}
     }
  render(){
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
        <label className='form-label1'><i class="fa fa-user icon"></i>Your Name*</label>
        <input
          className='form-input'
          placeholder=" Enter User Name..."
          type='text'
          name='name'
          onChange={(event)=>{this.setState({username:event.target.value})}}/>
         <div>
          <p>{this.state.usernameerror}</p>
           </div>      
      </div>
      <div className='form-inputs1'>
        <label className='form-label1'><i class="fa fa-envelope icon"></i>Your E-mail</label>
        <input
          className='form-input'
          placeholder=" Enter Your Valid Email..."
          type='email'
          name='email'
          onChange={(event)=>{this.setState({username:event.target.value})}}/>
         
          <p>{this.state.emailerror}</p>
                 
      </div>
      <div className='form-inputs2'>
        <label className='form-label1'><i class='fas fa-book-reader'></i>Your Subject</label>
        <input
          className='form-input'
          type='text'
          placeholder=" Enter Subject..."

          name='name'
          onChange={(event)=>{this.setState({username:event.target.value})}}/>
         
          <p>{this.state.subjecterror}</p>
                 
      </div>
      <div className='form-inputs2'>
        <label className='form-label1'><i class="fa fa-envelope icon"></i>Your Message</label>
        <input
          className='form-input'
          placeholder=" Enter Your Message..."
          type='text'
          name='name'
          onChange={(event)=>{this.setState({username:event.target.value})}}/>
         
          <p>{this.state.messageerror}</p>
                
      </div>
      <button className='contactButton' onClick={()=>this.submit()}> Contact Us</button> 
      <p className ='last'>Thank You! For Reaching Out We Will get back to you as soon as Possible.</p><br/>
        </div>
    )
}}

export default Contact