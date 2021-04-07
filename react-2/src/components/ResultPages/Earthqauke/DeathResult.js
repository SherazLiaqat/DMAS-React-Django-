import React,{Component} from 'react'
import './DeathResult.css';
import step1 from '../../images/Step1.jpg';
import step2 from '../../images/Step2.jpg';
import step3 from '../../images/Step3.jpg';
import step4 from '../../images/Step4.jpg';
import step5 from '../../images/Step5.jpg';
import step6 from '../../images/Step6.jpg';
import step7 from '../../images/Step7.jpg';
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
            <h1> THIS IS page</h1>
        </div>
        <div className='main-container'>
            <h1> THIS IS FIRST DIV</h1>
        </div>
        <div className='side-div-earthquake'>
            <h2 className='h4-earthquake'> Eartquake Death</h2>
           
            <ul className='side-div-p'>
           
                <div className='earth'>
                    
                
                    
                     <button className='button-size'
 
 onClick={()=>{this.setState({shows:!this.state.shows})}}>{ this.state.shows ?<i class="fa fa-angle-down"></i>:<i class="fa fa-angle-right"></i>}</button>Stay safe.</div>
             
             <div>
                {
                    this.state.shows? <div><img  src={step1} ></img><p>Stay safe.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show2:!this.state.show2})}}>{ this.state.show2 ? <i class="fa fa-angle-down"></i>:<i class="fa fa-angle-right"></i>}
 </button> Help Others</div>
                 <div>
                {
                    this.state.show2? <div><img  src={step2} ></img><p>Help Others.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show3:!this.state.show3})}}>{ this.state.show3 ?<i class="fa fa-angle-down"></i>:<i class="fa fa-angle-right"></i>}</button>Don't Panic.</div>
                <div>
                {
                    this.state.show3? <div><img  src={step3} ></img><p>Don't Panic.</p></div> : null
                }
                
           
               
                
            </div>
            </ul>
         
          </div>
          <footer> <p className='footer'> This Information is not Authenticated by any Official Source</p></footer>
        </>
        
    );
}}

export default DeathResult;

