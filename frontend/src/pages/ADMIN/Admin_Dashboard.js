import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin_Dashboard.css';
import img1 from "../../assets/alogo1.png";

const Admin_Dashboard = () => {

  const [count, setCount] = useState(null);
  const [error, setError] = useState('');
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/customers/count')
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((err) => {
        setError('Failed to fetch customer count');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <nav className="admin_dashboard_top_navbar">
        <div className="admin_dashboard_nav_left">
          <span className="admin_dashboard_nav_title">Admin Dashboard</span>
        </div>
        <div className="admin_dashboard_nav_right">
          <a href="#" className="admin_dashboard_nav_link">Home</a>
          <a href="#" className="admin_dashboard_nav_link">About</a>
          <a href="#" className="admin_dashboard_nav_link">Contact</a>
        </div>
      </nav>

      <div className={`admin_dashboard_sidebar ${isSidebarActive ? 'admin_dashboard_active' : ''}`}>
        <div className="admin_dashboard_logo_details">
          <span className="admin_dashboard_logo_name"><img src={img1} alt="Fashion Banner" className="customer_navbar-image" /></span>
        </div>
        <ul className="admin_dashboard_nav_links">
          <li>
            <a href="#" className="admin_dashboard_active">
              <i className="bx bx-grid-alt"></i>
              <span className="admin_dashboard_links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-box"></i>
              <span className="admin_dashboard_links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul"></i>
              <span className="admin_dashboard_links_name">Order list</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="admin_dashboard_links_name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-coin-stack"></i>
              <span className="admin_dashboard_links_name">Stock</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="admin_dashboard_links_name">Total order</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="admin_dashboard_links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-message"></i>
              <span className="admin_dashboard_links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="admin_dashboard_links_name">Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="admin_dashboard_links_name">Setting</span>
            </a>
          </li>
          <li className="admin_dashboard_log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="admin_dashboard_links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>

      <section className="admin_dashboard_home_section">
        <nav>
          <div className="admin_dashboard_sidebar_button" onClick={toggleSidebar}>
            <i className="bx bx-menu admin_dashboard_sidebarBtn"></i>
            <span className="admin_dashboard_dashboard">AUTONEXUS</span>
          </div>
          <div className="admin_dashboard_search_box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="admin_dashboard_profile_details">
            <img src="images/profile.jpg" alt="" />
            <span className="admin_dashboard_admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>

        {/* Home Content */}
        <div className="admin_dashboard_home_content">
          <div className="admin_dashboard_overview_boxes">
            <div className="admin_dashboard_box">
              <div className="admin_dashboard_right_side">
                <div className="admin_dashboard_box_topic">Total Customers</div>
                <div className="admin_dashboard_number">
                {count !== null ? count.toLocaleString() : error || 'Loading...'}
                </div>
                <div className="admin_dashboard_indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="admin_dashboard_text">Click to View</span>
                </div>
              </div>
              <i className="bx bx-cart-alt admin_dashboard_cart"></i>
            </div>
            <div className="admin_dashboard_box">
              <div className="admin_dashboard_right_side">
                <div className="admin_dashboard_box_topic">Total Car Sales</div>
                <div className="admin_dashboard_number">38,876</div>
                <div className="admin_dashboard_indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="admin_dashboard_text">Click to View</span>
                </div>
              </div>
              <i className="bx bxs-cart-add admin_dashboard_cart admin_dashboard_two"></i>
            </div>
            <div className="admin_dashboard_box">
              <div className="admin_dashboard_right_side">
                <div className="admin_dashboard_box_topic">Total Spare Shops</div>
                <div className="admin_dashboard_number">$12,876</div>
                <div className="admin_dashboard_indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="admin_dashboard_text">Click to View</span>
                </div>
              </div>
              <i className="bx bx-cart admin_dashboard_cart admin_dashboard_three"></i>
            </div>
            <div className="admin_dashboard_box">
              <div className="admin_dashboard_right_side">
                <div className="admin_dashboard_box_topic">Total Garages</div>
                <div className="admin_dashboard_number">11,086</div>
                <div className="admin_dashboard_indicator">
                  <i className="bx bx-down-arrow-alt admin_dashboard_down"></i>
                  <span className="admin_dashboard_text">Click to View</span>
                </div>
              </div>
              <i className="bx bxs-cart-download admin_dashboard_cart admin_dashboard_four"></i>
            </div>
          </div>

          <div className="admin_dashboard_sales_boxes">
            <div className="admin_dashboard_recent_sales admin_dashboard_box">
              <div className="admin_dashboard_title">Recent Sales</div>
              <div className="admin_dashboard_sales_details">
              <ul className="admin_dashboard_details">
                <li className="admin_dashboard_topic">Date</li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
                <li><a href="#">02 Jan 2021</a></li>
              </ul>
              <ul className="admin_dashboard_details">
                <li className="admin_dashboard_topic">Customer</li>
                <li><a href="#">Alex Doe</a></li>
                <li><a href="#">David Mart</a></li>
                <li><a href="#">Roe Parter</a></li>
                <li><a href="#">Diana Penty</a></li>
                <li><a href="#">Martin Paw</a></li>
                <li><a href="#">Doe Alex</a></li>
                <li><a href="#">Aiana Lexa</a></li>
                <li><a href="#">Rexel Mags</a></li>
                <li><a href="#">Tiana Loths</a></li>
              </ul>
              <ul className="admin_dashboard_details">
                <li className="admin_dashboard_topic">Customer</li>
                <li><a href="#">Alex Doe</a></li>
                <li><a href="#">David Mart</a></li>
                <li><a href="#">Roe Parter</a></li>
                <li><a href="#">Diana Penty</a></li>
                <li><a href="#">Martin Paw</a></li>
                <li><a href="#">Doe Alex</a></li>
                <li><a href="#">Aiana Lexa</a></li>
                <li><a href="#">Rexel Mags</a></li>
                <li><a href="#">Tiana Loths</a></li>
              </ul>
              <ul className="admin_dashboard_details">
                <li className="admin_dashboard_topic">Customer</li>
                <li><a href="#">Alex Doe</a></li>
                <li><a href="#">David Mart</a></li>
                <li><a href="#">Roe Parter</a></li>
                <li><a href="#">Diana Penty</a></li>
                <li><a href="#">Martin Paw</a></li>
                <li><a href="#">Doe Alex</a></li>
                <li><a href="#">Aiana Lexa</a></li>
                <li><a href="#">Rexel Mags</a></li>
                <li><a href="#">Tiana Loths</a></li>
              </ul>
              </div>
              <div className="admin_dashboard_button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="admin_dashboard_top_sales admin_dashboard_box">
              <div className="admin_dashboard_title">Top Selling Product</div>
              <ul className="admin_dashboard_top_sales_details">
              <li>
                <a href="#">
                  <img src="images/sunglasses.jpg" alt="" />
                  <span className="admin_dashboard_product">Vuitton Sunglasses</span>
                </a>
                <span className="admin_dashboard_price">$1107</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/jeans.jpg" alt="" />
                  <span className="admin_dashboard_product">Hourglass Jeans </span>
                </a>
                <span className="admin_dashboard_price">$1567</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/nike-min.jpg" alt="" />
                  <span className="admin_dashboard_product">Nike Sport Shoe</span>
                </a>
                <span className="admin_dashboard_price">$1234</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/scarves.jpg" alt="" />
                  <span className="admin_dashboard_product">Hermes Silk Scarves.</span>
                </a>
                <span className="admin_dashboard_price">$2312</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/blueBag.jpg" alt="" />
                  <span className="admin_dashboard_product">Succi Ladies Bag</span>
                </a>
                <span className="admin_dashboard_price">$1456</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/bag.jpg" alt="" />
                  <span className="admin_dashboard_product">Gucci Womens's Bags</span>
                </a>
                <span className="admin_dashboard_price">$2345</span>
              </li>

              <li>
                <a href="#">
                  <img src="images/addidas.jpg" alt="" />
                  <span className="admin_dashboard_product">Addidas Running Shoe</span>
                </a>
                <span className="admin_dashboard_price">$2345</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/shirt.jpg" alt="" />
                  <span className="admin_dashboard_product">Bilack Wear's Shirt</span>
                </a>
                <span className="admin_dashboard_price">$1245</span>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin_Dashboard;