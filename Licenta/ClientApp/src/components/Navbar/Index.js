import React from 'react'
import {Nav,NavLink,Bars,NavMenu,} from './Navbar'
import {Dropdown} from 'react-bootstrap'
import { Home,User,Info,LogIn,Phone} from 'react-feather'
import {Link} from 'react-router-dom'
import './Drop.css'
const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
          <Home size={20}/>
              <h1>Logo</h1>    
               </NavLink>
               <Bars />
               <NavMenu>
                   <NavLink to="/Services" activestyle>
                   <Info size={20}/>
                   Services
                   </NavLink>
                   <NavLink to="/Contact" activestyle>
                   <Phone size={20}/>
                   Contact
                   </NavLink>
                   <NavLink to="/SignForm" activestyle>
                   <User size={20}/>
                   Sign Up
                   </NavLink>
               </NavMenu>
               
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
               
      </Nav>
     </>
  )
}

export default Navbar
