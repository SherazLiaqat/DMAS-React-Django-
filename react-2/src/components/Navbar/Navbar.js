import React, { useState, useEffect } from 'react';
import {Button} from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Disaster Assistance
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'  className='nav-links' onClick={closeMobileMenu}>
                <i class="fa fa-home"/>Home
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
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contat Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/News'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            
            </li>
          
           

            <li>
              <Link
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
          </ul>
          
          {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;