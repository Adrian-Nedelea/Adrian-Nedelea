import React from 'react'
import { NavMenu } from './Navbar';
import { Nav } from 'react-bootstrap';
import './logo/logo.png'
import { NavLink } from 'react-router-dom';
  export default function  NavbarPac  ()  {

    return (
        <>
            <Nav>
                <img width="70px"  height="auto" src={require('./logo/logo.png')}   alt="logo" />

                <NavMenu>
                    <NavLink to="/HomeLoggedPac">
                     Home
                    </NavLink>

                    <NavLink to="/Appointment">
                        Make an Appointment
                    </NavLink>
                </NavMenu>
            </Nav>
        </>

    );

}