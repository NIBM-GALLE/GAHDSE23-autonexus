import React from 'react';
import './Landing_Footer.css';
import img1 from '../../assets/google.png';
import img2 from '../../assets/apple.png';
import img3 from '../../assets/download.png';

const Landing_Footer = () => {
  return (
    <div class="landing_footer">
    <section class="landingfooter_download">
      <div class="landingfooter_section landingfooter_download__container">
        <div class="landingfooter_download__content">
          <h2 class="landingfooter_header">Drive Easy, Embrace the Journey!</h2>
          <div class="landingfooter_download__links">
            <a href="#">
              <img class="landingfooter_img" src={img1} alt="Google Play Store"/>
            </a>
            <a href="#">
              <img class="landingfooter_img" src={img2} alt="Apple App Store"/>
            </a>
          </div>
        </div>
        <div class="download__image">
          <img class="imgs" src={img3} alt="Download"/>
        </div>
      </div>
    </section>
  
    <footer class="landingfooter_u">
      <div class="landingfooter_section landingfooter_container">
  
        <div class="landingfooter_col">
          <h4>AUTONEXUS</h4>
          <ul class="landingfooter_links">
            <li><a href="#"><p class="f_contact">Seamless Rides</p></a></li>
            <li><a href="#"><p class="f_contact">Expert Repairs</p></a></li>
            <li><a href="#"><p class="f_contact">Easy Rentals</p></a></li>
            <li><a href="#"><p class="f_contact">Convenient Garage Locations</p></a></li>
          </ul>
        </div>
  
        <div class="landingfooter_col">
          <h4>Company</h4>
          <ul class="landingfooter_links">
            <li><a href="#"><p class="f_contact">About Us</p></a></li>
            <li><a href="#"><p class="f_contact">Career</p></a></li>
            <li><a href="#"><p class="f_contact">Press</p></a></li>
            <li><a href="#"><p class="f_contact">Support</p></a></li>
          </ul>
        </div>
  
        <div class="landingfooter_col">
          <h4>Contact</h4>
          <ul class="landingfooter_links">
            <li>
              <div class="landingfooter_circle"><i class="bx bxs-phone fcontact_icon"></i></div>
              <p class="landingfooter_contact">+947 12 364 509</p>
            </li>
            <li>
              <div class="landingfooter_circle"><i class="bx bxs-map fcontact_icon"></i></div>
              <p class="landingfooter_contact">N0: 123, Smagi Street, Galle.</p>
            </li>
            <li>
              <div class="landingfooter_circle"><i class="bx bxs-envelope fcontact_icon"></i></div>
              <p class="landingfooter_contact">AutonexusATgmail.com</p>
            </li>
          </ul>
        </div>
  
        <div class="landingfooter_col">
          <h4>Follow Us</h4>
          <ul class="footer__socials">
            <li>
              <a href="#">
                <div class="flandingfooter_circle"><i class="bx bxl-facebook-square"></i></div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="flandingfooter_circle"><i class="bx bxl-twitter"></i></div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="flandingfooter_circle"><i class="bx bxl-youtube"></i></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="footer__bar">
        Copyright © 2024 AUTONEXUS. All rights reserved.
      </div>
    </footer>
  </div>
  
  );
};

export default Landing_Footer;


