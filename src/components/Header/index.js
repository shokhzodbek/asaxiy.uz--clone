import React, { useState } from 'react';
import './styles.css'
import Search from '@material-ui/icons/Search'
import Dropdown from '../Dropdown'
import Pop from '../Pop'
import Search1 from '../Saerch'
import Phone from '../Phone'
import Nav from '../nav'


const Header = () => {
     
      return (
            <>
            <div className="header0">
                  <hr/>
                  <div className="container-header">
                        <div className="header_1">
                        <img src='https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg' className="header_icon"/>
                        <Search1/>
                        </div>
                        <div className="header_2">
                        <Dropdown/>
                        <Pop/>
                        <Phone/>
                        </div>
                        <hr/>
                        </div>
                        <div className="container_bottom">
                        <Nav/>
                        </div>           
            </div>
            </>
      )
}

export default Header
