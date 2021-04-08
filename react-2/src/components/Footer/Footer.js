import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaMedrt,FaFacebookF,FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa';
import { VscTwitter} from 'react-icons/vsc';


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
            <Link to='/Blog'>
            <button className='Button'>Search</button>
            </Link>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/About' target="_blank"> About Us</Link>
            
            <Link to='/Contact' target="_blank">Contact Us</Link>
            <Link to='/MyBlog'>Blog</Link>
            <Link to='/'>News</Link>
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
            <h2>Awareness</h2>
            <Link to='/Earthquakeinfo' target="_blank">Earthquake</Link>
            <Link to='/Floodinfo' target="_blank">Flood</Link>
            <Link to='/Covid-19info' target="_blank">Covid-19</Link>
            <Link to='/Fireinfo' target="_blank">Fire</Link>
            <Link to='/Locust' target="_blank">Locust</Link>
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
            DAS<FaMedrt/>
              
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
              <FaFacebookF/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/" }}
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/" }}
              target='_blank'
              aria-label='Twitter'
            >
              <VscTwitter/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname:'https://www.linkedin.com/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;