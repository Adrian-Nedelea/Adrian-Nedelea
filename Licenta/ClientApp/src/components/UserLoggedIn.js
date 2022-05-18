import React ,{useRef,useEffect,useState}from "react";
import NavbarPac from './Navbar/NavbarPac'
import Avatar from './Avatar'
import SupportWindow from "./SupportWindow/SupportWind";

export default function UserLoggedIn (){
   
    return(
        <>
        <NavbarPac/>
        <h1>Esti conectat</h1>
        </>
       
    )
}
