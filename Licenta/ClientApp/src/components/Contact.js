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
import { Button } from "react-bootstrap";

import './Form.css'
import { set } from "date-fns";
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
    
   
    const[newEvent ,setNewEvent] = useState({title: "" , start: '' , end:""});
    const[allEvent ,setAllEvent] = useState(event);
   
    function handleAddEvent () {
        setAllEvent([...allEvent, newEvent])
    }

    return (
      
        <div className="App">
          <Navbar />
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
          
            <div> 
                <input type="text" placeholder="Numele doctorului "  style={{width: "20%", marginRight:"10px"}}
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
                      <DatePicker placeholderText="Ora de incepere a consultatiei" style={{marginRight:"10px"}}
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
                    dateFormat="MMMM d, yyyy h:mm aa"/>
                  <Button onClick={handleAddEvent}>AddEvent</Button>
            </div>
            <Calendar localizer={localizer}  events={allEvent} startAccessor="start"  style={{ height: 500, margin: "50px" }} />
        </div>
    );
}


