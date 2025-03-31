import React from 'react';
import './Getstart_Page.css';
import img1 from '../../assets/car_img01.png';
import img2 from '../../assets/play.png';
import img3 from '../../assets/store.jpg';

const Getstart_Page = () => {
  return (
    <div class="getstart_contanier">
        <div class="getstart_hero">

            <div class="getstart_content">
                <div class="getstart_div-text">
                    <h1>AutoNexus</h1>
                    <h4>Get Start</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore reprehenderit veritatis aperiam sed alias quos. Aliquid vero autem sapiente aspernatur?</p>
                        <a href="/cussignup" class="getstart_btn">Customer</a>
                        <a href="#" class="getstart_btn">Spareparts Shop</a>
                        <a href="#" class="getstart_btn">Vehicale Shop</a>
                        <a href="#" class="getstart_btn">Vehicale Owner</a>
                </div>

                <div class="getstart_div-img">
                    <img src={img1} alt="Car Image"/>
                    <div class="getstart_inline-images">
                        <img src={img2} alt="Image 1"/>
                        <img src={img3} alt="Image 2"/>
                    </div>
                </div>
                
            </div>
            

            <div class="getstart_soc-link">
                <a href=""><i class="bx bxl-facebook-square"></i></a>
                <a href=""><i class="bx bxl-twitter"></i></a>
                <a href=""><i class="bx bxl-youtube"></i></a>
            </div>
        </div>
    </div>

  )
}

export default Getstart_Page