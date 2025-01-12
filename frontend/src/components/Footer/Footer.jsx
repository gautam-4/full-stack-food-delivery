import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Foody</h1>
          <p>Delivering happiness to your doorstep. We connect you with the best local restaurants, 
            bringing delicious meals straight to you. Fast, fresh, and always at your fingertips.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>EXPLORE</h2>
          <ul>
            <li>Browse Restaurants</li>
            <li>About Us</li>
            <li>Delivery Areas</li>
            <li>Partner With Us</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT</h2>
          <ul>
            <li>Call: +91-123-456-7890</li>
            <li>Email: support@foody.com</li>
            <li>Address: 123 Food Street, Kitchen City</li>
            <li>Hours: 24/7 Support</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright © {new Date().getFullYear()} Foody - All Rights Reserved.</p>
    </div>
  )
}

export default Footer