import { Facebook, Instagram,  Telegram } from '@material-ui/icons'
import React from 'react'
import './styles.css'
import {Phone,EmailOutlined,LocationOnOutlined} from '@material-ui/icons'
const Serves = ({image,title,subtitle})=>{
      return(
            <div className="serves_one">
                              <div>
                              <img style={{width:50}} src={image}/>
                              </div>
                              <div className="serves_title">
                                   <h5>{title}</h5>
                                   <p>{subtitle}</p>
                              </div>
                        </div>
            
      )
}
function Footer() {
      return (
            <div className="foooter">
            <div className="foooter_container">
                  <div className="foooter_serves">
                        <Serves 
                        title="Endi bozorga borishga hojat yo'q" 
                        image="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                        subtitle="Bizda qulay narxlar va uyga etkazib berish mavjud"
                        />
                         <Serves 
                        title="Удобства для вас" 
                        image="https://asaxiy.uz/custom-assets/images/icons/return.svg"
                        subtitle="Быстрое оформление и гарантия на возврат в случае неисправности"
                        />
                         <Serves 
                        title="Tez etkazib berish" 
                        image="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                        subtitle="Bizning xizmatimiz sizni ajablantiradi"
                        />
                         <Serves 
                        title="To'lash" 
                        image="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                        subtitle="Без предоплаты на 12 или 18 месяцев"
                        />    
                  </div>
                  <div className="foooter_contact">
                        <div className="contact_one">
                              <h3>Ma'lumotlar</h3>
                              <p>Foydalanish qoidalari</p>
                              <p>Условия рассрочка</p>
                              <p>Tovar yetkazib berish</p>
                              <p>Tovarni qaytarish</p>
                              <p>Biz haqimizda</p>

                        </div>
                        <div className="contact_one">
                              <h3>Biz bilan aloqa</h3>
                              <p><Phone/> +998 71 200 01 05</p>
                              <p><EmailOutlined/> info@asaxiy.uz</p>
                              <p><LocationOnOutlined/> Chilonzor 3,Toshkent</p>

                        </div>
                        <div className="contact_one">
                              <h3>Bizning facebook</h3>
                         <div class="fb-page" 
                            data-href="https://www.facebook.com/asaxiyuz"

                            data-adapt-container-width="true" 
                            data-hide-cover="false"
                            data-show-facepile="false"></div>
                        </div> 
                   </div>

                   <hr/>
                   <div className="foooter_footer">
                         
                         <div className="foooter_payment">
                               <p>To'lov turlari:  </p>
                                     <img style={{height:18}} src="https://asaxiy.uz/custom-assets/images/click-logo.svg"/>  
                                     <img  style={{height:18}} src="https://asaxiy.uz/custom-assets/images/payme.svg"/>
                         </div>
                         <div className="foooter_social">
                               <p>Biz ijtimoiy tarmoqlarda:  </p>
                               <Instagram/>
                               <Telegram/>
                               <Facebook/>
                         </div>
                       
                   </div>
                   <hr/>

      

            </div>
            </div>
          
      )
}

export default Footer
