import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
  <>
        <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h2>Telefon</h2>
                    <ul>
                        <li>   <p>0256348234 </p>  </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h2>Locatie</h2>
                    <ul>
                        <li> <a href='https://www.google.ro/maps/place/Universitatea+Politehnica+Timi%C8%99oara/@45.7538115,21.2246053,18.75z/data=!4m5!3m4!1s0x47455d82fd425403:0xebeab37fb452ca7a!8m2!3d45.7536393!4d21.2251615'>Piata Victoriei Nr.ceva</a>  </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h2>Contact </h2>
                        <div className='social-links'>
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fa-regular fa-envelope"></i></Link>
                            <Link to="/"><i class="fa-brands fa-whatsapp"></i></Link>
                </div>
            </div>
        </div>
    </div>
    </footer>
    </>
 )
}
