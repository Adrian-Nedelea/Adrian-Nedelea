import React from 'react'
import { NavMenu } from './Navbar';
import './logo/logo.png'
 const NavbarPat = () => {

    return (
        <>
            <Nav>
                <img width="70px"  height="auto" src={require('./logo/logo.png')}   alt="logo" />

                <NavMenu>

                </NavMenu>
            </Nav>
        </>

    );

}