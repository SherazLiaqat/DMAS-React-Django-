import React from 'react';
import './Footer.css';
//import {Button} from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Disaster Volunteer Connecction and help people to Survive at the time of Disaster
        </p>
        <p className='footer-subscription-text'>
          You can Search anything here.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='Search'
              type='text'
              placeholder='Search.'
              to='/Blog'
            />
<<<<<<< Updated upstream
            <Link to='/Blog' >
            <button
            
            
            >Search</button>
            </Link>
=======
            <button className='Button'></button>
            <Button buttonStyle='btn--outline'>Search <i class="fa fa-search"></i></Button>
>>>>>>> Stashed changes
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'> work</Link>
            
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Eartquakeinfo'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>News</h2>
            <Link to='/Earthquakeinfo' target="_blank">Earthquake</Link>
            <Link to='/Floodinfo' target="_blank">Flood</Link>
            <Link to='/Heavyrain' target="_blank">Heavy Rain</Link>
            <Link to='/Fireinfo' target="_blank">Fire</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">Instagram</Link>
            
            <Link  to={{ pathname: "https://www.facebook.com/" }} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://www.youtube.com/" }} target="_blank">Youtube</Link>
            <Link  to={{ pathname: "https://twitter.com/" }} target="_blank">Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DAS
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small className="website-rights">
            &copy;{new Date().getFullYear()} Disaster Assistance | All rights reserved |
            Terms Of Service | Privacy Policy
          </small>
        
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/" }} 
              target="_blank"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname:'https://www.linkedin.com/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;