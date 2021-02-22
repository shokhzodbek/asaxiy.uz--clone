import React from 'react'
import './styles.css'
import CardCarusel from './CardCarusel'
import Card from './CardItem'
import BooksCard from './BooksCard'
import CardItem from './CardItem'
import TelegramEmbed from 'react-telegram-embed'
function Section() {
      return (
            <div className="section_1">
                  <div className="section_left">
                        <BooksCard/>
                        <CardItem
                         image={"https://assets.asaxiy.uz/product/main_image/desktop//5f117f8f3893d.jpg"}
                         title="Смарт браслет Xiaomi Mi Band 5 (Русское Меню) "
                         price={"400 000"}
                         feedback={2}
                         star={3}
                         buttonTilte="Xiaomi"
                         
                        
                        />
                        
                          <iframe id="tgw_6031f1fdb297bb25b312d672" frameborder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no" width="100%" height="450px" async>
                         </iframe>
                        
                      
                  </div>
                  <div className="section_right">
                        <CardCarusel/>
                        <CardCarusel/>
                        <CardCarusel/>
                  </div>
                  
            </div>
      )
}

export default Section
