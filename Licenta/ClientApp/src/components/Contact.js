import {Link, useNavigate} from 'react-router-dom'
import Navbar from './Navbar/Index'

import React, { useEffect, useReducer, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import NavbarPac from "./Navbar/NavbarPac";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";


import './Form.css'
function Contact(props) {

  const [eventuser, setEventUser]=useState(props.Username);
  const [eventphone, setEventPhone]=useState(props.Phone);
  const [startDate, setStartDate] = useState();
  const [message, setMessage]= useState();
  const [numeDoc,setNumeDoc]=useState();
  const [eventdate,setEventDate]=useState();
  return (
    <>
     <NavbarPac/>
  < div >
      <Form  >
        <div >
        <div className='Title'>Fa o Programare</div>
       <Form.Group  controlId='message'>
        <Form.Label > Scopul  </Form.Label>
        <Form.Control   type="text" placeholder="O scurta descriere " 
           value={message}
           onChange={(e)=>setMessage(e.target.value)}    /> 
      </Form.Group>
      <Form.Group controlId='numeDoc' >
        <Form.Label > Numele Doctorului </Form.Label>
        <Form.Control   type="text" placeholder="Nume  " 
        value={numeDoc} onChange={(e)=> setNumeDoc(e.target.value)} /> 
      </Form.Group>

      <Form.Group  controlId="eventdate" >
        <Form.Label > Data cand a fost creat </Form.Label>
        <Form.Control   type="text" placeholder="Data creari  " 
         disabled='true'
         value={eventdate} onChange={setEventDate}
          /> 

      </Form.Group>
      <Form.Group controlId="ora">
        <Form.Label > Data si ora </Form.Label>
        <DatePicker  placeholderText="Ora de incepere a consultatiei"
                  selected={startDate} value={startDate}
                  onChange={(e) => setStartDate(e)}
                  showTimeSelect
                  minTime={setHours(setMinutes(new Date(), 0), 12)}
                  maxTime={setHours(setMinutes(new Date(), 30), 18)}
                    dateFormat="MMMM d, yyyy h:mm aa"/>
          </Form.Group>
      </div>
    </Form>
    </div>
    </>
  )
}

export default Contact