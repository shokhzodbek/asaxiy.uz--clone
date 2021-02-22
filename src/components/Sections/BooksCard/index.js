import React from 'react'
import './styles.css'

const Books =({image,title,subtitle})=>{
      return(
            <div style={{display:'flex',flex:1,width:230,paddingTop:10,paddingBottom:20,backgroundColor:'white',alignItems:"center",paddingLeft:15,paddingRight:10}}>
                  <img style={{width:44,height:44}} src={image}/>
                  <div style={{marginLeft:5}}>
                  <h3 style={{fontWeight:600,marginBottom:5}}>{title}</h3>
                  <p style={{color:'lightgrey'}}>{subtitle}</p>
                  </div>  
                 
            </div>
      )

}
function BooksCaard() {
      return (
            <div className="bookscard">
                  <div className="bookscard_icon">
                        <p>Kitoblar</p>
                        <img src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" />
                  </div>
                  <Books 
                  title="Uolter Ayzecson:
                    Stiv Jobs"
                  subtitle="Jaxon Adabyoti"
                  image="https://assets.asaxiy.uz/product/main_image/mobile//5f4e05aa6ebe8.png"/>
                   <hr/>
                   <Books 
                  title="Uolter Ayzecson:Stiv Jobs"
                  subtitle="Jaxon Adabyoti"
                  image="https://assets.asaxiy.uz/product/main_image/mobile//5f4e05aa6ebe8.png"/>
                  <hr/>
                   <Books 
                  title="Uolter Ayzecson:Stiv Jobs"
                  subtitle="Jaxon Adabyoti"
                  image="https://assets.asaxiy.uz/product/main_image/mobile//5f4e05aa6ebe8.png"/>
                  <hr/>
                   <Books 
                  title="Uolter Ayzecson:Stiv Jobs"
                  subtitle="Jaxon Adabyoti"
                  image="https://assets.asaxiy.uz/product/main_image/mobile//5f4e05aa6ebe8.png"/>
                  <hr/>
                   <Books 
                  title="Uolter Ayzecson:Stiv Jobs"
                  subtitle="Jaxon Adabyoti"
                  image="https://assets.asaxiy.uz/product/main_image/mobile//5f4e05aa6ebe8.png"/>
  
                   
                  
            </div>
      )
}

export default BooksCaard
