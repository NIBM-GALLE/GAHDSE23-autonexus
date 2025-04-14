import React, { useState, useEffect } from 'react';
import "./Customer_Home.css";
import axios from 'axios'; 
import img1 from "../../../assets/range-1.jpg";
import img2 from "../../../assets/banner001.jpg"; 
import Customer_Navbar from '../../../components/CUSTOMER/Customer_Navbar/Customer_Navbar';
import Customer_Profle_Card from '../../../components/CUSTOMER/Customer_Profle_Card/Customer_Profle_Card';
import Customer_home_Cards01 from '../../../components/CUSTOMER/Customer_home_Cards01/Customer_home_Cards01';

const Customer_Home = () => {
  const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    useEffect(() => {
      fetchUserData(); 
    }, []);

  return (
    <div className="customer_home_container">
      <Customer_Navbar />
    <div className="customer_home">
      <header className="customer_home_header">
        <div className="customer_home_top-bar">
          <span>Hello! {userData ? userData.username : 'Loading...'}</span>
          <span>USD $ | ENGLISH</span>
        </div>
        <div className="customer_home_main-header">
          <div className="customer_home_logo">Welcome</div>
          <nav className="customer_home_nav-menu">
            <ul className="customer_home_nav-list">
              <li className="customer_home_nav-item"><a href="#">Home</a></li>
              <li className="customer_home_nav-item"><a href="#">Categories</a></li>
              <li className="customer_home_nav-item"><a href="#">Men's</a></li>
              <li className="customer_home_nav-item"><a href="#">Women's</a></li>
              <li className="customer_home_nav-item"><a href="#">Jewelry</a></li>
              <li className="customer_home_nav-item"><a href="#">Perfume</a></li>
              <li className="customer_home_nav-item"><a href="#">Blog</a></li>
              <li className="customer_home_nav-item"><a href="#">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="customer_home_hero">
        <div className="customer_home_hero-text">
          <p className="customer_home_hero-subtitle">Trending Item</p>
          <h1 className="customer_home_hero-title">WOMEN'S LATEST FASHION SALE</h1>
          <p className="customer_home_hero-price">starting at $20.00</p>
          <button className="customer_home_hero-button">SHOP NOW</button>
        </div>
        <img src={img2} alt="Fashion Banner" className="customer_home_hero-image" />
      </section>

      <section className="customer_home_categories">
        <div className="customer_home_category-box">Dress & Frock</div>
        <div className="customer_home_category-box">Winter Wear</div>
        <div className="customer_home_category-box">Glasses & Lens</div>
        <div className="customer_home_category-box">Shorts & Jeans</div>
      </section>

      <div className="customer_home_content">
        <div className="customer_home_sidebar">
          <h3 className="customer_home_sidebar-title">Category</h3>
          <div className="customer_home_sidebar-card-list">
            <div className="customer_home_sidebar-card">
              <i className="fas fa-tshirt"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-shoe-prints"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-gem"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-spray-can"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-paint-brush"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-glasses"></i> Cars
            </div>
            <div className="customer_home_sidebar-card">
              <i className="fas fa-shopping-bag"></i> Cars
            </div>
          </div>

          <h3 className="customer_home_sidebar-title">Best Sellers</h3>
          <div className="customer_home_sidebar-card-list">
            <div className="customer_home_sidebar-card">
              <img src={img1} alt="Baby Fabric Shoes" />
              <span>Cars, New Motor Cars - $4.00</span>
            </div>
            <div className="customer_home_sidebar-card">
              <img src={img1} alt="Men's Hoodie T-Shirt" />
              <span>Cars, New Motor Cars - $7.00</span>
            </div>
            <div className="customer_home_sidebar-card">
              <img src={img1} alt="Girls T-Shirt" />
              <span>Cars, New Motor Cars - $3.00</span>
            </div>
            <div className="customer_home_sidebar-card">
              <img src={img1} alt="Woolen Hat for Men" />
              <span>Cars, New Motor Cars - $12.00</span>
            </div>
          </div>
        </div>

        <section className="customer_home_product-section">
          <Customer_Profle_Card/>
          <div className="customer_home_section-title">New Arrivals</div>
          <div className="customer_home_product-grid">
            <div className="customer_home_product-card">
              <img src={img1} alt="Relaxed Short Full Sleeve" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$45.00 <del className="customer_home_product-old-price">$120.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Girls Pnk Embro Design" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$61.00 <del className="customer_home_product-old-price">$90.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Black Floral Wrap Midi" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$76.00 <del className="customer_home_product-old-price">$250.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Pure Garment Dyed" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$88.00 <del className="customer_home_product-old-price">$310.00</del></p>
            </div>
          </div>

          <div className="customer_home_section-title">Trending</div>
          <div className="customer_home_product-grid">
            <div className="customer_home_product-card">
              <img src={img1} alt="Running & Trekking Shoes" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$49.00 <del className="customer_home_product-old-price">$150.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Trekking & Running" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$78.00 <del className="customer_home_product-old-price">$360.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Women's Party Wear" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$94.00 <del className="customer_home_product-old-price">$420.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Sports Claw Women's Shoes" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$54.00 <del className="customer_home_product-old-price">$650.00</del></p>
            </div>
          </div>

          <div className="customer_home_section-title">Top Rated</div>
          <div className="customer_home_product-grid">
            <div className="customer_home_product-card">
              <img src={img1} alt="Pocket Watch Leather" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$50.00 <del className="customer_home_product-old-price">$340.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Silver Deer Heart Necklace" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$84.00 <del className="customer_home_product-old-price">$390.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Titan 100 Ml Perfume" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$42.00 <del className="customer_home_product-old-price">$100.00</del></p>
            </div>
            <div className="customer_home_product-card">
              <img src={img1} alt="Men's Leather Reversible Belt" className="customer_home_product-image" />
              <h4 className="customer_home_product-name">New Motor Cars</h4>
              <p className="customer_home_product-price">$24.00 <del className="customer_home_product-old-price">$100.00</del></p>
            </div>
          </div>

          <div className="customer_home_deal-section">
            <img src={img1} alt="Deal of the day" className="customer_home_deal-image" />
            <div className="customer_home_deal-content">
              <h3 className="customer_home_deal-title">Deal Of The Day</h3>
              <p className="customer_home_deal-description"><strong>Cars, New Motor Cars</strong></p>
              <p className="customer_home_deal-price"><span className="customer_home_deal-current-price">$150.00</span> <del className="customer_home_deal-old-price">$200.00</del></p>
              <button className="customer_home_deal-button">ADD TO CART</button>
              <p className="customer_home_deal-stock">Already Sold: 20 / Available: 40</p>
              <div className="customer_home_countdown">Hurry Up! Offer ends in: 360 Days 24 Hours 59 Min 00 Sec</div>
            </div>
          </div>
          
          <div className="customer_home_deal-section">
            <img src={img1} alt="Deal of the day" className="customer_home_deal-image" />
            <div className="customer_home_deal-content">
              <h3 className="customer_home_deal-title">Deal Of The Day</h3>
              <p className="customer_home_deal-description"><strong>Cars, New Motor Cars</strong></p>
              <p className="customer_home_deal-price"><span className="customer_home_deal-current-price">$150.00</span> <del className="customer_home_deal-old-price">$200.00</del></p>
              <button className="customer_home_deal-button">ADD TO CART</button>
              <p className="customer_home_deal-stock">Already Sold: 20 / Available: 40</p>
              <div className="customer_home_countdown">Hurry Up! Offer ends in: 360 Days 24 Hours 59 Min 00 Sec</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Customer_Home;
