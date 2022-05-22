import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {Edit2,Delete, Trash} from 'react-feather'
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function TablePgrDoc(){
  const [data, setDate]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/event/getall')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);

  

     const postDelete = (id, e)=> {
      e.preventDefault();
      axios.delete(`http://localhost:5000/api/event/delete/${data.id}`) 
      .then(response => console.log('Delted!',response)).catch(err => console.log(err));
     }
    

     const arr=data.map((data, index) => {
       return (
        <tr >
        <td>{data.partitionKey} </td>
        <td>{data.number}</td>
        <td>{data.rowKey}</td>
        <td> <Button><Edit2 size={20}/></Button>  <Button onClick={(e) =>postDelete(data.id,e)}><Trash size={20} />Delete</Button></td>
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
