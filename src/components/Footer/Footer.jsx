import React from 'react'
import './Footer.css'
import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook-app-symbol.png';
import linkdin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-container">
   

    <div class="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li>
        <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li>
        <Link to="/about" className="navbar__link">About</Link>
        </li>
        <li>
        <Link to="/services" className="navbar__link">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__link">Contact</Link>
        </li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Contact Us</h4>
      <p>  vb257650@gmail.com </p>
      <p>+91 7798764878</p>
    </div>

    <div class="footer-social">
      <h4>Follow Us</h4>
      <div class="social-links">
        <a href="https://www.facebook.com/profile.php?id=100080647012228" class="social-icon"><img src={facebook} alt="Facebook"/></a>
        <a href="https://x.com/home" class="social-icon"><img src={twitter} alt="Twitter"/></a>
        <a href="https://www.linkedin.com/in/sarthak-shelke-a231b9264/" class="social-icon"><img src={linkdin} alt="LinkedIn"/></a>
        <a href="https://www.instagram.com/_.sarthak_shelke/" class="social-icon"><img src={insta} alt="Instagram"/></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 SOYRAA SOLAR. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer
