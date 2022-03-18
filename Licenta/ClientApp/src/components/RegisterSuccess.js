import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {ThumbsUp} from 'react-feather'


export default function RegisterSuccess(){
   
    return (
        <div className='registerstatus'>
            <p className='Text'> Account was created <ThumbsUp size={25}/> </p>
            <Button className='ButtonReg' href='/LoginForm' > You can Log In now</Button>
         </div>
    )
}
      
