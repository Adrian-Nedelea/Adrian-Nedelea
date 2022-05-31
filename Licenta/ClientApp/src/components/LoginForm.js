import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LogIn, UserPlus } from 'react-feather'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar/Index'

async function LoginUser(credentials)
{
  return fetch('Http://localhost:5000/api/user/login' ,{
    method:'POST',
    headers :{'Content-Type':'application/json'},
    body:JSON.stringify(credentials)
  })
  .then(data =>data)
}


export default function LoginForm(props) {
  const [Username, setUsername]=useState();
  const [Password, setPassword]=useState();
  let navigate=useNavigate();

    function ValidateForm ()
    {
      return Username.length>0 && Password.length>0;
    }

    const handleSubmit = async e =>{
      e.preventDefault();
  
      const response =await LoginUser({
        Username,
        Password
      });
      console.log(response);
      if(response.ok){
       
       navigate('/UserLoggedIn');
      }
      else{
        navigate('/LoginFailed');
      }
    }

  return (
    <>
    <Navbar/>
    <div className='Login'>
      <Form onSubmit={handleSubmit} className="Form1">
        <div className='Form1-inner'>
        <div className='Title'>Autentificare</div>
            <Form.Group className="Form1-Group" controlId="Username">
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Enter Username"
                value={Username}
                onChange={(e)=>setUsername(e.target.value)} /> 
            </Form.Group>

            <Form.Group className="Form1-Group" controlId="Password">
              <Form.Label className='label'>Parola</Form.Label>
              <Form.Control className='Form1-Control'  type="password" placeholder="Parola"
              value={Password}
              onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

         
            <Button className='button' type="submit">
            <LogIn size={20}/>
              Autentificare
            </Button>
           
            
           
              <p className='text-btn'>Nu aveti cont ?</p>   
             <Button className='buttonR'   href="/SignForm">
            <UserPlus size={20}/>
             Inregistrare
            </Button>
            

        </div>
      </Form>
    </div>
    </>
  )
}
