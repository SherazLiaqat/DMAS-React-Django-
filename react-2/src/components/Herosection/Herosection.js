import React,{useState} from 'react'
//import '../../App.css';
import './Herosection.css';
import { IoMdArrowDropdown} from 'react-icons/io';
import homeimage from '../../components/images/img-12.jpg';
import { Link } from 'react-router-dom';
import Dropdowns from '../Navbar/Dropdown';


function Herosection() {
  
  const [dropdowns, setDropdowns] = useState(false);
  const onMouseEnters = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(true);
    }
  };

  const onMouseLeaves = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(false);
    }
  };
    return (
        <div className='hero-container'>
        <img className='image' src={homeimage}/>
        <h1>EMERGENCY  ASSISTANCE</h1>
        <p>What are you waiting for?</p>
        
        <div className='hero-btns'>
          <Link
          to='/Login'>
        <button className='Button-home'> GET STARTED</button>
        
        </Link>
        <li 
            onMouseEnter={onMouseEnters}
            onMouseLeave={onMouseLeaves}
            >
               
          <button className='Button-home2'>ESTIMATION< IoMdArrowDropdown /> 
          
          </button>
          {dropdowns && <Dropdowns />}
          </li>
        </div>
      </div>
    );
}

export default Herosection
