import { Card } from "@material-ui/core";
import React, { Component } from "react";
import Slider from "react-slick";
import CardItem from "../CardItem";
import './styles.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      adaptiveHeight: true,
      slidesToScroll: 3,
    
    };
    return (
      <div className="slider_container">
        <Slider {...settings} className="slider_1" useCSS>
         <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          <div className="carusel_item">
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
          <div>
          <CardItem 
         image={'https://assets.asaxiy.uz/product/main_image/desktop/5e15c1c5ab0ae.JPG'}
          title="Телевизор Artel UA32H1200 Smart TV" 
          price={"250 000"}
          feedback={23}
          star={4}
          buttonTilte="Televizor"
          />
          </div>
         
        </Slider>
      </div>
    );
  }
}