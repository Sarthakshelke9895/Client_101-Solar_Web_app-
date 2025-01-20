import React from 'react'
import './About.css'
import download1 from '../../assets/download1.JPG';
import Logo2 from '../../assets/logo2.png'
const About = () => {
  return (
    <div className='all'> 
      
      {/*About US*/}

      <div class="about-us-container">
      <div class="about-us-image">
        <img src={download1} alt="About Us"/>
       </div>
       <div class="about-us-content">
        <h2>About Us</h2>
        <p>
        We understand that each client is unique, and we pride ourselves on offering personalized solutions that are tailored to meet specific needs. Our team is dedicated to ensuring that every project is completed with the utmost attention to detail and quality, whether big or small.

        We believe in building lasting relationships with our clients, founded on trust, transparency, and exceptional service. At<strong> SOYRAA SOLAR</strong> , we are not just a service provider, but a partner in your success.
        </p>
        <ul class="about-us-points">
            <li>
                <img src={Logo2} alt="Bullet Icon"/>
                <span>High-quality services</span>
            </li>
            <li>
                <img src={Logo2} alt="Bullet Icon"/>
                <span>Customer-focused approach</span>
            </li>
            <li>
                <img src={Logo2} alt="Bullet Icon"/>
                <span>Innovative solutions</span>
            </li>
        </ul>
        <button class="explore-button">Explore Now</button>
      </div>
      </div>
    </div>
  )
}

export default About
