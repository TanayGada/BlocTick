import React from 'react'
import './Footer.css' // Import your custom styles

const Footer = () => {
  return (
   
      <div className="footer-container">
        {/* Left column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: blocTick@gmail.com</p>
          {/* Add more contact information as needed */}

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="path/to/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="path/to/twitter-icon.svg" alt="Twitter" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>

        {/* Middle column */}
        <div className="footer-column">
          <h3>Privacy Policy</h3>
          <a href="/privacy-policy">Read our Privacy Policy</a>
        </div>

        {/* Right column */}
        <div className="footer-column">
          <h3>Terms of Service</h3>
          <a href="/terms-of-service">View our Terms of Service</a>
        </div>
      </div>
    
  );
}

export default Footer
