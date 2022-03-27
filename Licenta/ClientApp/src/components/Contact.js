import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar/Index";
import { Button, Modal,Form, ModalBody } from "react-bootstrap";

import './Form.css'

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


export default function Contact() {
    
   const [showEventWindow,setShowEventWindow]=useState(false);
   const handleClose = () =>setShowEventWindow(false);
   
    const[newEvent ,setNewEvent] = useState({title: "" , numar: "", start: "" , end:""});
    const[allEvent ,setAllEvent] = useState(event);
   
    function handleAddEvent () {
        setAllEvent([...allEvent, newEvent])
    }

    return (
      <>
         <Navbar />
         <div className="Programare">
            <h1>Calendar</h1>
            <h2>Programari</h2>
          </div>
         <Modal show={showEventWindow} onHide={handleClose}>
           <Modal.Header closeButton>
              <Modal.Title>Add Event</Modal.Title>
           </Modal.Header>
            <ModalBody>
            <Form>
                <input type="text" placeholder=" Numele de familie si numarul de telefon "  style={{width: "20%", marginRight:"10px" }}
                value= {newEvent.title} onChange={(e) => setNewEvent({...newEvent ,title : e.target.value })} />
                  <DatePicker placeholderText="Ora de incepere a consultatiei" style={{marginRight:"10px"}}
                  selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} 
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
                      <DatePicker placeholderText="Ora de incepere a consultatiei" style={{marginRight:"10px" }}
                  selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} 
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
                   </Form>
                   </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "black"}}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleAddEvent} style={{backgroundColor: "orange"}}>
                          Save Changes
                        </Button>
                   </Modal.Footer>
                    
                  
              </Modal>
                  
            <Calendar localizer={localizer}  events={allEvent} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" ,zIndex:"4" }} />
       
        </>
    );
}


