import React,{Component} from 'react'
import './DeathResult.css';
import Blog from '../../Pages/Blog';
import step1 from '../../images/Step1.jpg';
import step2 from '../../images/Step2.jpg';
import step3 from '../../images/Step3.jpg';
import Result from '../../Pages/Chart/Result';
import {FaAngleDown,FaAngleRight} from 'react-icons/fa';
import { FaMedrt,FaFacebookF,FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa';
import { VscTwitter} from 'react-icons/vsc';

class DeathResult extends React.Component {
    state={
        istogleOn:false
      }
      toglepersonhandler=()=>{
        const doesshow=this.state.showopersons;
        this.setState({showopersons: !doesshow})
        this.setState(state=>({
          istogleOn:!state.istogleOn
        }));
      }
    render(){
    return (
        
        <>
         <div >
            <h1> Death's Due to Earthquake</h1>
        </div>
        <div className='main-container'>
            <h1 className='result'>Result </h1>
            <p> System Estimate That 0 of 25 People Get Injured Due to Earthquake.</p>
         

           <Result/>
           
        </div>
        <div className='side-div-earthquake'>
            <h2 className='h4-earthquake'> Eartquake Death</h2>
           
            <ul className='side-div-p'>
           
                <div className='earth'>
                    
                
                    
                     <button className='button-size'
 
 onClick={()=>{this.setState({shows:!this.state.shows})}}>{ this.state.shows ?<FaAngleDown/>:<FaAngleRight/>}</button>Stay safe.</div>
             
             <div>
                {
                    this.state.shows? <div><img  src={step1} ></img><p>Stay safe.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show2:!this.state.show2})}}>{ this.state.show2 ? <FaAngleDown/>:<FaAngleRight/>}
 </button> Help Others</div>
                 <div>
                {
                    this.state.show2? <div><img  src={step2} ></img><p>Help Others.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show3:!this.state.show3})}}>{ this.state.show3 ?<FaAngleDown/>:<FaAngleRight/>}</button>Don't Panic.</div>
                <div>
                {
                    this.state.show3? <div><img  src={step3} ></img><p>Don't Panic.</p></div> : null
                }
                
           
               
                
            </div>
            </ul>
            </div>
        <div className='side-div-Result'>
            <h2 className='h4-earthquake'> Share With</h2>
           
            <ul className='side-div-p'>
           
                <div className='social-media'>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <VscTwitter/>
                    <FaYoutube/>
                    <FaLinkedin/>
                
                    
                    
               
                
              
           
               
                
            </div>
            </ul>
          </div>
          <footer> <p className='footer'> This Information is not Authenticated by any Official Source</p></footer>
        </>
        
    );
}}

export default DeathResult;

