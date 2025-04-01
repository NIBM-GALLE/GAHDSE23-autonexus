import React from 'react'
import './Lnading_VehiclePage.css';
import img1 from '../../../assets/car-1.jpg';  

function Lnading_VehiclePage() {
  return (
    <div class="landing-vehiclepage">
        <section class="landingvehicle_section landingvehicle_featureds-car" id="featured-car">
            <h1 class="landingvehicle_h1 landingvehicle_headtitle">Most popular car deals</h1>
            <div class="landingvehicle_container">
                <div class="landingvehicle_title-wrapper">
                    <h2 class="landingvehicle_h2 landingvehicle_section-title">Featured cars</h2>
                    <a href="#" class="landingvehicle_featured-car-link">
                        <span>View more</span>
                        <i class="bx bx-arrow-back"></i>
                    </a>
                </div>

                <ul class="landingvehicle_featured-car-list">

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">Toyota RAV4</p>
                                    </h3>
                                    <data class="year" value="2021">2021</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class='bx bxs-zap'></i>
                                        <span class="landingvehicle_card-item-text">Hybrid</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">6.1km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="BMW 3 Series 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">BMW 3 Series</p>
                                    </h3>
                                    <data class="year" value="2019">2019</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-gas-pump"></i>
                                        <span class="landingvehicle_card-item-text">Gasoline</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">8.2km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">Toyota RAV4</p>
                                    </h3>
                                    <data class="year" value="2021">2021</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class='bx bxs-zap'></i>
                                        <span class="landingvehicle_card-item-text">Hybrid</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">6.1km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="BMW 3 Series 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">BMW 3 Series</p>
                                    </h3>
                                    <data class="year" value="2019">2019</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-gas-pump"></i>
                                        <span class="landingvehicle_card-item-text">Gasoline</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">8.2km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">Toyota RAV4</p>
                                    </h3>
                                    <data class="year" value="2021">2021</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class='bx bxs-zap'></i>
                                        <span class="landingvehicle_card-item-text">Hybrid</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">6.1km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$440</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="landingvehicle_featured-car-card">
                            <figure class="card-banner">
                                <img src={img1} alt="BMW 3 Series 2019" loading="lazy" width="440" height="300" class="w-100"/>
                            </figure>
                            <div class="landingvehicle_card-content">
                                <div class="landingvehicle_card-title-wrapper">
                                    <h3 class="landingvehicle_h3 landingvehicle_card-title">
                                        <p href="#">BMW 3 Series</p>
                                    </h3>
                                    <data class="year" value="2019">2019</data>
                                </div>
                                <ul class="landingvehicle_card-list">
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-user"></i>
                                        <span class="landingvehicle_card-item-text">4 People</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-gas-pump"></i>
                                        <span class="landingvehicle_card-item-text">Gasoline</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-tachometer"></i>
                                        <span class="landingvehicle_card-item-text">8.2km / 1-litre</span>
                                    </li>
                                    <li class="landingvehicle_card-list-item">
                                        <i class="bx bx-cog"></i>
                                        <span class="landingvehicle_card-item-text">Automatic</span>
                                    </li>
                                </ul>
                                <div class="landingvehicle_landingvehicle_card-price-wrapper">
                                    <p class="landingvehicle_card-price">
                                        <strong>$350</strong> 
                                    </p>
                                    <button class="landingvehicle_btn">Buy now  <i class='bx bx-right-arrow-alt '></i></button>
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

export default Lnading_VehiclePage