import React from "react"
import { useState } from "react";
import Calendar from "./calendar";
import { toast } from "react-toastify";
import BASE_URL from "../../config.js";
import Slots from "./slots";
const Appointment = ()=>{
    const [selected, setSelected] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [query, setQuery] = useState("");
    const toggleColor = (index)=> {
        setSelected(selected === index ? null : index);
    }
    const handleSubmit = async () =>{
        const token = localStorage.getItem("token"); // Get token from storage

    if (!token) {
        toast.error("Please log in first");
        return;
    }
    if (!selected || ![1,2,3,4].includes(selected)){
        toast.error("please select appointment type first");
        return;
    }
        const appointmentData = {
            appointmentType : selected,
            date: new Date(selectedDate).toISOString(),
            slot: selectedSlot,
            query: query||""
        }
        if (!selectedSlot || selectedSlot.trim() === "") {  // Ensure slot is not null or empty
            toast.error("Please select a time slot.");
            return;
        }
        try{
            const response = await fetch(`${BASE_URL}/appointments`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(appointmentData)
            });

            const textResponse = await response.text();
            let result;
        try {
            result = JSON.parse(textResponse);  // Parse manually to catch errors
        } catch (jsonError) {
            throw new Error("Invalid JSON response from server");
        }
            if (!response.ok){
                throw new Error(result.message);
            }
            toast.success("Appointment Booked Successfully");
        }catch(error){
            toast.error(error.message);
        }
    };
    return (
        <>
        <section>
            <div className="flex flex-col justify-center items-center gap-y-10">
                <br/>
                <p className="font-semibold "> Select Appointment Type</p>
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 place-items-center gap-x-65 gap-y-10">
                    <div className= {`h-20 w-90 rounded-xl shadow-xl font-semibold flex flex-col justify-center items-center ${selected===1 ? 
                        "bg-green-500 text-white": "bg-slate-100"}
                    } `} onClick ={() => toggleColor(1)}>
                        Routine-CheckUp 
                    </div>
                    <div className= {`h-20 w-90 rounded-xl shadow-xl font-semibold flex flex-col justify-center items-center ${selected===2 ? "bg-green-500 text-white" :"bg-slate-100"}`} onClick = {() => toggleColor(2)}>
                        Personal Consultation
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 place-items-center gap-x-65 gap-y-10">
                    <div className= {`h-20 w-90 rounded-xl shadow-xl font-semibold flex flex-col justify-center items-center ${selected===3 ? "bg-green-500 text-white" : "bg-slate-100"}`} onClick = {() => toggleColor(3)}>
                        Lab Appointments and Diagnostics
                    </div>
                    <div className= {`h-20 w-90 rounded-xl shadow-xl font-semibold flex flex-col justify-center items-center ${selected===4 ? "bg-green-500 text-white" : "bg-slate-100"}`} onClick = {() => toggleColor(4)}>
                        Mental Health Consultation
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 place-items-center grid-cols-1 grid-rows-2 gap-y-20">
            <Calendar setSelectedDate = {setSelectedDate}/>
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">Select Slot</p>
                <Slots setSelectedSlot = {setSelectedSlot}/>
                <br/>
                <br/>
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">Any query or description (optional) ?</p>
                <br/>
                <textarea className="h-20 w-80 shadow-xl flex flex-col justify-center items-center" value = {query} onChange={(e)=> setQuery(e.target.value)}></textarea>
            </div>
            <br/>
            <div>
                <button type = "submit" onClick={handleSubmit} className="h-20 w-80 rounded-xl shadow-xl bg-green-500 text-white font-semibold"> Save Appointments </button>
            </div>
            </div>
            </div>
            <br/>
            <br/>
        </section>
        </>
    )
}
export default Appointment;