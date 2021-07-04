import React, { useState, useEffect,Fragment, useLayoutEffect } from 'react';
import {Button} from '../Button/Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import ProfileDropdown from './ProfileDropdown';
//import {Nav,NavDropdown,} from 'react-bootstrap';
import './Navbar.css';
import Dropdowns from './Dropdowns';
import { FaHome } from 'react-icons/fa';
import { FaMedrt } from 'react-icons/fa';
import { FaBars,FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

//import {fatimes} from 'react-icons/fa';

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const [Profiledropdown, setProfileDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const username=localStorage.getItem('username')

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
     
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnterr = () => {
    if (window.innerWidth < 960) {
     
      setProfileDropdown(false);
    } else {
      setProfileDropdown(true);
    }
  };

  const onMouseLeavee = () => {
    if (window.innerWidth < 960) {
      setProfileDropdown(false);
    } else {
      setProfileDropdown(false);
    }
  };
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Disaster Assistance
            < FaMedrt/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
         {click? <FaTimes className='fa-bars'/>:<FaBars className='fa-bars'/>}
            
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'  className='nav-links' onClick={closeMobileMenu}>
              <FaHome />Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Awareness'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Awareness
              </Link>
            </li>
            
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            
              <Link
             
                
                className='nav-links'
                onClick={closeMobileMenu}>
                Estimation<IoMdArrowDropdown onClick/>
              
              </Link>

              {dropdown  && < Dropdown />}
              
            </li>
            <li className='nav-item'
            onMouseEnter={onMouseEnters}
            onMouseLeave={onMouseLeaves}
            >
            
              <Link
              
                
                className='nav-links'
                onClick={closeMobileMenu}>
                Event <IoMdArrowDropdown onClick/>
                
              </Link>
              {dropdowns && <Dropdowns />}
             
            </li>
           
            <li className='nav-item'>
              <Link
                to='/Live'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Live News
              </Link>
            </li>
           
           
            <li className='nav-item'>
              <Link
                to='/Api'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>
           

            <li>
            <ul>
        {isAuth === true ? (
          <Fragment>
            
            <ul className='nav-item'
            onMouseEnter={onMouseEnterr}
            onMouseLeave={onMouseLeavee}
            >
            
              <Link
              
                
                className='nav-links'
                onClick={closeMobileMenu}>
              {username}<IoMdArrowDropdown onClick/>
                
              </Link>
              {Profiledropdown && <ProfileDropdown />}
             
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            
            
            <div className='hero-btns' style={{margin:"15px",justifyContent:'center'}}>
          <Link 
          to='/Login'>
        <button className='Button-home'> Login</button>
        
        </Link>
        </div>
          </Fragment>
        )}
      </ul>
            </li>
            <nav>
      
     
    </nav>
           {/* <Nav>
              <NavDropdown title="user name"><IoMdArrowDropdown />
                <NavDropdown.Item>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>*/}
          </ul>
          
         
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;