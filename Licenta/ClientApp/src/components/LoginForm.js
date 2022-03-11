import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LogIn } from 'react-feather'
import {Link} from 'react-router-dom'

export default function LoginForm() {
  return (
    <>
    <div className='Login'>
      <Form className="Form">
        <div className='Form-inner'>
        <div className='Title'>Login</div>
            <Form.Group className="Form-Group" controlId="Username">
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="Form-Group" controlId="Password">
              <Form.Label className='label'>Password</Form.Label>
              <Form.Control className='Form-Control'  type="password" placeholder="Password" />
            </Form.Group>

            <Button className='button' type="submit">
            <LogIn size={20}/>
              Log in
            </Button>

           
        </div>
      </Form>
    </div>
    </>
  )
}


