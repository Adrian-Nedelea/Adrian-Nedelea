import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {User,LogIn} from 'react-feather'
import Navbar from './Navbar/Index'

import './Form.css'

async function registerUser (credentials)
{
   return fetch('Http://localhost:5000/api/user/register', {
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(credentials)
   })
   .then(data =>data)
}

export default function SignForm() {
  const [FullName ,setFullName]=useState("");
  const [city ,setCity]=useState("Timisoara");
  const [Email,setEmail]=useState("");
  const [Phone,setPhone]=useState("");
  const [Username,setUsername]=useState("");
  const [Password, setPassword]=useState("");
  const [ConfPassword, setConfPassword]=useState("");
 let navigate=useNavigate();
  
  function validateForm (){
    return FullName.length >0 && city.length>0 && Email.length>0 && Phone.length>0 && Username.length>0 && Password.length>0 && ConfPassword.length>0 && Password===ConfPassword;
  }

  const handleSubmit = async e =>{
    e.preventDefault();

    const response =await registerUser({
      FullName,
      city,
      Email,
      Phone,
      Username,
      Password,
     
    });
    console.log(response);
    if(!response.ok){
     navigate('/RegisterFailed');
    }
    else{
      navigate('/RegisterSuccess');
    }
  }
 
  return (
    <>
      <Navbar/>
    <div className='Formular'>
      <Form onSubmit={handleSubmit} className='Form'>
        <div className='Form-inner'>
        <div className='Title'>Registration</div>
            <Form.Group className="Form-Group" controlId="FullName">
              <Form.Label className='label'>Numele si prenumele</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Nume+ prenumele " 
              value={FullName}
              onChange={(e)=>setFullName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Username">
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Enter Username"
              value={Username}
              onChange={(e)=>setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="Form-Group" controlId="city">
              <Form.Label className='label'>Oras</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Orasul Dumnevoastra" 
              
              value={city}
              onChange={(e)=>setCity(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Email">
              <Form.Label className='label'>Adresa Email</Form.Label>
              <Form.Control className='Form-Control' type="email" placeholder="Adresa de email"
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Phone">
              <Form.Label className='label'>Numar Telefon</Form.Label>
              <Form.Control className='Form-Control'  type="number" placeholder="Numarul de telefon" 
              value={Phone}
              onChange={(e)=>setPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Password">
              <Form.Label className='label'>Parola</Form.Label>
              <Form.Control className='Form-Control'  type="password" placeholder="Parola" 
              value={Password}
              onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Form-Group" controlId="ConfPassword">
              <Form.Label className='label'>Confirma Parola</Form.Label>
              <Form.Control className='Form-Control' type="password" placeholder="Confirma Parola" 
              value={ConfPassword}
              onChange={(e)=>setConfPassword(e.target.value)}/>
            </Form.Group>


            <Button className='button' type="submit" disabled={!validateForm()}>
            <LogIn size={20}/>
              Submit
            </Button>

            <div className='Btn-center'>
              <p className='text-btn'>Aveti deja un cont ?</p>   
             <Button className='buttonR'   href="/LoginForm">
            <User size={20}/>
             Autentificare
            </Button>
            </div>
          </div>
      </Form>
      </div>
  </>
  )
}

