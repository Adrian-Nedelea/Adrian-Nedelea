import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash,ArrowDownCircle} from 'react-feather'
import { Button } from 'react-bootstrap';

import './Form.css'
export default function TableRezBd(){
  const [data, setDate]=useState([]);
 const [query, setQuery]=useState("");
 

  useEffect(() => {
    Axios.get('http://localhost:5000/api/review/getall')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);
     const arr=data.map((data, index) => {
       return (
        <></>
       )
     })

  
  return (

  <>
        <p className='SubTitle '>Recenzi <br/><ArrowDownCircle size={35} style={{color:'#2FB7D7'}} /></p>
      
    <Table striped bordered hover className='Table-Rev' >
  <thead>
    <tr >
   <th>Numele</th>
   <th> star</th>
   <th>Altele</th>
    </tr>
  </thead>
  <tbody>
        {data.filter(data => data.partitionKey.toLowerCase().includes(query) ) .map((data) => (
          <tr >
            <td >{data.partitionKey} </td>
            <td>{data.rowKey}</td>
            <td>{data.text}</td>
        </tr>
      ))}
 
  </tbody>
</Table>
</>
  )
}
