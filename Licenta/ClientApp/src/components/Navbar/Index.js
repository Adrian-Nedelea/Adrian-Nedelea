import React ,{useRef} from 'react'
import {Nav,NavLink,Bars,NavMenu,} from './Navbar'
import {Dropdown} from 'react-bootstrap'
import { Home,UserPlus,Info,LogIn,Phone} from 'react-feather'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Button } from 'react-bootstrap'


import './Drop.css'
import './logo/logo.png'
const Navbar = () => {

  const navRef =useRef();
  const showNavbar=() =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      <Nav ref={navRef}>
          <NavLink to="/" activeStyle>
          <Home size={20}/>
          Home
          <img width="70px"  height="auto" src={require('./logo/logo.png')}   alt="logo" />
               </NavLink>
             
               <NavMenu>
                   <NavLink to="/Services" activeStyle>
                   <Info size={20}/>
                   Services
                   </NavLink>
                   <NavLink to="/Contact" activeStyle>
                   <Phone size={20}/>
                   Contact
                   </NavLink>
                   <NavLink to="/SignForm" activeStyle>
                   <UserPlus size={20}/>
                   Sign Up
                   </NavLink>
                   
               <Dropdown className='drop'>
                 <Dropdown.Toggle className='Drop-toggle' >
                 <LogIn size={20}/>
                   Log In
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='Drop-content'>
                   <Link to="/LoginForm"  className='Item'>Login as Patient</Link>
                   <Link to="/DocLog" className='Item'>Login as Doctor</Link>
                 </Dropdown.Menu>
               </Dropdown>
               </NavMenu>


                <Dropdown className='nav-btn' >
                  <Dropdown.Toggle className='Drop-toggle'  >
                    Items
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='Drop-content'>
                      <Link to="/SignForm" className='Item'>Sign Up</Link>
                      <Link to="/Contact" className='Item'>Contact</Link>
                      <Link to="/Services" className='Item'>Services</Link>
                      <Link to="/LoginForm"  className='Item'>Login as Patient</Link>
                     <Link to="/DocLog" className='Item'>Login as Doctor</Link>
                      </Dropdown.Menu>
                  </Dropdown>       

               <Button  className='nav-btn nav-close-btn' onClick={showNavbar}>
                 <FaTimes/>
               </Button>
               </Nav>

              <Button className='nav-btn ' onClick={showNavbar}>
                 <FaBars/>
               </Button>     
               </>
  )
}

export default Navbar
