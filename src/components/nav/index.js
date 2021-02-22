import React,{useState} from 'react';
import { Popover, Whisper,Button,ButtonToolbar } from 'rsuite';
import MenuToggle from 'hamburger-react'
import {Link} from 'react-router-dom'

import './styles.css'
import { 
      BookOutlined,
      PhoneAndroid,
      ComputerOutlined,
      SportsEsports,
      Kitchen,
      Tv,
      Weekend



} from '@material-ui/icons';

const SideBar = ({Icon,title})=>{
      return (
      <div className="sidebarItems">
           <Icon/>
           <h3>{title}</h3>
      </div>)
}


export default function Navbar() {
  const [checked, setChecked] = useState(true);
  const [isOpen, setOpen] = useState(false)
  const handleChecked = (e)=>{
        setChecked(e=>!e)
  }
  return (<>
    <div className="navbar">
              

                <div className="navbar_links">
                      <ul>
                            <li><Link to="#" onClick={handleChecked}>
                               <MenuToggle toggled={isOpen} toggle={setOpen} size={23} color="#008DFF"/>
                            </Link></li>
                            <li><Link to="#">Yangiliklar</Link></li>
                            <li><Link to="#">Chegirmalar</Link></li>
                            <li><Link to="#">Kitoblar</Link></li>
                            <li><Link to="#">Mebel</Link></li>
                            <li><Link to="#">Telefon va gadjetlar</Link></li>
                            <li><Link to="#">Kompyuterlar va orgtexnika</Link></li>
                            <li><Link to="#">Geymerlar uchun</Link></li>
                            <li><Link to="#">Konditsionerlar</Link></li>
                            <li><Link to="#">Maishiy texnika</Link></li>
                      </ul>     
                </div>
    </div>
   <div className={`nav_menu_items1 ${checked && 'checked'}`}>
         <div className="nav_menu_sidebar1">
               <div className="nav_sidebar1">
         <SideBar Icon={BookOutlined} title="Kitoblar"/>
         <SideBar Icon={PhoneAndroid} title="Telefonlar va gadjetlar"/>
         <SideBar Icon={ComputerOutlined} title="Komputerlar va orgtexnika"/>
         <SideBar Icon={BookOutlined} title="Geymerlar uchun"/>
         <SideBar Icon={BookOutlined} title="Konditsionerlar"/>
         <SideBar Icon={BookOutlined} title="Maishiy texnika"/>
         <SideBar Icon={BookOutlined} title="Televizorlar,video va audio"/>
         <SideBar Icon={BookOutlined} title="Idish-tovoqlar"/>
         <SideBar Icon={BookOutlined} title="Mebel"/>
         <SideBar Icon={BookOutlined} title="Oshxona uchun texnika"/>
         <SideBar Icon={BookOutlined} title="Oyinchoqlar, sovg'alar va aksessuarlar"/>
         </div>
         </div>
         <div >

         </div>


   </div>
    </>
  );
}