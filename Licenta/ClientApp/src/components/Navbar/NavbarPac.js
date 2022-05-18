import React ,{useRef} from 'react'
import {Nav,NavLink,Bars,NavMenu,} from './Navbar'
import {Dropdown} from 'react-bootstrap'
import { Home,UserPlus,Info,LogIn,Phone} from 'react-feather'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

import './Navbar.js'
import './Drop.css'
import './logo/logo.png'
const NavbarPac = () => {

  const navRef =useRef();
  const showNavbarPac=() =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      <Nav ref={navRef}>
      <strong style={{ fontSize: "1.8rem" }}>Ned.</strong>
              
               <NavMenu>
               <NavLink to="/UserLoggedIn" >
                     <Home size={20}/>
                    Acasa , sunteti logat.
               </NavLink>
                   <NavLink to="/Contact" >
                   <Phone size={20}/>
                  Aici se fac programari
                   </NavLink>
                   <NavLink to="/Chat" >
                   <Phone size={20}/>
                    Chat
                   </NavLink>
               </NavMenu>


                <Dropdown className='nav-btn' >
                  <Dropdown.Toggle className='Drop-toggle'  >
                    Informatii
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='Drop-content'>
                      <Link to="/UserLoggedIn" className='Item'>Acasa , sunteti autetificat</Link>
                      <Link to="/Contact" className='Item'>Fa o programare</Link>
                      </Dropdown.Menu>
                  </Dropdown>       

               <Button  className='nav-btn nav-close-btn' onClick={showNavbarPac}>
                 <FaTimes/>
               </Button>
               </Nav>

              <Button className='nav-btn ' onClick={showNavbarPac}>
                 <FaBars/>
               </Button>     
               </>
  )
}

export default NavbarPac
