import React, {useState} from 'react'
import {Button ,Form,} from 'react-bootstrap'
import NavbarDoc from '../Navbar/NavBarDoc'
import {Send,ArrowDownCircle} from 'react-feather'
import TableRezBd from '../TableRezBd'

async function saveRez (credentials)
{
   return fetch('Http://localhost:5000/api/rezultat/addRezultat', {
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(credentials)
   })
   .then(data =>data)
}



function AfterEvent() {


  const [Nume ,setNume]=useState("");
  const [Data,setData]=useState("");
  const [CNP,setCNP]=useState("");
  const [Problema, setProblema]=useState("");
  const [Tratament,setTratament]=useState("");
  const [Varsta,setVarsta]=useState("");
 

  function Valid (){
    return Nume.length>0 && Data.length>0 && CNP.length===13 && Problema.length && Tratament.length>0 && Varsta.length>0;
  }

const handleSubmit = async e =>{
  e.preventDefault();

  const response =await saveRez({
    Nume,
    Data,
    CNP,
    Varsta,
    Problema,
    Tratament,
   
  });
  console.log(response);
  if(!response.ok){
   alert('NU se POATE SALVA!');
  }
  else{
    alert('Ai salvat ');
  }
}

function ValidateFullname(){
  const ValFullName= RegExp('(?=.*[a-z])(?=.{8,})')
 return ValFullName.test(Nume) && Nume.length !=0;
}

// function validateCNP(){
//   const ValCNP= RegExp('^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$')
//   return ValCNP.test(CNP) && CNP.length !=0;
// }
function validateCNP(){
  return CNP.length==13;
}
function validateVarsta(){
  return Varsta.length>=1 && Varsta.length<3;
}

function validDate(){
  return Data.length>5;
}

  
  return (
    <>
    <NavbarDoc/>
  
<div className='Login' style={{marginTop:'8rem'}}>
      <Form  onSubmit={handleSubmit} className="Form1">
        <div className='Form1-inner'>
        <div className='Title'>Trimite rezultatul la baza de date</div>
  
        <Form.Group className={ Nume.length===0 ? "Form1-Group" : ValidateFullname() ? "Form1-Group success" : "Form1-Group error"}  controlId="Nume">
              <Form.Label className="SubTitle">Numele și Prenumele</Form.Label>
              <Form.Control className={ Nume.length===0 ? "Form1-Control" : ValidateFullname() ? "Form1-Control success" : "Form1-Control error"}  type="text" placeholder="Numele si prenumele Pacientului" 
              value={Nume}
              onChange={(e)=>setNume(e.target.value)}/>
                <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>
              <small >Minim 7 caractere</small>    
            </Form.Group>
            <Form.Group className={ CNP.length===0 ? "Form1-Group" : validateCNP() ? "Form1-Group success" : "Form1-Group error"}  controlId="CNP">
              <Form.Label className="SubTitle">Codul numeric personal</Form.Label>
              <Form.Control className={ CNP.length===0 ? "Form1-Control" : validateCNP() ? "Form1-Control success" : "Form1-Control error"}  type="number" placeholder="CNP-ul " 
              value={CNP}
              onChange={(e)=>setCNP(e.target.value)}/>
               <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>
              <small >Cnp 13 cractere</small>  
            </Form.Group>
            <Form.Group className= { Varsta.length===0 ? "Form1-Group" : validateVarsta() ? "Form1-Group success" : "Form1-Group error"}  controlId="Varsta">
              <Form.Label className="SubTitle">Vârsta</Form.Label>
              <Form.Control className={ Varsta.length===0 ? "Form1-Control" : validateVarsta() ? "Form1-Control success" : "Form1-Control error"}  type="number" placeholder="Vârsta " max={99}
              value={Varsta}
              onChange={(e)=>setVarsta(e.target.value)}/>
                <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>

            </Form.Group>
        
           
            <Form.Group className={ Data.length===0 ? "Form1-Group" : validDate() ? "Form1-Group success" : "Form1-Group error"} controlId="Dara">
              <Form.Label className="SubTitle">Data </Form.Label>
              <Form.Control className={ Data.length===0 ? "Form1-Control" : validDate() ? "Form1-Control success" : "Form1-Control error"}  type="text" placeholder="Data" 
              value={Data}
              onChange={(e) => setData(e.target.value)}
                /> 
                  <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark"></i>
            </Form.Group>

            <Form.Group className="Form1-Group" controlId="Rezultat">
              <Form.Label className="SubTitle" >Problema</Form.Label>
              <Form.Control className='Form1-Control'  placeholder='Problema
              '  value={Problema}  onChange={(e)=> setProblema(e.target.value)}/>
            </Form.Group>
            <Form.Group className="Form1-Group" controlId="Tratament">
              <Form.Label className="SubTitle" >Tratamentul</Form.Label>
              <Form.Control className='Form1-Control'  placeholder='Tratament
              '  value={Tratament}  onChange={(e)=> setTratament(e.target.value)}/>
            </Form.Group>
            

         
            <Button className='button' type="submit" disabled={!Valid()} >
              <Send size={20}/>
              Trimite
            </Button>
        </div>
      </Form>
      </div>
     <div style={{marginTop:'25vh'}}>
       <TableRezBd/>
     </div>

    </>
  )
}

export default AfterEvent