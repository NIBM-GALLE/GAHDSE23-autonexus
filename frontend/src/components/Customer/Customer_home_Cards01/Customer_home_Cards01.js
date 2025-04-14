import React from 'react';
import "./Customer_home_Cards01.css";

const Customer_home_Cards01 = ({ userData }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-pic-container">
          <div className="profile-pic-placeholder">
          </div>
        </div>
        <div className="profile-info">
          <h3 className="profile-name">username </h3>
          <div className="profile-actions">
            <button className="profile-action-btn">See public view</button>
            <button className="profile-action-btn">Profile settings</button>
          </div>
        </div>
      </div>
      <div className="profile-details">
        <div className="detail-row">
          <span className="detail-value">Kalana Kalhara Anushka </span>
        </div>
        <div className="detail-row">
          <span className="detail-value">Kalana223@gmail.com </span>
        </div>
        <div className="detail-row">
          <span className="detail-value">2001-06-22 </span>
        </div>
        <div className="detail-row">
          <span className="detail-value">0713567889 </span>
        </div>
        <div className="detail-row">
          <span className="detail-value">Male </span>
        </div>
        <div className="detail-row">
          <span className="detail-value">N0:553, Kamal Mawatha </span>
        </div>
      </div>
      <div className="profile-footer">
        <span className="profile-location-time">
          © Galle, Sri Lanka – {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} local time
        </span>
      </div>
    </div>
  );
};

export default Customer_home_Cards01;