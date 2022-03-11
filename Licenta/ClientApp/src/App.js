import React from 'react';
import {Route ,Routes} from 'react-router-dom'

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import SignForm from './components/SignForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar/Index'
import DocLog from './components/DocLog';



export default function App () {
  
    return (
    <>
     <Navbar />
     <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Services" exact element={<Services/>} />
          <Route path="/Contact" exact element={<Contact/>} />
          <Route path="/SignForm" exact element={<SignForm/>} />
          <Route path="/LoginForm" exact element={<LoginForm/>}/>
          <Route path="/DocLog" exact element={<DocLog/>}/>
      </Routes>
    </>

    
    );

  }

