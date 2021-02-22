import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import {Star,StarOutline,Chat,ShoppingBasket,ShoppingCart} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
export default function CardItem({image,buttonTilte,title,price,star=4,feedback}) {
      return (
            <div className="carditem">
                  <span>CHEGIRMA</span>
                  <img  className="carditem_img" src={image}/>
                  <button className="carditem_button">{buttonTilte}</button>
                  <div className="carditem_title">
                  <h3>{title}</h3>
                  </div>
                  <div style={{display:'flex',alignItems:'center',height:60}}>
                  
                  {Array(star).fill().map(()=> <Star style={{fontSize:18}}/>)}
                  {Array(5-star).fill().map(()=> <StarOutline style={{fontSize:18}}/>)}
                 
                 <div style={{display:'flex',marginLeft:10,alignItems:'center'}}> 
                  <Chat style={{color:'grey',fontSize:14}}/>
                  <p style={{color:'grey',marginLeft:6}}> {feedback} ta sharh</p>
                  </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:"center"}}>
                        <p style={{fontWeight:500,fontSize:18}}>{price} so'm</p>
                        <ShoppingBasket style={{color:'lightgrey',fontSize:30}}/>
                  </div>
                   <div className="cartitem_shoppingcart">


                  <Link to="#"> <ShoppingCart/> Buyirtma berish</Link>
                   </div> 
                  

                  
            </div>
      )
}
