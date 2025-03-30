import React from 'react'
import img1 from '../../assets/store.jpg';
import img2 from '../../assets/play.png';
import img3 from '../../assets/download.png';
import './Landing_Download.css';

const Landing_Download = () => {
  return (
    <div>
    <section class="landingdownload_section__container landingdownload_container" id="contact">
        <div class="landingdownload_grid">
          <div class="landingdownload_content">
            <h2 class="landingdownload_section__header">Download the free AUTONEXUS app</h2>
            <p>
              Download the AUTONEXUS app to manage your bookings, find exclusive
              deals, and access 24/7 support, all from your mobile device.
            </p>
            <div class="landingdownload_links">
              <a href="#">
                <img src={img1} alt="app store" />
              </a>
              <a href="#">
                <img src={img2} alt="play" />
              </a>
            </div>
          </div>
          <div class="landingdownload_image">
            <img src={img3} alt="download" />
          </div>
        </div>
      </section>
</div>

  )
}

export default Landing_Download