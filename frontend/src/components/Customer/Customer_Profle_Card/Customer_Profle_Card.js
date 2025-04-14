import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Customer_Profle_Card.css";

const Customer_Profle_Card = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/customer/fullprofile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUserData({
          ...res.data,
          // Ensure profile_picture has full URL if it exists
          profile_picture: res.data.profile_picture 
            ? `http://localhost:5000/images/${res.data.profile_picture}`
            : null
        });
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading profile...</div>;

  const fullName = `${userData.first_name || ''} ${userData.middle_name || ''} ${userData.last_name || ''}`.trim();

  // Function to convert string to Title Case
  const toTitleCase = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="profile-card">
      <div className="profile-layout">
        <div className="profile-left">
          <div className="profile-pic-container">
            <div className="profile-pic-placeholder">
              {userData.profile_picture ? (
                <img 
                  src={userData.profile_picture} 
                  alt="Profile" 
                  className="profile-pic-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = ''; // Remove broken image
                    e.target.parentElement.querySelector('.profile-pic-initial').style.display = 'block';
                  }}
                />
              ) : (
                <span className="profile-pic-initial">
                  {userData.username?.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
          </div>
          <div className="profile-info">
            <h3 className="profile-name">{userData.username}</h3>
            <div className="profile-actions">
              <button className="profile-action-btn">See public view</button>
              <button className="profile-action-btn">Profile settings</button>
            </div>
          </div>
        </div>
        
        <div className="vertical-separator"></div> 

        <div className="profile-details">
          <div className="detail-row"><span className="detail-value">{fullName}</span></div>
          <div className="detail-row"><span className="detail-value">{userData.email}</span></div>
          <div className="detail-row">
            <span className="detail-value">
              {userData.date_of_birth ? new Date(userData.date_of_birth).toISOString().split('T')[0] : ''}
            </span>
          </div>
          <div className="detail-row"><span className="detail-value">{userData.phone_number}</span></div>
          <div className="detail-row"><span className="detail-value">{toTitleCase(userData.gender)}</span></div>
          <div className="detail-row">
            <span className="detail-value">
              {userData.address ? toTitleCase(userData.address) : ''}
            </span>
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <span className="profile-location-time">
          © Galle, Sri Lanka – {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} local time
        </span>
      </div>
    </div>
  );
};

export default Customer_Profle_Card;