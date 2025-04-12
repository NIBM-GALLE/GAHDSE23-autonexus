import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Customer_Register.css';
import img1 from '../../../assets/car_img01.png';

const Customer_Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/cusregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
  
        localStorage.setItem('token', data.token);
        navigate("/cussignin");
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Server error, please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="customer_register_container">
      <div className="customer_register_hero">
        <div className="customer_register_signcontainer">
          <div className="customer_register_forms-container">
            <div className="customer_register_signin-signup">
              <form onSubmit={handleSignUp} className="customer_register_sign-up-form">
                <h2 className="customer_register_title">Sign Up</h2>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="customer_register_input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="customer_register_input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="customer_register_input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input type="submit" className="customer_register_btn" value="Sign up" />

                <p className="customer_register_social-text">Or Sign up with social platforms</p>
                <div className="customer_register_social-media">
                  <a href="#" className="customer_register_social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="customer_register_social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="customer_register_social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="customer_register_social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="customer_register_panels-container">
            <div className="customer_register_panel customer_register_right-panel">
              <div className="customer_register_content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button className="customer_register_btn customer_register_transparent" id="sign-in-btn" onClick={() => navigate("/cussignin")}>
                  Sign up
                </button>
              </div>
              <img src={img1} className="customer_register_image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Register;
