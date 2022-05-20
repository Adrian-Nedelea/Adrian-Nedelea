import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {User,LogIn} from 'react-feather'



async function registerDoc (credentials)
{
   return fetch('Http://localhost:5000/api/doc/register', {
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(credentials)
   })
   .then(data =>data)
}

export default function DocForm() {
  const [Name ,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Username,setUsername]=useState("");
  const [Password, setPassword]=useState("");
  const [ConfPassword, setConfPassword]=useState("");
 
 let navigate=useNavigate();

  function validateForm (){
    return  ValidateName() && ValidateUsername()  && ValidateEmail()  && ValidatePassword() && ValidConfPass();
  }

  function ValidateName(){
    const ValName= RegExp('(?=.*[a-z])(?=.{8,})')
   return ValName.test(Name) && Name.length !=0;
  }
  function ValidateUsername(){
    return Username.length>5;
   }
 

  function ValidateEmail(){
    const ValEmail= RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
   return ValEmail.test(Email);
  }

  function ValidatePassword()
  {

    const ValPass= RegExp("(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return  ValPass.test(Password);
  
  }
  

  function ValidPassIt2(){

    const VallItem=RegExp("(?=.*[A-Z])");
    return VallItem.test(Password);
  }
  function ValidPassIt1(){

    const VallItem=RegExp("(?=.{8,})");
    return VallItem.test(Password);
  }
  function ValidPassIt3(){

    const VallItem=RegExp("(?=.*[0-9])");
    return VallItem.test(Password);
  }

  function ValidPassIt4(){

    const VallItem=RegExp("(?=.*[!@#\$%\^&\*])");
    return VallItem.test(Password);
  }

  function ValidConfPass(){
    return Password===ConfPassword ;
  }


  const handleSubmit = async e =>{
    e.preventDefault();

    const response =await registerDoc({
      Name,
      Email,
      Username,
      Password,
     
    });
    console.log(response);
    if(!response.ok){
     alert('Nu a putut fi creat contul, exista deja!');
    }
    else{
      navigate('/DocLog');
    }
  }
 
  return (
    <>
    <div className='Back'>
    <div className='Formular'>
      <Form onSubmit={handleSubmit} className='Form1'>
        <div className='Form1-inner'>
        <div className='Title'>Creaza Contul</div>
      
            <Form.Group className={ Name.length===0 ? "Form1-Group" : ValidateName() ? "Form1-Group success" : "Form1-Group error"} controlId="Name">
              <Form.Label className='label'>Numele si prenumele</Form.Label>
              <Form.Control className={ Name.length===0 ? "Form1-Control " : ValidateName() ? "Form1-Control success" : "Form1-Control error" }  type="text" placeholder="Nume si prenume " 
              value={Name}
              onChange={(e)=>setName(e.target.value)}  />   
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small >Minim 7 caractere</small>      
       
            </Form.Group>
            

            <Form.Group className={ Username.length===0 ? "Form1-Group " :ValidateUsername() ? "Form1-Group success" : "Form1-Group error"} controlId="Username">
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control className={Username.length===0 ? "Form1-Control " :ValidateUsername() ? "Form1-Control success" : "Form1-Control error"}  type="text" placeholder="Enter Username"
          
              value={Username}
              onChange={(e)=>setUsername(e.target.value)} />
               <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Cel putin 6 caractere</small>
            </Form.Group>
 

            <Form.Group className={ Email.length===0 ? "Form1-Group " :ValidateEmail() ? "Form1-Group success" : "Form1-Group error"} controlId="Email">
              <Form.Label className='label'>Adresa Email</Form.Label>
              <Form.Control className={Email.length===0 ? "Form1-Control " :ValidateEmail() ? "Form1-Control success" : "Form1-Control error"}  type="email" placeholder="Adresa de email"
              
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Format aaaa@gmail.com</small>
            </Form.Group>

            <Form.Group className={ Password.length===0 ? "Form1-Group " :!ValidatePassword() ? "Form1-Group error" : " Form1-Group success"} controlId="Password">
              <Form.Label className='label'>Parola</Form.Label>
              <Form.Control className={Password.length===0 ? "Form1-Control " :!ValidatePassword() ? "Form1-Control error" : " Form1-Control success"}  type="password" placeholder="Parola" 
              value={Password}
              autoComplete="off"
              onChange={(e)=>setPassword(e.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Verifica cerintele  <br/></small>
                <label className={!ValidPassIt1() ? "label-pass" : "label-pass success"}>8 caractere </label>
                <label className={!ValidPassIt2() ? "label-pass" : "label-pass success"}>Majuscula</label>
                <label className={!ValidPassIt4() ? "label-pass" : "label-pass success"}>Simbol</label>
                <label className={!ValidPassIt3() ? "label-pass" : "label-pass success"}>Numar</label>
            </Form.Group>

            <Form.Group className={ ConfPassword.length===0 ? "Form1-Group " :!ValidConfPass() ? "Form1-Group error" : " Form1-Group success"} controlId="ConfPassword">
              <Form.Label className='label'>Confirma Parola</Form.Label>
              <Form.Control className={ConfPassword.length===0 ? "Form1-Control " :!ValidConfPass() ? "Form1-Control error" : " Form1-Control success"} type="password" placeholder="Confirma Parola" 
              value={ConfPassword}
              onChange={(e)=>setConfPassword(e.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Parola nu este la fel </small>
              
            
            </Form.Group>
            


            <Button className='button' type="submit" disabled={!validateForm()}>
            <LogIn size={20}/>
              Submit
            </Button>
            

            <div className='Btn-center'>
              <p className='text-btn'>Aveti deja un cont ?</p>   
             <Button className='buttonR'   href="/LoginForm">
            <User size={20}/>
             Autentificare
            </Button>
            </div>
          </div>
      </Form>
      </div>
    </div>
  </>
  )
}

