import React ,{useState, useEffect} from 'react';
import {Modal, ModalBody, ModalDialog, Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash,ArrowDownCircle} from 'react-feather'
import { Button } from 'react-bootstrap';

import './Form.css'


async function createCredentials(credentials)
{
    return credentials;
}

export default function TablePgr(){
 const [getEvent, setGetEvent]=useState([]);
 const [query, setQuery]=useState("");
 const [prog,setProg]=useState("");
const [Data, setData]=useState("");
const [Nume, setNume]=useState("");
const [Telefon,setTelefon]=useState("");
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


 
 const deleteEvent = async e => {
  e.preventDefault();
  const eventName= Nume;
  const eventDate= Data;
  const eventNumber= Telefon;
  const credentials = await createCredentials({
    eventName,
    eventDate,
    eventNumber,
  });
  console.log(credentials);

  const data = Axios.post('http://localhost:5000/api/event/delete', credentials);
    
}

const confirmEvent= async e => {
  e.preventDefault();
  const eventName= Nume;
  const eventDate= Data;
  const eventNumber= Telefon;
  const credentials = await createCredentials({
    eventName,
    eventDate,
    eventNumber,
  });
  console.log(credentials);
  console.log ("Confirm");
  const data = Axios.post('http://localhost:5000/api/event/confirm', credentials);
}


console.log(Data, Nume ,Telefon);
  React.useEffect(() => {
    Axios.get('http://localhost:5000/api/event/getall')
     .then(response => setGetEvent(response.data)).catch(err => console.log(err));
     }, []);

  return (

  <>
   
    <div className='Input'>
      <span className='Span'>Cauta dupa Zi sau Nume </span>
      <input className='InputSearch' type="text" placeholder='Cauta' onChange={(e)=> setQuery(e.target.value)} />
    
      </div>
      <p className='SubTitle '>Tabelul cu programari<br/><ArrowDownCircle size={35} style={{color:'#2FB7D7'}} /></p>
      <p className='SubTitle'>Apasă de două ori pe una din informații pentru a intra în meniul de ștergere</p>
      
  <Table striped bordered hover className='Tabel'>
    <thead>
    <tr>
    <th>Numele</th>
    <th>Telefon</th>
    <th>Ziua si ora</th>
    </tr>
    </thead>
  <tbody>
    
      {getEvent.filter(getEvent => getEvent.rowKey.toLowerCase().includes(query) ) .map((getEvent) => (
          <tr key={getEvent.rowKey} onDoubleClick={() => { setShow(true);setTelefon(getEvent.number);setData(getEvent.rowKey); setNume(getEvent.partitionKey)}}>
       <td >{getEvent.partitionKey} </td>
       <td>{getEvent.number}</td>
       <td>{getEvent.rowKey}</td>
        </tr>
      ))}
        {getEvent.filter(getEvent => getEvent.partitionKey.toLowerCase().includes(query) ) .map((getEvent) => (
          <tr style={ query.length===0 ? { visibility:'collapse' } : {visibility:'visible'}}>
      <td >{getEvent.partitionKey} </td>
       <td >{getEvent.number}</td>
       <td>{getEvent.rowKey}</td>
        </tr>
      ))}
 
    </tbody>
  </Table>

  <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='TitluProg'>Programare {Nume} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='TextDateProg'>Nume : {Nume}</p>
          <p className='TextDateProg'>Data : {Data}</p>
          <p className='TextDateProg'>Telefon : {Telefon}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ieșire
          </Button>
          <Button variant="primary" onClick={deleteEvent }>
            <Trash size={25}/>Șterge 
          </Button>
          <Button hidden variant="primary" onClick={confirmEvent }>
           Confirmă programarea
          </Button>
        </Modal.Footer>
      </Modal>
    </>



 </>

  )
}