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
    Axios.get('http://localhost:5000/api/rezultat/getData')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);
     const arr=data.map((data, index) => {
       return (
        <></>
       )
     })

  
  return (

  <>
   
    <div className='Input'>
      <span className='Span'>Cauta dupa Numele Pacientului </span>
      <input className='InputSearch' type="text" placeholder='Cauta' onChange={(e)=> setQuery(e.target.value)} />
    
      </div>
      <p className='SubTitle '>Datele pacientilor <br/><ArrowDownCircle size={35} style={{color:'#2FB7D7'}} /></p>
      
    <Table striped bordered hover className='Tabel'>
  <thead>
    <tr>
    <th>Numele</th>
    <th>CNP</th>
    <th>Varsta</th>
    <th>Data </th>
    <th>Problema</th>
    <th>Tratament</th>
    </tr>
  </thead>
  <tbody>
        {data.filter(data => data.partitionKey.toLowerCase().includes(query) ) .map((data) => (
          <tr >
      <td >{data.partitionKey} </td>
       <td >{data.cnp}</td>
       <td>{data.varsta}</td>
       <td>{data.rowKey}</td>
       <td>{data.problema}</td>
       <td>{data.tratament}</td>
        </tr>
      ))}
 
  </tbody>
</Table>
</>
  )
}
