import React,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import {Frown} from 'react-feather'


 export default function RegisterFailed () {
 
  return (
    <div className='registerstatus'>
      <p className='Text'><Frown size={25} />Failed the account was not created</p>
      <Button className='ButtonReg' href="/SignForm">Try again</Button>
    </div>
  )
}
 


