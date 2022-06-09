import React ,{useRef} from 'react'
import {Nav,NavLink,Bars,NavMenu,} from './Navbar'
import {Dropdown} from 'react-bootstrap'
import { Home,UserPlus,Info,LogIn,Phone} from 'react-feather'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes, FaUserTimes } from 'react-icons/fa'
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
      <Nav ref={navRef} >
      <strong style={{ fontSize: "1.8rem" }}>Ned.</strong>
              
               <NavMenu>
               <NavLink  className="link" to="/" >
             <Home size={20}/>
              Acasă
               </NavLink>
                   <NavLink className="link"  to="/Contact" >
                   <Info size={20}/>
                     Programări
                   </NavLink>
                   <NavLink className="link"  to="/SignForm" >
                   <UserPlus size={20}/>
                  înregistrare
                   </NavLink>
                   
                   <Dropdown className='drop'>
                 <Dropdown.Toggle className='Drop-toggle' >
                 <LogIn size={20}/>
                  Autentificare
                 </Dropdown.Toggle>

                 <Dropdown.Menu className='Drop-content'>
                   <Link to="/LoginForm"  className='Item'> Pacient<span> |</span></Link>
                   <Link to="/DocLog" className='Item'> Doctor<span> |</span></Link>
                 </Dropdown.Menu>
               </Dropdown>
               </NavMenu>
               


                <Dropdown className='nav-btn' >
                  <Dropdown.Toggle className='Drop-toggle'  >
                    Informații
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='Drop-content'>
                      <Link to="/" className='Item'>Acasă<span> |</span></Link>
                      <Link to="/Contact" className='Item'>Programări<span> |</span></Link>
                      <Link to="/SignForm" className='Item'>Înregistrare<span> |</span></Link>
                      <Link to="/LoginForm"  className='Item'> Pacient<span> |</span></Link>
                     <Link to="/DocLog" className='Item'> Doctor<span > |</span></Link>
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
