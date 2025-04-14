import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Customer_Profile_Form.css';

const Customer_Profile_Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    address: '',
    province: '',
    district: '',
    postal_code: '',
    profile_picture: ''
  });
  const [previewImage, setPreviewImage] = useState('');
  const fileInputRef = useRef(null);
  const token = localStorage.getItem('token');

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Fetch existing profile details
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const profileRes = await axios.get('http://localhost:5000/api/customer/details', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (profileRes.data) {
          const updatedData = {
            ...profileRes.data,
            date_of_birth: formatDate(profileRes.data.date_of_birth)
          };
          setFormData(updatedData);
          
          // Set preview image if profile picture exists
          if (profileRes.data.profile_picture) {
            setPreviewImage(`http://localhost:5000/images/${profileRes.data.profile_picture}`);
          }
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload the image to server
      const uploadData = new FormData();
      uploadData.append('profile_image', file);

      axios.post('http://localhost:5000/api/customer/upload-profile-image', uploadData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        const imagePath = response.data.filename;
        setFormData(prev => ({ ...prev, profile_picture: imagePath }));
        // Update preview with the new uploaded image
        setPreviewImage(`http://localhost:5000/images/${imagePath}`);
      })
      .catch(err => {
        console.error('Error uploading image:', err);
        alert('Failed to upload image');
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/api/customer/details', formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      alert('Profile updated successfully');
    })
    .catch((err) => {
      console.error('Error updating profile:', err);
      alert('Failed to update profile');
    });
  };

  return (
    <form className="cus_profile_form_container" onSubmit={handleSubmit}>
      <div className="cus_profile_form_card">
        {/* Profile Image */}
        <div className="cus_profile_form_avatar_wrapper">
          <div className="cus_profile_form_avatar" onClick={handleImageClick}>
            {previewImage ? (
              <img src={previewImage} alt="Profile" className="cus_profile_form_image" />
            ) : (
              <i className="bx bx-user cus_profile_form_icon_user"></i>
            )}
            <div className="cus_profile_form_add_icon">
              <i className="bx bx-plus"></i>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Rest of your form fields remain the same */}
        {/* Name Section */}
        <div className="cus_profile_form_name_group">
          <div className="cus_profile_form_input_group name_row">
            <label>First Name</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
            </div>
          </div>

          <div className="cus_profile_form_input_group name_row">
            <label>Middle Name</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} placeholder="Middle Name" />
            </div>
          </div>
        </div>

        <div className="cus_profile_form_input_group">
          <label>Last Name</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
            </div>
        </div>

        <div className="cus_profile_form_input_group">
          <label>Date of Birth</label>
          <div className="cus_profile_form_input_icon_wrapper">
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="cus_profile_form_input_group">
          <label>Gender</label>
          <div className="cus_profile_form_radio_group">
            {['Male', 'Female', 'Other'].map((g) => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                /> {g}
              </label>
            ))}
          </div>
        </div>

        <div className="cus_profile_form_input_group">
          <label>Phone Number</label>
          <div className="cus_profile_form_input_icon_wrapper">
            <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="1234 5678 9101" />
            <i className="bx bx-phone cus_profile_form_input_icon_phone"></i>
          </div>
        </div>

        <div className="cus_profile_form_input_group">
          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" />
        </div>

        <div className="cus_profile_form_location_group">
          <div className="cus_profile_form_input_group location_row">
            <label>Province</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province" />
            </div>
          </div>

          <div className="cus_profile_form_input_group location_row">
            <label>District</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" />
            </div>
          </div>

          <div className="cus_profile_form_input_group location_row">
            <label>Postal Code</label>
            <div className="cus_profile_form_input_icon_wrapper">
              <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} placeholder="Postal Code" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="cus_profile_form_actions">
          <button type="submit" className="cus_profile_form_update_btn">Update Profile</button>
          <button type="button" className="cus_profile_form_cancel_btn" onClick={() => window.location.reload()}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default Customer_Profile_Form;