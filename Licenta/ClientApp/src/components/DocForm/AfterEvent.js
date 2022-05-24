import React from 'react'
import {Button ,Form,} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import NavbarDoc from '../Navbar/NavBarDoc'
import {Send} from 'react-feather'


function AfterEvent() {

  function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", 'template_yi7wuqg',e.target, 'aZi8JVslN8HdsCSSB')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
  return (
    <>
    <NavbarDoc/>
  
<div className='Login' style={{marginTop:'55px'}}>
      <Form onSubmit={SendEmail} className="Form1">
        <div className='Form1-inner'>
        <div className='TitleEm'>Email Rezultate</div>
            <Form.Group className="Form1-Group" controlId="Nume">
              <Form.Label className="SubTitle2">Nume</Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Numele pentru cine va adresati" name='Nume'
                /> 
            </Form.Group>

            <Form.Group className="Form1-Group" controlId="Email">
              <Form.Label className="SubTitle2">Email</Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Email-ul pentru cine va adresati" name='Email'
                /> 
            </Form.Group>
            <Form.Group className="Form1-Group" controlId="Subject">
              <Form.Label className="SubTitle2">Data</Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Data in care a avut progrmarea" name='Subject'
                /> 
            </Form.Group>
      
            <Form.Group className="Form1-Group" controlId="Message">
              <Form.Label className="SubTitle2">Rezultatul</Form.Label>
              <textarea className='Form1-Control' cols="30" rows="8" placeholder='Rezultatul pe scurt al controlului
              ' name='Message'></textarea>
            </Form.Group>

         
            <Button className='button' type="submit">
              <Send size={20}/>
              Trimite
            </Button>
        </div>
      </Form>
      </div>
    </>
  )
}

export default AfterEvent