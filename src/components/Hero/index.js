import React from 'react'
import Carousel from './Carusel'
import Card from './Card'
import './styles.css'


function Hero() {
      return (
            <div className="hero">
                  <Carousel/>
                  <div>
                  <Card 
                  imgs={"https://assets.asaxiy.uz/product/main_image/mobile/5e15c27de5bda.jpg"}
                  title={"Telefon"}
                  description="salom"
                  img1={"https://assets.asaxiy.uz/product/main_image/mobile//5f27ef51a2fe2.jpeg"}
                  description="Formal definition and theorem are taken from the book Formal definition and theorem are taken from the book 
                  Formal definition and theorem are taken from the book
                  Formal definition and theorem are taken from the book"
                  />
                  <Card  imgs={"https://assets.asaxiy.uz/product/main_image/mobile/5e15c27de5bda.jpg"}
                  title={"Telefon"}
                  description="Formal definition and theorem are taken from the book Formal definition and theorem are taken from the book 
                  Formal definition and theorem are taken from the book
                  Formal definition and theorem are taken from the book"
                  img1={"https://assets.asaxiy.uz/product/main_image/mobile//5f27ef51a2fe2.jpeg"}/>
                  </div>
                  
            </div>
      )
}

export default Hero
