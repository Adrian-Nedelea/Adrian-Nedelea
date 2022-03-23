import React,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import {Frown} from 'react-feather'
import Navbar from './Navbar/Index'


 export default function RegisterFailed () {
 
  return (
    <>
    <Navbar/>
    <div className='registerstatus'>
      <p className='Text'><Frown size={25} />Failed -- wrong credentials --</p>
      <Button className='ButtonReg' href="/LoginForm">Try again</Button>
    </div>
    </>
  )
}
 

