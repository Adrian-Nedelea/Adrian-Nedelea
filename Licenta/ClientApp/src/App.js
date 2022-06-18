import React from 'react';
import {Route ,Routes} from 'react-router-dom'

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import SignForm from './components/SignForm';
import LoginForm from './components/LoginForm';

import DocLog from './components/DocLog';
import RegisterSuccess from './components/RegisterSuccess';
import RegisterFailed from './components/RegisterFailed';
import LoginFailed from './components/LoginFailed';
import UserLoggedIn from './components/UserLoggedIn';
import  TablePgr  from './components/TablePgr'
import DocForm from './components/DocForm/DocForm';
import HomeDoc from './components/HomeDoc';
import AfterEvent from './components/DocForm/AfterEvent';

import RezultatDb from './components/DocForm/RezultatDb';

import Review from './components/Review';
import TableReview from './components/TabelReview'








export default function App () {
 
  
    return (
    <>
     <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Services" exact element={<Services/>} />
          <Route path="/Contact" exact element={<Contact/>} />
          <Route path="/SignForm" exact element={<SignForm/>} />
          <Route path="/LoginForm" exact element={<LoginForm/>}/>
          <Route path="/DocLog" exact element={<DocLog/>}/>
          <Route path="/RegisterSuccess" exact element={<RegisterSuccess/>}/>
          <Route path="/RegisterFailed" exact element={<RegisterFailed/>}/>  
          <Route path="/LoginFailed" exact element={<LoginFailed/>} />
          <Route path="/UserLoggedIn" exact element={<UserLoggedIn/>} />
          <Route path="/TablePgr" exact element={<TablePgr/>} />
          <Route path="/DocForm" exact element={<DocForm/>} />
          <Route path="/HomeDoc" exact element={<HomeDoc/>} />
          <Route path="/AfterEvent" exact element={<AfterEvent/>}/>
          <Route path="/RezultatDb" exact element={<RezultatDb/>} />
          <Route path="/Review" exact element={<Review/>}/>
          <Route path="/TableReview" exact element={<TableReview/>} />
      </Routes>
    </>

    
    );

  }

