import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div class="contact-container" id="contactSection">
    <div class="contact-header">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out to us anytime!</p>
    </div>
    
    <div class="contact-content">
      <div class="contact-details">
        <h3>Our Contact Information</h3>
        <p>If you have any questions or feedback, feel free to get in touch with us. Below are our contact details:</p>
        <ul>
          <li><img src={mail_icon}alt="Mail Icon"/>sarthakshelke044@gmail.com</li>
          <li><img src={phone_icon} alt="Phone Icon"/>+91 9359955164 </li>
          <li><img src={location_icon} alt="Location Icon"/>Pune</li>
        </ul>
      </div>
      
      <div class="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label for="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required/>
          
          <label for="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required/>
          
          <label for="message">Your Message</label>
          <textarea id="message" placeholder="Write your message here" required></textarea>
          
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default Contact
