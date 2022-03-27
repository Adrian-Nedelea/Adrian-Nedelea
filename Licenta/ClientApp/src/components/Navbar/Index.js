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
          <img width="80px"  height="auto" src={require('./logo/Logo12.jpg')}   alt="logo" />
              
               <NavMenu>
               <NavLink to="/" >
             <Home size={20}/>
              Home
               </NavLink>
                   <NavLink to="/Services" >
                   <Info size={20}/>
                      Servicii
                   </NavLink>
                   <NavLink to="/Contact" >
                   <Phone size={20}/>
                  Aici se fac programari
                   </NavLink>
                   <NavLink to="/SignForm" >
                   <UserPlus size={20}/>
                  Inregistrare
                   </NavLink>
                   
               <Dropdown className='drop'>
                 <Dropdown.Toggle className='Drop-toggle' >
                 <LogIn size={20}/>
                  Autentificare
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='Drop-content'>
                   <Link to="/LoginForm"  className='Item'> Pacient</Link>
                   <Link to="/DocLog" className='Item'> Doctor</Link>
                 </Dropdown.Menu>
               </Dropdown>
               </NavMenu>


                <Dropdown className='nav-btn' >
                  <Dropdown.Toggle className='Drop-toggle'  >
                    Informatii
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='Drop-content'>
                      <Link to="/" className='Item'>Home</Link>
                      <Link to="/SignForm" className='Item'>Inregistrare</Link>
                      <Link to="/Services" className='Item'>Fa o programare</Link>
                      <Link to="/LoginForm"  className='Item'> Pacient</Link>
                     <Link to="/DocLog" className='Item'> Doctor</Link>
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
