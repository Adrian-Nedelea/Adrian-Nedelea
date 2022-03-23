import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LogIn, UserPlus } from 'react-feather'
import { useState } from 'react'
import {  useNavigate } from 'react-router'
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


export default function LoginForm() {
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
      if(!response.ok){
       navigate('/LoginFailed');
      }
      else{
        navigate('/LoginSuccess');
      }
    }

  return (
    <>
    <Navbar/>
    <div className='Login'>
      <Form onSubmit={handleSubmit} className="Form">
        <div className='Form-inner'>
        <div className='Title'>Login</div>
            <Form.Group className="Form-Group" controlId="Username">
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Enter Username"
                value={Username}
                onChange={(e)=>setUsername(e.target.value)} /> 
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Password">
              <Form.Label className='label'>Password</Form.Label>
              <Form.Control className='Form-Control'  type="password" placeholder="Password"
              value={Password}
              onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

            <Button className='button' type="submit">
            <LogIn size={20}/>
              Log in
            </Button>

            <Button className='buttonR'   href="/SignForm">
            <UserPlus size={20}/>
              Register 
            </Button>

        </div>
      </Form>
    </div>
    </>
  )
}


