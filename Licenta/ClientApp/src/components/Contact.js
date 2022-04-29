import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useReducer, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import NavbarPac from "./Navbar/NavbarPac";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";

import './Form.css'
{/*
async function PostEvents(credentials)
{
  console.log(credentials);
  return fetch('http://localhost:5000/api/event/addevent' , {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body :JSON.stringify(credentials)
  })
  .then(data =>data )
}
*/}


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const event = [
   {
       
   }
]



async function createCredentials(credentials)
{
    return credentials;
}



export default function Contact(props) {

 
  const [eventsUser,setEventUser]=useState(props.Username);
  const [eventdate, setEventDate]=useState("");

    
   const [showEventWindow,setShowEventWindow]=useState(false);
   const handleClose = () =>setShowEventWindow(false);
   const handleShow = () =>setShowEventWindow(true);

   const [showEventEdit,setShowEventEdit]=useState(false);
   const handleEditClose= () => setShowEventEdit(false);
   const handleEditShow = () => setShowEventEdit(true);

   
    const[newEvents ,setNewEvents] = useState({title: "" ,  start: "" , end:""});
    const[allEvents ,setAllEvents] = useState(getLocalItems());
    
   
    function handleAddEvents () {
      setAllEvents([...allEvents, newEvents])
    }

// SAVE LS

    useEffect(() => {
      localStorage.setItem('allEvents', JSON.stringify(allEvents));
    }, [allEvents]);

//Get LS
const getLocalItems= () => {
  let list= localStorage.getItem('allEvents');
  console.log(allEvents);

  if(list) {
    return JSON.parse(localStorage.getItem('allEvents'));
  }
  else{
      return [];
  }
}
   
  {/*  const SaveEvents =async e =>{
        e.preventDefault();
        const response= await PostEvents({
              eventsUser,
              newEvents,
              eventdate
        });
        if(response.ok)
        window.location.reload(false);
    }

    const handeSaveEvent = async e =>
    {
      e.preventDefault();
      const response =await PostEvents({
        newEvents,
        eventsUser
      });
    } */}
    

    return (
      <>
         <NavbarPac />
         <div className="Programare">
            <h1>Calendar</h1>
            <h2>Programari</h2>
            <Button onClick={handleShow}>Adauga o programare</Button>
          </div>
         
         <Modal show={showEventWindow} onHide={handleClose}>
           <Modal.Header closeButton>
              <Modal.Title  >Va rugam intervalul orar sa fie de 30 minute</Modal.Title>

           </Modal.Header>
            <ModalBody className="Mini-form">
                <input className="input-label" type="text" placeholder=" Numele de familie si numarul de telefon "  
                value= {newEvents.title} onChange={(e) => setNewEvents( { ...newEvents, title : e.target.value })} />
                  <DatePicker className="datepick" placeholderText="Ora de incepere a consultatiei" 
                  selected={newEvents.start} onChange={(start) => setNewEvents({...newEvents, start})} 
                  showTimeSelect
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 12),
                    setHours(setMinutes(new Date(), 30), 12),
                    setHours(setMinutes(new Date(), 0), 13),
                    setHours(setMinutes(new Date(), 30), 13),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 30), 14),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 30), 14),
                    setHours(setMinutes(new Date(), 0), 15),
                    setHours(setMinutes(new Date(), 30), 15),
                    setHours(setMinutes(new Date(), 0), 16),
                    setHours(setMinutes(new Date(), 30), 16),
                    setHours(setMinutes(new Date(), 0), 17),
                  ]}
                    dateFormat="MMMM d, yyyy h:mm aa"/>
                      
                     <DatePicker className ="datepick" placeholderText="Ora de incepere a consultatiei" style={{marginRight:"10px" }}
                  selected={newEvents.end} onChange={(end) => setNewEvents({...newEvents, end })} 
                  showTimeSelect
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 12),
                    setHours(setMinutes(new Date(), 30), 12),
                    setHours(setMinutes(new Date(), 0), 13),
                    setHours(setMinutes(new Date(), 30), 13),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 30), 14),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 30), 14),
                    setHours(setMinutes(new Date(), 0), 15),
                    setHours(setMinutes(new Date(), 30), 15),
                    setHours(setMinutes(new Date(), 0), 16),
                    setHours(setMinutes(new Date(), 30), 16),
                    setHours(setMinutes(new Date(), 0), 17),
                  ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                   
                   />
                  
                   </ModalBody>
                      <Modal.Footer>
                        <Modal.Title>Salvati o sigura data ,nu apasati de mai multe ori</Modal.Title>
                        <Button variant="secondary" onClick={handleClose} >
                         Inchide
                        </Button>
                        <Button variant="primary" onClick={handleAddEvents} >
                          Salveaza
                        </Button>
                   </Modal.Footer>     
              </Modal>



              <Modal show={showEventEdit} onHide={handleEditClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Editeaza Programarea</Modal.Title>
                  </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={handleEditClose} variant="secondary">Close</Button>
                  <Button variant="primary">Editeaza</Button>
                </Modal.Footer>
                
                </Modal>


              
            <Calendar  onSelectEvent={handleEditShow} onSelectSlot={handleShow} localizer={localizer}  events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" ,zIndex:"4" }} />
       
        </>
    );
}


