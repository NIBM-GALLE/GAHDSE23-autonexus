import React from 'react';
import './Customer_Profile.css';

const Customer_Profile = () => {
  return (
    <div class="customer_customer_profile_container">
    <div class="customer_profile-card">
      <div class="customer_profile-header">
        <div class="main-customer_profile">
          <div class="customer_profile-image"></div>
          <div class="customer_profile-names">
            <h1 class="customer_profile_username">Mohammad.S</h1>
            <small class="customer_profile_page-customer_profile_title">Front-End Developer</small>
          </div>
        </div>
      </div>
  
      <div class="customer_profile-body">
        <div class="customer_profile-actions">
          <button class="customer_profile_follow">follow</button>
          <button class="customer_profile_message">message</button>
          <section class="customer_profile_bio">
            <div class="customer_profile_bio-header">
              <i class="fa fa-info-circle"></i>
              bio
            </div>
            <p class="customer_profile_bio-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </section>
        </div>
  
        <div class="account-info">
          <div class="customer_profile_data">
            <div class="important-customer_profile_data">
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">104</h3>
                <small class="customer_profile_title">Post</small>
              </section>
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">21K</h3>
                <small class="customer_profile_title">follower</small>
              </section>
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">51</h3>
                <small class="customer_profile_title">following</small>
              </section>
            </div>
            <div class="other-customer_profile_data">
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">41K</h3>
                <small class="customer_profile_title">Likes</small>
              </section>
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">12K</h3>
                <small class="customer_profile_title">Comments</small>
              </section>
              <section class="customer_profile_data-item">
                <h3 class="customer_profile_value">2K</h3>
                <small class="customer_profile_title">Saved</small>
              </section>
            </div>
          </div>
  
          <div class="customer_profile_social-media">
            <span>follow me on:</span>
            <a href="" class="customer_profile_media-link"><i class="fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/MammadSahragard" class="customer_profile_media-link"><i class="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/mohammadsahragard/" class="customer_profile_media-link"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/mammad.sahragard/" class="customer_profile_media-link"><i class="fab fa-instagram-square"></i></a>
            <a href="https://github.com/MohammadSahragard" class="customer_profile_media-link"><i class="fab fa-github-square"></i></a>
          </div>
  
          <div class="customer_profile_last-post">
            <div class="customer_profile_post-cover">
              <span class="customer_profile_last-badge">Last Post</span>
            </div>
            <h3 class="post-customer_profile_title">3D Layer</h3>
            <button class="customer_profile_post-CTA">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Customer_Profile