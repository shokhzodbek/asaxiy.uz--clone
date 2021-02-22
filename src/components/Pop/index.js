import React from 'react'
import {Badge} from '@material-ui/core'
import {ShoppingBasket} from '@material-ui/icons'
import { Popover, Whisper,ButtonToolbar,Button} from 'rsuite';
import './styles.css'

const speaker = (
      <Popover className='popover'>
        <div style={{height:45,backgroundColor:'white',borderTopLeftRadius:25,borderTopRightRadius:25}}>

        </div>
        <div className="pop_container">
        <div className="pop_sum">
          <p style={{fontWeight:700,color:'grey'}}>jami</p>
          <p style={{fontWeight:700}}>0 so'm</p>
        </div>
        <div className="pop_buttons">
        <button className="button">SOTIB OLISH</button>
        <button className="button2">SAVATGA O'TISH</button>
        </div>
        </div>
      </Popover>
    );
    

    
    const Index = () => (
      <div>
        <ButtonToolbar>
          <Whisper placement="bottom" trigger="hover" speaker={speaker} enterable style={{marginTop:10}}>
          <Button className="pop_button">
          <ShoppingBasket />
           <Badge color="primary"  badgeContent={0} showZero>
            <p style={{marginRight:10,marginLeft:10}}>Savatcha</p> 
          </Badge>
             </Button>
          </Whisper>
        </ButtonToolbar>
       
      </div>
    );

export default Index