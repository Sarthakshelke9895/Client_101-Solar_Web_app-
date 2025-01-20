import React from 'react'
import './Reviews.css'
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import Logo4 from '../../assets/logo4.png';


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

      

</div>
  )
}

export default Reviews
