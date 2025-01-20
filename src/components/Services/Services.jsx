import React from 'react'
import serviceslogo1 from '../../assets/serviceslogo1.png'
import serviceslogo2 from '../../assets/serviceslogo2.png'
import serviceslogo3 from '../../assets/serviceslogo3.png'
import serviceslogo4 from '../../assets/serviceslogo4.png'
import serviceslogo5 from '../../assets/serviceslogo5.png'
import serviceslogo6 from '../../assets/serviceslogo6.png'


import download1 from '../../assets/download1.JPG'
import download2 from '../../assets/download2.JPG'
import download3 from '../../assets/download3.JPG'
import download4 from '../../assets/download4.JPG'
import download5 from '../../assets/download5.JPG'
import download6 from '../../assets/download6.JPG'
import download7 from '../../assets/download7.JPG'
import download8 from '../../assets/download8.JPG'
import './Services.css'

const Services = () => {
  return (
    <div className="all">

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

export default Services
