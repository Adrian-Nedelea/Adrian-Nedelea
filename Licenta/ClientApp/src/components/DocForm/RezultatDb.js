import React, {useState} from 'react'
import {Button ,Form,} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import NavbarDoc from '../Navbar/NavBarDoc'
import {Send} from 'react-feather'

async function saveRez (credentials)
{
   return fetch('Http://localhost:5000/api/rezultat', {
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
  const [Medicatie,setMedicatie]=useState("");
  const [Varsta,setVarsta]=useState("");
 


const handleSubmit = async e =>{
  e.preventDefault();

  const response =await saveRez({
    Nume,
    Data,
    CNP,
    Varsta,
    Problema,
    Medicatie,
   
  });
  console.log(response);
  if(!response.ok){
   alert('NU se POATE SALVA!');
  }
  else{
    alert('Ai salvat ');
  }
}

  
  return (
    <>
    <NavbarDoc/>
  
<div className='Login' style={{marginTop:'14rem'}}>
      <Form  onSubmit={handleSubmit} className="Form1">
        <div className='Form1-inner'>
        <div className='Title'>Trimite la baza de date</div>
        <Form.Group className= "Form1-Group "  controlId="Nume">
              <Form.Label className="SubTitle">Numele si Prenumele</Form.Label>
              <Form.Control className="Form1-Control "  type="text" placeholder="Numele si prenumele Pacientului" 
              value={Nume}
              onChange={(e)=>setNume(e.target.value)}/>
            </Form.Group>
            <Form.Group className= "Form1-Group "  controlId="CNP">
              <Form.Label className="SubTitle">CNP</Form.Label>
              <Form.Control className="Form1-Control "  type="number" placeholder="CNP-ul " 
              value={CNP}
              onChange={(e)=>setCNP(e.target.value)}/>
            </Form.Group>
            <Form.Group className= "Form1-Group "  controlId="Varsta">
              <Form.Label className="SubTitle">Varsta</Form.Label>
              <Form.Control className="Form1-Control "  type="number" placeholder="Vasrta " 
              value={Varsta}
              onChange={(e)=>setVarsta(e.target.value)}/>
            </Form.Group>
        
           
            <Form.Group className="Form1-Group" controlId="Dara">
              <Form.Label className="SubTitle">Data </Form.Label>
              <Form.Control className='Form1-Control'  type="text" placeholder="Data" 
              value={Data}
              onChange={(e) => setData(e.target.value)}
                /> 
            </Form.Group>

            <Form.Group className="Form1-Group" controlId="Rezultat">
              <Form.Label className="SubTitle" >Problema</Form.Label>
              <Form.Control className='Form1-Control'  placeholder='Problema
              '  value={Problema}  onChange={(e)=> setProblema(e.target.value)}/>
            </Form.Group>
            <Form.Group className="Form1-Group" controlId="Tratament">
              <Form.Label className="SubTitle" >Tratament</Form.Label>
              <Form.Control className='Form1-Control'  placeholder='Tratament
              '  value={Medicatie}  onChange={(e)=> setMedicatie(e.target.value)}/>
            </Form.Group>

         
            <Button className='button' type="submit" >
              <Send size={20}/>
              Trimite
            </Button>
        </div>
      </Form>
      </div>


    </>
  )
}

export default AfterEvent