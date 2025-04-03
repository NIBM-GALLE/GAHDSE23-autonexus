import React from 'react'
import './Customers_Profile.css'
import { IoMdTimer } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdArchive } from "react-icons/md";
import img1 from '../../../assets/banner.jpg';
import img2 from '../../../assets/profile-image.png';
import { SlArrowDown } from "react-icons/sl";



const Customers_Profile = () => {
  return (
    <div className='customers_profile_div'>
      <div className='customers_profile_main'>
        <div className="customers_profile_upper">
          <div className="customers_profile_banner_image">
            <img src={img1} alt="Banner image"/>
          </div>
          <div className="customers_profile_details">
            <div className="customers_profile_pic">
              <img src={img2}/>
            </div>
            <div className="customers_profile_username">Kalana De Silva</div>
            <div className="customers_profile_table customers_profile_menu_buttons">
              <div className="customers_profile_table_data">
                <div className="customers_profile_menu_button"><i className="material-icons"><MdArchive /></i><span>Activity log</span></div>
              </div>
              <div className="customers_profile_table_data">
                <div className="customers_profile_menu_button"><i className="material-icons"><MdArchive /></i><span>Privacy</span></div>
              </div>
            </div>
          </div>
          <div className="customers_profile_black_gradient"></div>
        </div>
        <div className="customers_profile_main_content">
          <div className="customers_profile_table">
            <div className="customers_profile_table_data customers_profile_left_column">
              <div className="customers_profile_content">
                <div className="customers_profile_content_label">
                  <i className="customers_profile_label_icon customers_profile_intro_icon"></i>
                  <span>Profile</span>
                  <div className="customers_profile_label_action"><i className="material-icons"><MdArchive /></i></div>
                </div>
                <div className="customers_profile_intro_box">

                  <div className="customers_profile_user_location"><i className="material-icons"><MdArchive /></i>Kalana De Silva</div>
                  <div className="customers_profile_user_location"><i className="material-icons"><MdArchive /></i>No 554, Galle, Sri Lanka</div>
                  <div className="customers_profile_user_location"><i className="material-icons"><MdArchive /></i>kalana23@gmail.com</div>
                  <div className="customers_profile_user_location"><i className="material-icons"><MdArchive /></i>0713678990</div>
                </div>
              </div>
              <div className="customers_profile_content customers_profile_left_margin">
                <div className="customers_profile_content_label">
                  <i className="customers_profile_label_icon customers_profile_photos_icon"></i>
                  <span>Photos</span>
                  <div className="customers_profile_label_action customers_profile_down_icon"><i className="material-icons"><SlArrowDown /></i></div>
                </div>
                <div className="customers_profile_photos">
                  <div className="customers_profile_table">
                    <div className="customers_profile_table_row">
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                    </div>
                    <div className="customers_profile_table_row">
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                    </div>
                    <div className="customers_profile_table_row">
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                      <div className="customers_profile_table_data"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers_profile_content customers_profile_left_margin">
                <div className="customers_profile_content_label">
                  <i className="customers_profile_label_icon customers_profile_know_icon"></i>
                  <span>Did You Know<i className="customers_profile_know_number">1</i></span>
                </div>
                <div>
                  <div className="customers_profile_question_ad_container">
                    <a href="#" className="customers_profile_question_ad">
                      <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png"/>
                      <span>My favorite superhero is...</span>
                    </a>
                  </div>
                  <div className="customers_profile_question_ad_container">
                    <a href="#" className="customers_profile_question_ad customers_profile_add_question">
                      <i className="material-icons"><MdArchive /></i>
                      <span>Add Answer</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="customers_profile_terms_box">
                <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Advertising</a> <a href="#">Ad Choices</a> <a href="#">Cookies</a> <span className="customers_profile_terms_more">More<i className="material-icons">arrow_drop_down</i></span>
                <div className="customers_profile_copyright">Facebook &copy; <span className="customers_profile_current_year"></span></div>
              </div>
            </div>
            <div className="customers_profile_table_data customers_profile_middle_column">
              <div className="customers_profile_middle_margin customers_profile_profile_tabs">
                <div className="customers_profile_table">
                  <div className="customers_profile_table_data">
                    <div className="customers_profile_table customers_profile_profile_tabs_menu">
                      <div className="customers_profile_table_data customers_profile_active"><i className="material-icons"><IoMdTimer /></i><span>TIMELINE</span></div>
                      <div className="customers_profile_table_data"><i className="material-icons"><BsPeopleFill /></i><span>FRIENDS</span></div>
                      <div className="customers_profile_table_data"><i className="material-icons"><IoMdPhotos /></i><span>PHOTOS</span></div>
                      <div className="customers_profile_table_data"><i className="material-icons"><MdOutlineExplore /></i><span>ABOUT</span></div>
                      <div className="customers_profile_table_data"><i className="material-icons"><MdArchive /></i><span>ARCHIVE</span></div>
                    </div>
                  </div>
                  <div className="customers_profile_table_data customers_profile_profile_tab_menu"><i className="material-icons"><SlArrowDown /></i></div>
                </div>
              </div>
              <div className="customers_profile_middle_margin customers_profile_composer">
                <div className="customers_profile_composer_tabs_cover">
                  <div className="customers_profile_table customers_profile_composer_tabs">
                    <div className="customers_profile_table_data customers_profile_active"><i className="material-icons"><MdArchive /></i><span>Make Post</span></div>
                    <div className="customers_profile_table_data"><i className="material-icons"><MdArchive /></i><span>Photo/Video</span></div>
                    <div className="customers_profile_table_data"><i className="material-icons"><MdArchive /></i><span>Live Video</span></div>
                    <div className="customers_profile_table_data"><i className="material-icons"><MdArchive /></i><span>Life Event</span></div>
                  </div>
                </div>
                <div className="customers_profile_composer_main">
                  <div className="customers_profile_table">
                    <div className="customers_profile_table_data customers_profile_profile_composer_image"><img src="https://singhimalaya.github.io/Codepen/assets/img/others/dp-1.webp" alt="Profile pic"/></div>
                    <div className="customers_profile_table_data customers_profile_composer_input">
                      <input type="text" placeholder="What's on your mind?"/>
                    </div>
                  </div>
                  <div className="customers_profile_insert_emoji"><i className="material-icons"><MdArchive /></i></div>
                </div>
              </div>
              <div>
                <div className="customers_profile_post">
                  <div className="customers_profile_table">
                    <a href="#" className="customers_profile_table_data customers_profile_post_profile_pic"><img src="https://singhimalaya.github.io/Codepen/assets/img/others/dp-2.webp" alt="Rajeev's profile pic"/></a>
                    <div className="customers_profile_table_data customers_profile_post_header">
                      <div className="customers_profile_post_user_info">
                        <a href="#">Rajeev Singh</a> shared a memory with <a href="#">Himalaya Singh</a>
                      </div>
                      <div className="customers_profile_post_date">
                        <i className="material-icons"><MdArchive /></i>
                        <span>January 28, 2015</span>
                      </div>
                    </div>
                    <div className="customers_profile_table_data customers_profile_post_options"><i className="material-icons"><SlArrowDown /></i></div>
                  </div>
                  <a href="#" className="customers_profile_post_content_view">
                    <img src="https://placehold.co/600x600"/>
                  </a>
                  <div>
                    <div className="customers_profile_post_actions">
                      <div className="customers_profile_post_action customers_profile_like"><i className="material-icons"><MdArchive /></i><span>25</span></div>
                      <div className="customers_profile_post_action customers_profile_comment"><i className="material-icons"><MdArchive /></i><span>1</span></div>
                      <div className="customers_profile_post_action customers_profile_share"><i className="material-icons"><MdArchive /></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers_profile_loading"><i className="material-icons"><MdArchive /></i></div>
            </div>
            <div className="customers_profile_table_data customers_profile_right_column">
              <div className="customers_profile_chat_bar">
                <div className="customers_profile_chat_label"><i className="material-icons"><MdArchive /></i><span>Contacts</span></div>
                <div className="customers_profile_contacts">
                  <div className="customers_profile_online_contact customers_profile_active">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact customers_profile_active">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact customers_profile_active">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact customers_profile_active">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact">
                    <a href="#"><img src="https://placehold.co/50x50"/></a>
                  </div>
                  <div className="customers_profile_online_contact customers_profile_contact_settings"><i className="material-icons"><MdArchive /></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers_Profile