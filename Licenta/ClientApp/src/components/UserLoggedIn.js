import React ,{useRef,useEffect,useState}from "react";
import NavbarPac from './Navbar/NavbarPac'
import Avatar from './Avatar'
import SupportWindow from "./SupportWindow/SupportWind";
import {Table} from 'react-bootstrap'
import axios from "axios";

export default function UserLoggedIn (props){
    const [data, setDate]=useState([]);
    const [query, setQuery]=useState(props.Username);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/event/getall')
         .then(response => setDate(response.data)).catch(err => console.log(err));
         }, []);
     
   
    return(
        <>
        <NavbarPac/>
        <p className="Title">Rezultatele Tale</p>

        <Table striped bordered hover className='Tabel'>
  <thead>
    <tr>
      <th>Numele</th>
      <th>Ziua si ora</th>
    
    </tr>
  </thead>
  <tbody>
     
      {data.filter(data => data.rowKey.toLowerCase().includes(query)).map((data) => (
          <tr>
        <td >{data.partitionKey} </td>
       <td>{data.rowKey}</td>
       </tr>
      ))}
 
  </tbody>
</Table>
        </>
       
    )
}
