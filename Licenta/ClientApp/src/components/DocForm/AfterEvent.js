import React, {useState} from 'react'
import {Button ,Form} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import NavbarDoc from '../Navbar/NavBarDoc'
import {Send} from 'react-feather'




function AfterEvent() {

  const [Email,setEmail]=useState("");
  const [Nume ,setNume]=useState("");
  const [date,setDate]=useState("");
  const[ Subject,setSubject]=useState("");

 

    function ValidateName(){
      return Nume.length>3;
    }
  function ValidateEmail(){
    const ValEmail= RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
   return ValEmail.test(Email);
  }
function Valid(){
  return ValidateEmail && Nume.length>3 && date.length>0 && Subject.length>0 ;
}



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
    < >
   
    <NavbarDoc/>
  
<div className='Login' style={{marginTop:'75px'}}>
      <Form onSubmit={SendEmail}  className="Form1" >
        <div className='Form1-inner'>
        <div className='Title'>Email Rezultate</div>
        <Form.Group className={  Nume.length===0 ? "Form1-Group " :ValidateName() ? "Form1-Group success" : "Form1-Group error"} controlId="Nume">
              <Form.Label className="SubTitle" style={{marginTop:'7px'}}>Numele si Prenumele</Form.Label>
              <Form.Control className={Nume.length===0 ? "Form1-Control " :ValidateName() ? "Form1-Control success" : "Form1-Control error"}  type="text" placeholder="Adresa de email" name="Nume" 
              value={Nume}
              onChange={(ep)=>setNume(ep.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>
              <small>mai mare de 3 Caractere</small>
            </Form.Group>

            <Form.Group className={ Email.length===0 ? "Form1-Group " :ValidateEmail() ? "Form1-Group success" : "Form1-Group error"} controlId="Email">
              <Form.Label className="SubTitle" >Adresa Email</Form.Label>
              <Form.Control className={Email.length===0 ? "Form1-Control " :ValidateEmail() ? "Form1-Control success" : "Form1-Control error"}  type="email" placeholder="Adresa de email" name="Email"
              
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>
              <small>Format aaaa@gmail.com</small>
            </Form.Group>
            <Form.Group className="Form1-Group" controlId="Subject">
              <Form.Label className="SubTitle" >Data</Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Data in care a avut programarea" name='Subject'
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
                /> 
            </Form.Group>
      
            <Form.Group className="Form1-Group" controlId="Message">
              <Form.Label className="SubTitle" >Rezultatul</Form.Label>
              <textarea className='Form1-Control' cols="30" rows="8" placeholder='Rezultatul pe scurt al controlului
              ' name='Message' value={date}  onChange={(e)=> setDate(e.target.value)}/>
            </Form.Group>

         
            <Button className='button' type="submit" disabled={!Valid()}>
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