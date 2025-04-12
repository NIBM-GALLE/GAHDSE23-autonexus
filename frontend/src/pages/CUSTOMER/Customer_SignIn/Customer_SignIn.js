import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Customer_SignIn.css';
import img1 from '../../../assets/car_img01.png';

const Customer_SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    navigate("/cussignup");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and Password are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/cuslogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate("/cushome");
      } else {
        setErrorMessage(data.message || 'Something went wrong, please try again');
      }
    } catch (error) {
      setErrorMessage('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <div className="contanier">
      <div className="hero">
        <div className="signcontainer">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-up-form" onSubmit={handleSignIn}>
                <h2 className="title">Sign In</h2>

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={handleEmailChange} 
                  />
                </div>

                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                  />
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input type="submit" className="btn" value="Sign In" />

                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel right-panel">
              <div className="content">
                <h3>New here?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button className="btn transparent" id="sign-in-btn" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
              <img src={img1} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_SignIn;
