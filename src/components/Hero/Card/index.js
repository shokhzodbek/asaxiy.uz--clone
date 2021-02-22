import React from 'react'
import './styles.css'
function Card({imgs,img1,title,title1,description}) {
      const truncle = (str)=>{
       if(str.length>50){
          return str.slice(0,48)+'...'
       }

      }
      return (
            <div className="card_container">
                  <div className="card_one">
                        <div className="card_top">
                        <img className="card_img" src={imgs}/>
                        <div className="card_button"> 
                        <p><span className="border_span" style={{width:15,height:15,backgroundColor:'lightgrey',borderRadius:100}}></span> 
                        <span style={{width:10,height:10,borderRadius:100,backgroundColor:'lightgrey',marginLeft:10}}></span></p>
                        <button>Batafsil</button>
                        </div>
                        </div>
                        <div className="card_description">
                        <p>{title}
                        <br/>
                        <a>{truncle(description)}</a>
                        </p>
                        </div>
                  </div>
                  <div className="card_two">
                        <div className="card_small_top">
                        <div className="card_button2">
                        <p><span className="border_span" style={{width:15,height:15,backgroundColor:'lightgrey',borderRadius:100}}></span> 
                        <span style={{width:10,height:10,borderRadius:100,backgroundColor:'lightgrey',marginLeft:10}}></span></p>
                        <button>Batafsil</button>
                        </div>
                        
                        <img className="card_img2" src={img1}/>
                        
                        </div>
                       <div className= "card_description">
                        <a>{truncle(description)}</a>
                      
                       </div>

                  </div>     
            </div>
      )
}

export default Card
