import React from "react";
import docimagesign from '../assets/docimagesign.avif'
import { useState } from "react";
import DropDown from "./feedback/dropdown";
import {Link , useNavigate} from "react-router-dom"
import BASE_URL from "../config";
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
const Signup = ()=>{
     const [formData, setFormData] = useState({
           name: '',
           phone: '',
           email: '',
           password:'',
           address:'',
           gender:""
        });
        const [loading, setLoading] = useState(false); 
        const navigate = useNavigate()
        const handleSelection = (genders) =>{
            setFormData({...formData, gender: genders})
        }
        const genderz = ['Male', 'Female', 'ThirdGender'];
        const handleInput = (e) =>{
            const {name, value} = e.target;
            setFormData({...formData,[name]:value});
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!formData.name || !formData.phone || !formData.email || !formData.password || !formData.address || !formData.gender) {
                toast.error("All fields are required.");
                return;
              }
            console.log('Form Data Submitted:', formData);

            try{
                setLoading(true);
                const res = await fetch(`${BASE_URL}/auth/register`, {
                    method: "POST",
                    headers: {
                        'Content-Type':'application/json'
                    }, 
                    body: JSON.stringify(formData)
                });

                const {message} = await res.json();

                if (!res.ok){
                    throw new Error(message);
                }
                setLoading(false);
                toast.success(message);
                navigate('/login');
            }catch(err){
                toast.error(err.message);
                 setLoading(false);
            }
          };
    return (
        <>
        <section>
            <br/>
            <div className="grid place-items-center ">
                <form onSubmit={handleSubmit}className="border border-slate-200 rounded-xl bg-white h-130 lg:w-150 w-125 shadow-2xl flex flex-col items-center justify-center" >
                    
                    <div>
                        <p className="text-blue-500 font-semibold">Looks like you are new here !</p>
                    </div>
                    <br/>
                <div className="flex flex-row justify-center items-center gap-x-4">
                <input name = "name" type= "text" value = {formData.name} className="h-8 w-100 border-b border-slate-300 shadow-2xl " placeholder="Enter your Name" onChange={handleInput} required/>
                </div>
                    <br/>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                    <input name = "phone" type= "number" value = {formData.phone} className="h-8 w-100 border-b border-slate-300 shadow-2xl " placeholder="Enter your Number" onChange={handleInput} required/>
                    </div>
                    <br/>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                    <input name = "email" type= "text" value = {formData.email} className="h-8 w-100 border-b border-slate-300 shadow-2xl " placeholder="Enter your Email" onChange={handleInput} required/>
                    </div>
                    <br/>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        <input name = "password" type= "password" value = {formData.password} className="h-8 w-100 border-b border-slate-300 shadow-2xl " placeholder="Create a Password" onChange={handleInput} required/>
                    </div>
                    <br/>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        <input name = "address" type= "text" value = {formData.address} className="h-8 w-100 border-b border-slate-300 shadow-2xl " placeholder="Enter your address" onChange={handleInput} required/>
                    </div>
                    <br/>
                    <div className="flex flex-row justify-around items-center gap-x-14">
                        <DropDown options = {genderz} selectedOptions={formData.gender} onSelectChange={handleSelection}></DropDown>
                        <button disabled = {loading && true} type = "submit" onSubmit={handleSubmit} className="border h-10 rounded-xl shadow-xl w-40 border-slate-200 hover:bg-blue-100">{loading ? <HashLoader size = {35} color = "#ffffff"/> : 'SignUp'} </button>
                    </div>
                    <br/>
                     <div className="flex flex-row items-center gap-2">
                                        <p>By clicking</p> 
                                        <p className="text-red-600 font-bold">Continue</p>
                                        <p> ,you agree to </p> <Link to="/tnc" className="text-red-600 font-bold">Terms and Conditions</Link>
                                        </div>
                                        <br/>
                    <div className="flex flex-row items-center gap-2">
                    <p>Not a new user ? </p>
                    <Link to = "/login"className="text-blue-600">Login</Link>
                    </div>
                </form>
            </div>
            <br/>
        </section>
        </>
    )
};

export default Signup;