import React from 'react'
import './Form.css';
import Footer from './Navbar/Footer';
import Navbar from './Navbar/Index'
import Carusel from './Navbar/carousel';


export default function Home() {
  return (
    <>
    <Navbar/>
    <Carusel/>
        <div className='Home-Title'>
        <h2 className='titlul'>Clinica Med</h2>
          
        </div>
    
    <Footer/>
    </> 
  )
}


