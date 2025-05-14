import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";

import Card from '../contacts/contactoption';

const Contact = ()=>{
    return (
        <>
        <section className="bg-white">
            <br/>
            <br/>
            <div className="grid grid-cols-1 place-items-center gap-y-4">
                <div>
                    {/* recommended  */}
                    <Card title = "Mail Us" icon = {AiFillMessage} 
                    des="It is most recommended that you mail us your query. We respond in minimum span of time"
                    item="newhealth@gmail.com"/>
                </div>
                <div className="grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-20 grid-cols-1 grid-rows-3 gap-y-5">
                    {/* other methods */}
                    <Card title = "Call Us" icon = {IoCall} des="Give us a call, our assistant will resolve your query" item="+91 9998746532"/>
                    <Card title = "Community" icon = {IoIosPeople} des="Text in the Community, maybe someone had a similar query.." item = "https://discord.com/"/>
                    <Card title = "Resolution Center" icon = {FaHandshakeSimple} des="Any transaction issue? We are here" item = "transaction.newhealth@gmail.com"/>
                </div>
            </div>
            <br/>
            <br/>
        </section>
        </>
    )
};

export default Contact;