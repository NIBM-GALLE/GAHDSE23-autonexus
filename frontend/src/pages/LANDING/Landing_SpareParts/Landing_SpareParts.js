import React from 'react'
import './Landing_SpareParts.css';
import img1 from '../../../assets/spares01.jpg';

const Landing_SpareParts = () => {
  return (
    <div class="landing-sparepartspage">
        <section class="landingspareparts_section landingspareparts_featured-car" id="featured-car">
            <h1 class="landingspareparts_h1 landingspareparts_head-title">Most popular spare parts deals</h1>
            <div class="landingspareparts_container">
                <div class="landingspareparts_title-wrapper">
                    <h2 class="landingspareparts_h2 landingspareparts_section-title">Featured spare parts</h2>
                    <a href="#" class="landingspareparts_featured-car-link">
                        <span>View more</span>
                        <i class="bx bx-arrow-back"></i>
                    </a>
                </div>

                <ul class="landingspareparts_featured-car-list">

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingspareparts_featured-car-card">
                            <figure class="landingspareparts_card-banner">
                                <img src={img1} alt="Engine 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingspareparts_card-content">
                                <div class="landingspareparts_card-title-wrapper">
                                    <h3 class="landingspareparts_h3 landingspareparts_card-title">
                                        <p href="#">Engine</p>
                                    </h3>
                                    
                                </div>
                                <ul class="landingspareparts_card-list">
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-car'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bxs-time'></i>
                                        <span class="landingspareparts_card-item-text">2022</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class='bx bx-barcode-reader'></i>
                                        <span class="landingspareparts_card-item-text">BMW</span>
                                    </li>
                                    <li class="landingspareparts_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingspareparts_card-item-text">New</span>
                                    </li>
                                </ul>
                                <div class="landingspareparts_card-price-wrapper">
                                    <p class="landingspareparts_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingspareparts_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    </div>

  )
}

export default Landing_SpareParts