import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h2>Contact</h2>
                    <ul>
                        <li>   <p>0256348234 </p>  </li>
                      <li><p> ceva@gmail.com </p> </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h2>Urmareste </h2>
                        <div className='social-links'>
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
        </div>
    </div>
    </footer>
  )
}
