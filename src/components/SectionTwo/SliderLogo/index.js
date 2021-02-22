import React, { Component } from "react";
import Slider from "react-slick";
import './styles.css'
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow:false,
      prevArrow:false,
      
    };
    return (
      <div className="sliderlogo_container">
        <Slider {...settings} className="sliderlogo">
          <div style={{width:100,backgroundColor:'red'}}>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5e15c615d99f8.png"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}}src="https://assets.asaxiy.uz/brand//5e15c63e06b95.png" alt="image description"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5e15c65d0af72.jpg" alt="image description"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}}src="https://assets.asaxiy.uz/brand//5e15c4697e437.jpg" alt="image description"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5e15c561deadb.png" alt="image description"/>
          </div>
         
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5e15c51449bd0.jpg"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5ff6f8872a0db.jpg"/>
          </div>
          <div>
          <img style={{height:95,width:95,cursor:'pointer'}} src="https://assets.asaxiy.uz/brand//5e15c4ec85cf2.jpg" alt="image description"/>    
          </div>
        </Slider>
      </div>
    );
  }
}