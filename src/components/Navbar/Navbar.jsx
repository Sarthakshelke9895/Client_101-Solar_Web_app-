import React from 'react';
import { Link } from 'react-router-dom'; 
import { useState ,useEffect} from 'react';
import menu_icon from '../../assets/menu-icon.png';
import location from '../../assets/pin.png';
import call from '../../assets/phone-call.png';
import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook-app-symbol.png';
import linkdin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import weblogo from '../../assets/weblogo.PNG'
import './Navbar.css' //Import Link for navigation

const Navbar = () => {



  const handleLogoClick = () => {
    window.location.reload(); // Reload the page
  };

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    window.scrollY > 40 ? setSticky(true): setSticky(false);
    })
  },[]);

  const [mobileMenu,setMobileMenu] = useState(false);
  const togglemenu = ()=>{
       mobileMenu? setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className= {`navbar ${sticky ? 'dark_nav':''}`}>
         <div className="topbar">
        <div className="location">
          <img src={location} alt="" className='images' />
          <p>Mystique Wonders,B-Wing,Flat-no:503,narhe,Pune. </p>
        </div>
        <div className="socail_accounts">
          <div className="call">
          <img src={call} alt=""  className='images'/>
        <p>+91 9359955164</p>
          </div>
       
        <img src={insta} alt=""  className='images'/>
        <img src={facebook} alt=""  className='images'/>
        <img src={twitter} alt=""  className='images'/>
        <img src={linkdin} alt=""  className='images'/>
        
         
        </div>
      </div>


      <div className="logoandlinks">
        {/* Left section: User Login */}
      <div className="navbar__login" onClick={handleLogoClick}>
        <img src={weblogo}  id="weblogo" alt="logo"  />
        <div className="textforlogo">
        <p id="heading"> SOYRAA SOLAR</p>
        <p id='subheading'>Solar Water Heater System</p>
        </div>
      
      </div>

      {/* Right section: Navigation Links */}
      <ul className={mobileMenu?"":"hide_mobile_menu"}>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">About</Link>
        </li>
        <li className="navbar__item">
          <Link to="/services" className="navbar__link">Services</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">Contact</Link>
        </li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={togglemenu}/>
      </div>
      
    </nav>
  );
};

export default Navbar;
