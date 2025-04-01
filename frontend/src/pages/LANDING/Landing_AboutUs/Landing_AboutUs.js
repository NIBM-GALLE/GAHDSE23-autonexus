import React from 'react'
import './Landing_AboutUs.css';
import img1 from '../../../assets/carpng1.png';

const Landing_AboutUs = () => {
  return (
    <div class="about" id="about">
  <section class="section__container steps__container" id="rent">
      <p class="section__subheader">HOW IT WORKS</p>
      <h2 class="section__header">Autonexus following 3 working steps</h2>
      <div class="steps__grid">
        <div class="steps__card">
          <span><i class='bx bx-search-alt-2'></i></span>
          <h4>Searh your items</h4>
          <p>
            Find Your Perfect Vehicle and Spare Parts with AutoNexus – Explore Our Extensive Network Today!
          </p>
        </div>
        <div class="steps__card">
          <span><i class='bx bxs-car-garage' ></i></span>
          <h4>Find garages neer to you</h4>
          <p>
            Easily Find Nearby Garages When You Break Down – Help is Just a Click Away!
          </p>
        </div>
        <div class="steps__card">
          <span><i class='bx bxs-user-account'></i></span>
          <h4>Sign in to Autonexus</h4>
          <p>
            Sign in to AutoNexus and access everything you need for the road!
          </p>
        </div>
      </div>
    </section>

    <section class="section__container service__container" >
      <div class="service__image">
        <img src={img1} alt="service" />
      </div>
      <div class="service__content">
        <p class="section__subheader">BEST SERVICES</p>
        <h2 class="section__header">
          Feel the best experience with our rental deals
        </h2>
        <ul class="service__list">
          <li>
            <span><i class='bx bxs-purchase-tag'></i></span>
            <div>
              <h4>Deals for every budget</h4>
              <p>
                From economy cars to luxury vehicles, we have something for
                everyone, ensuring you get the best value for your money.
              </p>
            </div>
          </li>
          <li>
            <span><i class='bx bxs-wallet'></i></span>
            <div>
              <h4>Best price guarantee</h4>
              <p>
                We ensure you get competitive rates in the market, so you can
                book with confidence knowing you're getting the best deal.
              </p>
            </div>
          </li>
          <li>
            <span><i class='bx bx-headphone' ></i></span>
            <div>
              <h4>Support 24/7</h4>
              <p>
                Our dedicated team is available 24/7 to assist you with any
                questions or concerns, ensuring a smooth rental experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
</div>
  )
}

export default Landing_AboutUs