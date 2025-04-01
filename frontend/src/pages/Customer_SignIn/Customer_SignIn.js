import React from 'react';
import './Customer_SignIn.css';
import img1 from '../../assets/car_img01.png';

const Customer_SignIn = () => {
  return (
  <div class="contanier">
    <div class="hero">
      <div class="signcontainer">
        <div class="forms-container">
          <div class="signin-signup">

            <form action="#" class="sign-up-form">
              <h2 class="title">Sign In</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>

          </div>
        </div>

        <div class="panels-container">
          <div class="panel right-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button class="btn transparent" id="sign-in-btn">
                Sign up
              </button>
            </div>
            <img src={img1} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Customer_SignIn