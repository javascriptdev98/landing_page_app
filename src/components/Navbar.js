import React, { useState } from 'react'
import logo from "../Assets/Logo.svg"
import { BsCart } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa'; 

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import {Home, Info,CommentRounded, PhoneRounded, ShoppingCartRounded} from "@mui/icons-material"



function Navbar() {

    const[openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        {
            text: "Home",
            icon: <Home/>
        },
        {
            text: "About",
            icon: <Info/>
        },
        {
            text: "Testmonials",
            icon: <CommentRounded/>
        },
        {
            text: "Contact",
            icon: <PhoneRounded/>
        },
        {
            text: "Cart",
            icon: <ShoppingCartRounded/>
        },

    ]

  return (
    <nav>
        <div className='nav-logo-container'>
                <img src={logo} alt="logo"/>
        </div>
        <div className='navbar-links-container'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testmonials</a>
            <a href="">Contact</a>
            <a href="">
                <BsCart className="navbar-cart-icon"/>
            </a>
            <button className='primary-button'>Booking Now</button>
        </div>
        <div className='navbar-menu-container'>
            <FaBars onClick={()=> setOpenMenu(true)}/>

        </div>
        <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor="right">
            <Box
                sx={{width:250}}
                role="presentation"
                onClick={()=>setOpenMenu(false)}
                onKeyDown={()=>setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item)=>{
                           return <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text}/>

                                    </ListItemButton>
                            </ListItem>
                        })}
                    </List>

            </Box>

        </Drawer>
    </nav>
  )
}

export default Navbar