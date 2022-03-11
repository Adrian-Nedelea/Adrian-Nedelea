import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LogIn } from 'react-feather'
import './Form.css'
export default function DocLog() {
  return (
    <>
    <div className='Login'>
      <Form className="Form">
        <div className='Form-inner'>
        <div className='Title'>Login</div>
            <Form.Group className="Form-Group" controlId="Code">
              <Form.Label className='label'>Code</Form.Label>
              <Form.Control className='Form-Control'  type="text" placeholder="Assistant code " />
            </Form.Group>
            
            <Button className='button' type="submit">
            <LogIn size={20}/>
              Log in Doc
            </Button>        
        </div>
      </Form>
    </div>
    </>
  )
}


