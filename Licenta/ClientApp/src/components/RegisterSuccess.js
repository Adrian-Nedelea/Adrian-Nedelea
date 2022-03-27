import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {ThumbsUp} from 'react-feather'
import Navbar from './Navbar/Index'


export default function RegisterSuccess(){
   
    return (
        <>
        <Navbar/>
        <div className='registerstatus'>
            <p className='Text'> Contul a fost creat <ThumbsUp size={25}/> </p>
            <Button className='ButtonReg' href='/LoginForm' > Te poti autentifica </Button>
         </div>
         </>
    )
}
      
