import React from 'react';
import './Landing_Cards01.css';
import img1 from '../../assets/range-1.jpg';
import img2 from '../../assets/range-2.jpg';
import img3 from '../../assets/range-3.jpg';
import img4 from '../../assets/range-4.jpg';

const Landing_Cards01 = () => {
  return (
    <div className="landingcards01_container" id="">
      <section className="landingcards01_section" id="about">
        <h2 className="landingcards01_header">WIDE RANGE OF VEHICLES</h2>
        <div className="landingcards01_grid">
          <div className="landingcards01_card">
            <img className='landingcards01_img1' src={img1} alt="range" />
            <div className="landingcards01_details">
              <h4>CARS</h4>
              <a href="#"><i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div className="landingcards01_card">
            <img className='landingcards01_img1' src={img2} alt="range" />
            <div className="landingcards01_details">
              <h4>SUVS</h4>
              <a href="#"><i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div className="landingcards01_card">
            <img className='landingcards01_img1' src={img3} alt="range" />
            <div className="landingcards01_details">
              <h4>VANS</h4>
              <a href="#"><i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div className="landingcards01_card">
            <img className='landingcards01_img1' src={img4} alt="range" />
            <div className="landingcards01_details">
              <h4>ELECTRIC</h4>
              <a href="#"><i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing_Cards01;
