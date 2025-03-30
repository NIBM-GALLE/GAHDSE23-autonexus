import React from 'react'
import './Landing_Service.css';
import img1 from '../../assets/carpng6.png';

export const Landing_Service = () => {
  return (
    <div className="landingservice__service" id="service">
      <section className="landingservice__section__container landingservice__experience__container" id="ride">
        <p className="landingservice__section__subheader">CUSTOMER EXPERIENCE</p>
        <h2 className="landingservice__section__header">
          We are ensuring the best customer experience
        </h2>
        <div className="landingservice__experience__content">
          <div className="landingservice__experience__card">
            <span><i className='bx bxs-purchase-tag'></i></span>
            <h4>Competitive pricing</h4>
          </div>
          <div className="landingservice__experience__card">
            <span><i className='bx bx-credit-card'></i></span>
            <h4>Easier Buy On Your Budget</h4>
          </div>
          <div className="landingservice__experience__card">
            <span><i className='bx bxs-bank' ></i></span>
            <h4>Most Flexible Payment Plans</h4>
          </div>
          <div className="landingservice__experience__card">
            <span><i className='bx bxs-award'></i></span>
            <h4>The Best Extended Auto Warranties</h4>
          </div>
          <div className="landingservice__experience__card">
            <span><i className='bx bx-headphone' ></i></span>
            <h4>Roadside Assistance 24/7</h4>
          </div>
          <div className="landingservice__experience__card">
            <span><i className='bx bxs-car'></i></span>
            <h4>Your Choice Of Mechanic</h4>
          </div>
          <img src={img1} alt="experience" />
        </div>
      </section>
    </div>
  )
}
