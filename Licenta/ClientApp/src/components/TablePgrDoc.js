import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash,ArrowDownCircle} from 'react-feather'
import { Button } from 'react-bootstrap';

import './Form.css'
export default function TablePgr(){
  const [data, setDate]=useState([]);
 const [query, setQuery]=useState("");
 

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

    //  console.log(data.filter(data=>data.partitionKey.toLowerCase().includes("ad")));
  return (

  <>
   
    <div className='Input'>
      <span className='Span'>Cauta dupa zi sau Nume</span>
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
          <tr>
      <td >{data.partitionKey} </td>
       <td>{data.number}</td>
       <td>{data.rowKey}</td>
        </tr>
      ))}
        {data.filter(data => data.partitionKey.toLowerCase().includes(query) ) .map((data) => (
          <tr >
      <td >{data.partitionKey} </td>
       <td >{data.number}</td>
       <td>{data.rowKey}</td>
        </tr>
      ))}
 
  </tbody>
</Table>
</>
  )
}
