import React ,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios'
import {Edit2,Delete, Trash} from 'react-feather'
import { Button } from 'react-bootstrap';

import './Form.css'
export default function TablePgr(){
  const [data, setDate]=useState([]);
 const [query, setQuery]=useState("");
 

  useEffect(() => {
    Axios.get('http://localhost:5000/api/event/getall')
     .then(response => setDate(response.data)).catch(err => console.log(err));
     }, []);
 

    //  console.log(data.filter(data=>data.partitionKey.toLowerCase().includes("ad")));
  return (

  <>
   
    <div className='Input'>
      <span className='Titlu-Ind-Prog'>Caută ziua dorită pentru a vedea ce ore sunt libere<br/>Pentru o căutare eficientă urmați formatul <br/>
      an-luna-zi | luna-zi </span>
      <input className='InputSearch' type="number" placeholder='Scrie data dorită' onChange={(e)=> setQuery(e.target.value)} />
      </div>
    <Table striped bordered hover className='Tabel'>
  <thead>
    <tr>
      <th>Numele</th>
      <th>Ziua si ora</th>
    
    </tr>
  </thead>
  <tbody>
     
      {data.filter(data => data.rowKey.toLowerCase().includes(query)).map((data) => (
          <tr key={data.partitionKey}>
        <td >{data.partitionKey} </td>
       <td>{data.rowKey}</td>
       </tr>
      ))}
 
  </tbody>
</Table>
</>
  )
}
