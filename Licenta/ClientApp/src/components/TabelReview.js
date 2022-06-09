import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash,ArrowDownCircle} from 'react-feather'
import { Button } from 'react-bootstrap';
import {FaStar} from 'react-icons/fa'

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
        <p className='SubTitle '>Recenzii <br/><ArrowDownCircle size={35} style={{color:'#2FB7D7'}} /></p>
      
    <Table striped bordered hover className='Table-Rev' >
  <thead>
    <tr >
   <th>Numele</th>
   <th>Observații</th>
   <th>Nivelul de satisfacție</th>
    </tr>
  </thead>
  <tbody>
        {data.filter(data => data.partitionKey.toLowerCase().includes(query) ) .map((data) => (
          <tr >
            <td >{data.partitionKey} </td>
            <td>{data.text}</td>
            <td>{data.rowKey} <FaStar size={25} style={{color:"#ffc107", marginTop:'-7px'}}/></td>
        </tr>
      ))}
 
  </tbody>
</Table>
</>
  )
}
