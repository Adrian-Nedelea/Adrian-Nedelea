import React ,{useState, useEffect} from 'react';
import {Modal, ModalBody, Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash,ArrowDownCircle} from 'react-feather'
import { Button } from 'react-bootstrap';

import './Form.css'
import { set } from 'lodash';
import { getDate } from 'date-fns';

async function createCredentials(credentials)
{
    return credentials;
}

export default function TablePgr(){
  const [data, setDate]=useState([]);
 const [query, setQuery]=useState("");
 const [prog,setProg]=useState("");
 const [selected, setSelected] = useState(null);
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 const deleteEvent = async e => {
  e.preventDefault();
  const Nume = selected.partitionKey;
  const Data = selected.rowKey;
  const telefon = selected.telefon;

  const credentials = await createCredentials({
   Nume,
   Data,
   telefon
  });
 // console.log(credentials);

  const response = Axios.post('http://localhost:5000/api/event/delete', credentials);
  setTimeout(() => { window.location.reload(false); 
  }, 1000);   
}

  React.useEffect(() => {
    Axios.get('http://localhost:5000/api/event/getall')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);
     const arr=data.map((data, index) => {
       return (
        <></>
      //   <tr>
        
      //   <td>{data.partitionKey} </td>
      //   <td>{data.number}</td>
      //  <td>{data.rowKey}</td>
      
      //  </tr>
     
       )
     })

  return (

  <>
   
    <div className='Input'>
      <span className='Span'>Cauta dupa Zi sau Nume </span>
      <input className='InputSearch' type="text" placeholder='Cauta' onChange={(e)=> setQuery(e.target.value)} />
    
      </div>
      <p className='SubTitle '>Tabelul cu programari<br/><ArrowDownCircle size={35} style={{color:'#2FB7D7'}} /></p>
      
    <Table striped bordered hover className='Tabel'>
  <thead>
    <tr>
    <th>Numele</th>
    <th>Telefon</th>
    <th>Ziua si ora</th>
    </tr>
  </thead>
  <tbody>
      {/* {arr}   */}
      {data.filter(data => data.rowKey.toLowerCase().includes(query) ) .map((data) => (
          <tr onDoubleClick={() => setSelected(prog)}>
      <td >{data.partitionKey} </td>
       <td>{data.number}</td>
       <td>{data.rowKey}</td>
        </tr>
      ))}
        {data.filter(data => data.partitionKey.toLowerCase().includes(query) ) .map((data) => (
          <tr hidden>
      <td >{data.partitionKey} </td>
       <td >{data.number}</td>
       <td>{data.rowKey}</td>
        </tr>
      ))}
 
  </tbody>



 {/* { show ? (
   <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Dialog> <p style={{fontSize:'17px', textAlign:'center', color: 'red'}}>{selected.rowKey}</p></Modal.Dialog>
          <Modal.Dialog>Ceau </Modal.Dialog>
          <Modal.Dialog>Ceau </Modal.Dialog>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
 ):
 (
   <></>
 )} */}
</Table>
</>
  )
}
