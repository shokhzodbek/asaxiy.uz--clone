import React, { Component } from "react";
import Slider from "react-slick";
import './styles.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="caruasel_container">
        <Slider {...settings} className="slider_again">
          <div>
          <img src="https://assets.asaxiy.uz/uploads/banner/desktop/5fe5c8a57a0c6.jpg" className="carousel_image"/>
          </div>
          <div>
          <img src="https://assets.asaxiy.uz/uploads/banner/desktop/600fda5d6b524.jpg" className="carousel_image"/>
                         
          </div>
          <div>
          <img src="https://assets.asaxiy.uz/uploads/banner/desktop/5ff7f99793cd6.jpg"className="carousel_image"/>
          </div>
        </Slider>
      </div>
    );
  }
}