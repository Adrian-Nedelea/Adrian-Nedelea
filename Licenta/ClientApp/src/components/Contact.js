import React ,{useState }from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import Navbar from './Navbar/Index'
import DatePicker from 'react-datepicker'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import 'react-datepicker/dist/react-datepicker.css'
import TablePgr from './TablePgr';
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
       alert('Sa adaugat!')
      }
    }
   
  return (
      <>
        <Navbar/>
        <div className='ProgContainer'>
        
        <div className='TopTextPgr'>  Bine ai venit <br/></div>
      
        <Button className='ButonProg' onClick={handleShow} >
          Formular
        </Button>
        <div className='StripePgr'/>
        <div className='BottomTextPgr'>Intra <br/> pentru a crea o programare</div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adauga o PROGRAMARE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group  controlId="eventName">
              <Form.Label >Numele si prenumele</Form.Label>
              <Form.Control  type="text" placeholder="Nume si prenume " 
              value={eventName}
              onChange={(e)=>setEventName(e.target.value)}  />   
            </Form.Group>

            <Form.Group controlId='eventNumber'>
                <Form.Label>numar de telefon</Form.Label>
                <Form.Control value={eventNumber}  type="number" placeholder='Numarul de telefon'
                 onChange={(e) => setEventNumber(e.target.value) }
                  />
              </Form.Group>

                <Form.Group controlId='eventDate'>
                <Form.Label>Ora si ziua</Form.Label>
                <DatePicker 
                    selected={eventDate}
                    onChange={(e) => setEventDate(e)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 12)}
                    maxTime={setHours(setMinutes(new Date(), 30), 17)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                     </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
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

