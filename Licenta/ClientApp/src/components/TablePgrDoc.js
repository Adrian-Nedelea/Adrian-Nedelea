import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash} from 'react-feather'
import { Button } from 'react-bootstrap';


export default function TablePgrDoc(){
  const [data, setDate]=useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/event/getall')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);
     const arr=data.map((data, index) => {
       return (
        <tr>
          <td>{data.partitionKey} </td>
        <td>{data.number}</td>
        <td>{data.rowKey}</td>
        <td> <Button><Edit2 size={20}/></Button>  <Button><Trash size={20} /></Button></td>
      </tr>
       )
     })
  return (

    
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Nume</th>
      <th>Telefon</th>
      <th>Ziua si ora</th>
    </tr>
  </thead>
  <tbody>
     {arr} 
  </tbody>
</Table>
  )
}
