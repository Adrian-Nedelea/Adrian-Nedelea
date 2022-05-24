import React ,{useRef} from 'react'
import {Nav,NavLink,Bars,NavMenu,} from './Navbar'
import {Dropdown} from 'react-bootstrap'
import { Home,UserPlus,Info,LogIn,Phone, Mail} from 'react-feather'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

import './Navbar.js'
import './Drop.css'
import './logo/logo.png'
const NavbarPac = () => {

  const navRef =useRef();
  const showNavbarDoc=() =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      <Nav ref={navRef}>
      <strong style={{ fontSize: "1.8rem" }}>Ned.</strong>
              
               <NavMenu>
               <NavLink to="/HomeDoc" >
                     <Home size={20}/>
                    Acasa , sunteti logat.
               </NavLink>
                   <NavLink to="/Chat" >
                   <Phone size={20}/>
                    Chat
                   </NavLink>
                   <NavLink to="/AfterEvent" >
                   <Mail size={20}/>
                      Trimite email cu rezultatele
                   </NavLink>
               </NavMenu>


                <Dropdown className='nav-btn' >
                  <Dropdown.Toggle className='Drop-toggle'  >
                    Informatii
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='Drop-content'>
                      <Link to="/HomeDoc" className='Item'>Acasa , sunteti autetificat</Link>
                      
                      <Link to='/DocForm' className='Item'>Formularul pentru pacient</Link>
                      </Dropdown.Menu>
                  </Dropdown>       

               <Button  className='nav-btn nav-close-btn' onClick={showNavbarDoc}>
                 <FaTimes/>
               </Button>
               </Nav>

              <Button className='nav-btn ' onClick={showNavbarDoc}>
                 <FaBars/>
               </Button>     
               </>
  )
}

export default NavbarPac
