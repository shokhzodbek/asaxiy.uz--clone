import React from 'react'
import './styles.css'
function Banner() {
      return (<>
            <div className="add_banner">
                  <div className="add_image">
                  <img style={{width:498,height:513}} src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"/>
                  </div>
                  <div className="add_store">
                       <div className="add_store_icon">
                             <a>
                                   <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"/>
                             </a>
                             <p>Sizning internet do'koningiz</p>
                       </div>
                       <div className="add_store_logo">
                             <a><img src="https://asaxiy.uz/custom-assets/images/app-store.svg"/></a>
                             <a><img src="https://asaxiy.uz/custom-assets/images/google-play.svg"/></a>
                       </div>

                  </div>

                  
            </div>
            </>
      )
}

export default Banner
