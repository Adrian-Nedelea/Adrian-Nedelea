import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import NavbarDoc from '../Navbar/NavBarDoc'
import {Send,Mail} from 'react-feather'
import {Modal, Button, Form} from 'react-bootstrap'
import './Footer.css'
export default function Footer() {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    const [Email,setEmail]=useState("");
  const [Nume ,setNume]=useState("");
  const [date,setDate]=useState("");
  

  function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", 'template_c38nsc5',e.target, 'aZi8JVslN8HdsCSSB')
    .then((result) => {
        alert("Mesajul a fost trimis cu success");
    }, (error) => {
        alert("Mesajul NU  a fost trimis");
    });
  }

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
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Button onClick={handleShow} className="EmailBtn" ><Mail size={25} style={{marginLeft:'-5px', marginTop:'-16px'}}/></Button>
                            <Link to="/"><i className="fa-brands fa-whatsapp"></i></Link>
                </div>
            </div>
        </div>
    </div>
    </footer>

    <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title className='Title-SendEm'>Adresează o întrebare</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width:'70%',marginLeft:'auto',marginRight:'auto'}}>
          <Form  onSubmit={SendEmail} className="Form1" >
        <div className='Form1-inner'>
        <Form.Group className= "Form1-Group " controlId="Nume">
              <Form.Label className="SubTitle" style={{marginTop:'7px'}}>Numele și Prenumele</Form.Label>
              <Form.Control className= "Form1-Control "  type="text" placeholder="Numele și prenumele dumneavoastră " name="Nume" 
              value={Nume}
              onChange={(ep)=>setNume(ep.target.value)}/>
            </Form.Group>

            <Form.Group className= "Form1-Group "  controlId="Email">
              <Form.Label className="SubTitle" >Adresa dumneavoastră de email</Form.Label>
              <Form.Control className= "Form1-Control "  type="email" placeholder="Adresa de email" name="Email" 
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
      
            <Form.Group className="Form1-Group" controlId="Message">
              <Form.Label className="SubTitle" >Problema ?</Form.Label>
              <textarea className='Form1-Control'   cols="30" rows="8" placeholder='Problema dumneavoastră
              ' name='Message' value={date}  onChange={(e)=> setDate(e.target.value)}/>
            </Form.Group>
            <Button className='button' type="submit" >
              <Send size={20}/>
              Trimite
            </Button>
        </div>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>
 )
}
