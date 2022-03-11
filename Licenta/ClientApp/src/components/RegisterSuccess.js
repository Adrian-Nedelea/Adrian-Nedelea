import React,{Component} from 'react'
import { NavigationType, useNavigate } from 'react-router'
import Button from 'react-bootstrap/esm/Button';
export default function registersuccess(){
    let navigate=useNavigate();

    const HandleOk= async e =>{
        e.preventDefault();
        navigate({pathname:"/",state:location.state});
    }
    return (
        <div className='registerstatus'>
            <p>account was created</p>
            <Button  onClick={HandleOk}> OK </Button>
            </div>
    )
}
      
