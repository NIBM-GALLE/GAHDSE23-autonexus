import React from 'react'
import './Landing_Home.css';
import img1 from '../../assets/car_img01.png';
import img2 from '../../assets/play.png';
import img3 from '../../assets/store.jpg';

const Landing_Home = () => {
  return (
    <div class="landinghome" id="home">
      <div class="landinghome_container landinghome_header_container" >
        <div class="landinghome_header_image">
          <img class="landinghome_img" src={img1} alt="header"/>
        </div>
    
        <div class="landinghome_header_content">
          <h1 class="landinghome_h1">Journey Becomes Unforgettable!</h1>
          <p class="landinghome_p">Drive with Ease, Embrace the Road Ahead!</p>
          
          <div class="landinghome_header_links">
            <a class="landinghome_a" href="#">
              <img class="landinghome_img" src={img2} alt="app store"/>
            </a>
            <a class="landinghome_a" href="#">
              <img class="landinghome_img" src={img3} alt="play"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing_Home;
