import React from 'react'
import './Reviews.css'
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import Logo4 from '../../assets/logo4.png';
import download1 from '../../assets/download1.JPG'
import download2 from '../../assets/download2.JPG'
import download3 from '../../assets/download3.JPG'
import download4 from '../../assets/download4.JPG'
import download5 from '../../assets/download5.JPG'
import download6 from '../../assets/download6.JPG'
import download7 from '../../assets/download7.JPG'
import download8 from '../../assets/download8.JPG'


import serviceslogo1 from '../../assets/serviceslogo1.png'
import serviceslogo2 from '../../assets/serviceslogo2.png'
import serviceslogo3 from '../../assets/serviceslogo3.png'
import serviceslogo4 from '../../assets/serviceslogo4.png'
import serviceslogo5 from '../../assets/serviceslogo5.png'
import serviceslogo6 from '../../assets/serviceslogo6.png'


const Reviews = () => {
  return (
    <div className='Reviews'>
        <div className="Reviews_WorkDone">
          <div className="logoandvalue">
           <img src={Logo1} alt="logo1" className='imagesReview'/> 
           <p>500+</p>
          </div>
          <h4>Happy Customers</h4>
          <p className='text'>Trusted by 500+ happy customers who inspire us to excel every day.
                              Experience unmatched quality and join our growing family of satisfied clients!"</p>
      </div>

      <div className="Reviews_WorkDone">
          <div className="logoandvalue">
           <img src={Logo2} alt="logo1" className='imagesReview'/> 
           <p>600+</p>
          </div>
          <h4>Project Done</h4>
          <p className='text'>
          Completed 500+ successful projects with dedication and precision.
           Your vision, our commitment—bringing ideas to life with every project!
          </p>
      </div>

      <div className="Reviews_WorkDone">
          <div className="logoandvalue">
           <img src={Logo3} alt="logo1" className='imagesReview'/> 
           <p>20+</p>
          </div>
          <h4>Award Wins</h4>
          <p className='text'>
          Honored with 20+ awards for excellence and innovation.
          Our achievements reflect our commitment to delivering the best!
          Join us and experience awesome movements.
          </p>
      </div>

      <div className="Reviews_WorkDone">
          <div className="logoandvalue">
           <img src={Logo4} alt="logo1" className='imagesReview'/> 
           <p>150+</p>
          </div>
          <h4>Skilled Workers</h4>
          <p className='text'>
          Empowered by 200+ skilled professionals dedicated to excellence.
          Our team's expertise ensures top-notch solutions every time!
          </p>
      </div>
      













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










{/*Services*/}

      <div class="services-container">
  <h2 class="services-heading">Our Services</h2>
  <p class="services-description">
    Our services are designed to provide innovative solutions tailored to meet the unique needs of your business. With years of experience and a dedicated team, we deliver excellence in every project. Whether you're looking for creative strategies, cutting-edge technology, or hands-on support, we have the expertise to help you succeed. Explore our wide range of services to find the perfect solution .
  </p>

  <div class="services-cards">
    <div class="service-card">
      <img src={download7} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo1} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">New Solar Water Heater Installation</h3>
        <p class="service-para">Description of service 1. We provide top-notch solutions to meet your needs.</p>
      </div>
    </div>

    <div class="service-card">
      <img src={download2} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo2} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">Anuual Maintainance</h3>
        <p class="service-para">Description of service 2. We deliver excellence in every project.</p>
      </div>
    </div>

    <div class="service-card">
      <img src={download3} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo3} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">Solar Water Heater Repairing</h3>
        <p class="service-para">Description of service 3. Tailored solutions to meet your requirements.</p>
      </div>
    </div>

    <div class="service-card">
      <img src={download4} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo4} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">Solar Water Heater Repairing</h3>
        <p class="service-para">Description of service 4. Quality and reliability are our top priorities.</p>
      </div>
    </div>

    <div class="service-card">
      <img src={download5} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo5} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">Monthly Repairing</h3>
        <p class="service-para">Description of service 5. Innovative and custom solutions just for you.</p>
      </div>
    </div>

    <div class="service-card">
      <img src={download6} alt="Service Image" class="service-image"/>
      <div class="logo-container">
        <img src={serviceslogo6} alt="Logo" class="service-logo"/>
      </div>
      <div class="card-description">
        <h3 class="service-title">Solar Water Heater Servicing</h3>
        <p class="service-para">Description of service 6. We bring your ideas to life with exceptional service.</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Reviews
