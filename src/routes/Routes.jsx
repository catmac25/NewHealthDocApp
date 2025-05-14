import React from "react"
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Contact from '../pages/contacts/contact'
import FeedBack from "../pages/feedback/FeedBack";
import tnc from '../pages/tnc'
import {Routes, Route} from "react-router-dom";
import Donate from "../pages/donation/donate";
import Appointment from "../pages/appointments/appointment";
import UserProfile from "../pages/profile/profile";
const Routers = ()=>{
    return (
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/services' element = {<Services/>}/> 
            <Route path = '/login' element = {<Login/>}/> 
            <Route path = '/signup' element = {<Signup/>}/> 
            <Route path = '/contactus' element = {<Contact/>}/>
            <Route path = '/feedback' element = {<FeedBack/>}/>
            <Route path = '/tnc' element = {<tnc/>}/>
            <Route path = '/donate' element= {<Donate/>}/>
            <Route path = '/appointment' element= {<Appointment/>}/>
            <Route path = "/profile" element = {<UserProfile/>}/>
        </Routes>
    )
};

export default Routers;