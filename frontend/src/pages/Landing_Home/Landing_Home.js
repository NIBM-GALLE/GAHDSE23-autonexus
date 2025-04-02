import React from 'react';
import './Landing_Home.css';
import img1 from '../../assets/car_img01.png';
import img2 from '../../assets/play.png';
import img3 from '../../assets/store.jpg';


const Landing_Home = () => {
  return (
    <div className="landinghome" id="home">
    

      <div className="landinghome_container landinghome_header_container">
        <div className="landinghome_header_image">
          <img className="landinghome_img" src={img1} alt="header"/>
        </div>
    
        <div className="landinghome_header_content">
          <h1 className="landinghome_h1">Journey Becomes Unforgettable!</h1>
          <p className="landinghome_p">Drive with Ease, Embrace the Road Ahead!</p>
          
          <div className="landinghome_header_links">
            <a className="landinghome_a" href="#">
              <img className="landinghome_img" src={img2} alt="app store"/>
            </a>
            <a className="landinghome_a" href="#">
              <img className="landinghome_img" src={img3} alt="play"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_Home;
