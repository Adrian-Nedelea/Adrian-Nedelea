import React ,{useState }from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { ArrowUpCircle} from 'react-feather'
import Navbar from './Navbar/Index'
import DatePicker from 'react-datepicker'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import 'react-datepicker/dist/react-datepicker.css'
import TablePgr from './TablePgr';
import axios from 'axios'
import './Form.css'

async function AddEvent (credentials)
{
   return fetch('Http://localhost:5000/api/event/addEvent', {
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(credentials)
   })
   .then(data =>data)
}

export default function Programari () {
  const [show, setShow] = useState(false);
  const[eventName,setEventName]=useState("");
  const [eventDate ,setEventDate]=useState("");
  const[eventNumber,setEventNumber]=useState("");
 
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async e =>{
      e.preventDefault();
  
      const response =await AddEvent({
      eventName,
      eventDate,
      eventNumber,
      });
      console.log(response);
      if(!response.ok){
       alert('Nu s-a adaugat!');
      }
      else{
       alert('Sa adaugat!dati refres la pagina pentru a putea verifica');

      }
    }

    function ValidatePhone(){
      const ValPhone= RegExp(/(^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$)/);
      return ValPhone.test(eventNumber) ;
    }
    
    function ValidateName(){
      const ValidateName= RegExp('(?=.*[a-z])(?=.{8,})')
   return ValidateName.test(eventName) && eventName.length !=0;
    }
   

    function Valid(){
      return  ValidateName() && ValidatePhone()  && eventDate>0;
    }
 
   
  return (
      <>
        <Navbar/>
        <div className='ProgContainer'>
        
        <div className='TopTextPgr'>  Bine ai venit <br/></div>
      
        <Button className='ButonProg' onClick={handleShow} >
         Creaza o Programare
        </Button>
        <div className='StripePgr'/>
        <div className='BottomTextPgr' ><ArrowUpCircle size={40}/> <br/> Intră aici pentru a-ți crea o programare</div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='Title-Prog'>Adaugă o PROGRAMARE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group className={ eventName.length===0 ? "Form1-Group" : ValidateName() ? "Form1-Group success" : "Form1-Group error"} controlId="FullName">
              <Form.Label className='SubTitle' style={{marginLeft:'8.5rem'}}>Numele si prenumele</Form.Label>
              <Form.Control className={ eventName.length===0 ? "Form1-Control " : ValidateName() ? "Form1-Control success" : "Form1-Control error" }  type="text" placeholder="Nume si prenume " 
              value={eventName}
              onChange={(e)=>setEventName(e.target.value)}  />   
              <i className='fas fa-check-circle'></i>
              <i className="fa-solid fa-circle-xmark" ></i>
              <small >Minim 7 caractere</small>      
       
            </Form.Group>

            <Form.Group className={ eventNumber.length===0 ? "Form1-Group " :ValidatePhone() ? "Form1-Group success" : "Form1-Group error"} controlId="Phone">
              <Form.Label className="SubTitle" style={{marginLeft:'8.5rem'}}>Numar Telefon</Form.Label>
              <Form.Control className={eventNumber.length===0 ? "Form1-Control " :ValidatePhone() ? "Form1-Control success" : "Form1-Control error"}  type="number" placeholder="Numarul de telefon" 
              value={eventNumber}
              onChange={(e)=>setEventNumber(e.target.value)}/>
               <i className='fas fa-check-circle' style={{right:'50px'}}></i>
              <i className="fa-solid fa-circle-xmark" style={{right:'50px'}}></i>
              <small>Incepe cu  07  si de 10 cifre</small>
            </Form.Group>

                <Form.Group controlId='eventDate'>
                <Form.Label className="SubTitle"  style={{marginLeft:'10rem'}}>Ora si ziua</Form.Label>
                <DatePicker   
                  className='DatePick'
                    selected={eventDate}
                    onChange={(e) => setEventDate(e)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 12)}
                    maxTime={setHours(setMinutes(new Date(), 30), 17)}
                    dateFormat= "dd-MM-yyyy h:mm aa " 
                  />
                     </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}  disabled={!Valid()}>
             Adauga
            </Button>
          </Modal.Footer>
        </Modal>

        <div>
          <TablePgr/>
        </div>
        
      </>
    );
}

