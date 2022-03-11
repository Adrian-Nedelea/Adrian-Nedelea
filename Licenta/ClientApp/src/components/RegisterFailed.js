import React,{Component} from 'react'
import Button from 'react-bootstrap/Button'

 export class RegisterFailed extends Component() {
     render( ){
  return (
    <div className='registerStatus'>
      <p>Failed the account was not created</p>
      <Button href="/register">Try again</Button>
    </div>
  )
}
 }


