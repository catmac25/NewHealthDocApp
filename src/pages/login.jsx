import React from "react";
import { useState, useContext } from "react";
import {Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import {authContext} from '../context/authContext';
import BASE_URL from "../config";
import HashLoader from "react-spinners/HashLoader";
const Login = ()=>{
    //we first set initial values of form data 
    const [formData, setFormData] = useState({
        phone:"",
        email: '',
        password : ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useContext(authContext);
    const handleInput = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !formData.email || !formData.password || !formData.phone) {
            toast.error("All fields are required.");
            return;
          }
        console.log('Form Data Submitted:', formData);

        try{

            setLoading(true);
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                }, 
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (!res.ok){
                throw new Error(result.message);
            }
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    user: result.data,
                    token: result.token
                }
            });

            console.log(result, 'login data');
            setLoading(false);
            toast.success(result.message);
            navigate('/');
        }catch(err){
            toast.error(err.message);
             setLoading(false);
        }
      };
    return(
        <>
        <br/>

            <div className="grid grid-cols-1 place-items-center w-full h-160 mr-20">
                <form onSubmit={handleSubmit}className=" h-140 lg:w-150  w-120 flex relative flex-col items-center border border-slate-200 bg-white rounded-2xl" > 
                    <br/>
                    <br/>
                    <div className="flex flex-col justify-center items-center">
                        <label name="phone" className=""> Enter your phone number</label>
                        <input type= "number" value = {formData.phone} className="h-10 w-100 border-b border-slate-300 shadow-2xl" onChange={handleInput} name="phone" required/>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex flex-col justify-center items-center">
                        <label name="email" className=""> Enter your Email-ID</label>
                        <input type= "text" value ={formData.email} className="h-10 w-100 border-b border-slate-300 shadow-2xl" onChange={handleInput}name="email" required/>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex flex-col justify-center items-center">
                        <label name="password" className=""> Enter your Password</label>
                        <input type= "password" value = {formData.password} className="h-10 w-100 border-b border-slate-300 shadow-2xl" onChange={handleInput} name="password"required/>
                    </div>

                    <br/>
                    <div className="flex flex-row items-center gap-2">
                    <p>By clicking</p> 
                    <p className="text-red-600 font-bold">  Continue</p>
                    <p>, I agree to </p> <Link to="/tnc" className="text-red-600 font-bold">Terms and Conditions</Link>
                    </div>
                    <br/>
                    <div>
                        <button type = "submit" className="h-10 w-30 rounded-xl shadow-xl bg-violet-500 text-white font-semibold">
                            {loading ? <HashLoader size= {25}/> : 'Login'}
                        </button>
                    </div>
                    <br/>
                    <div className="flex flex-row items-center gap-2">
                    <p>Don't have an account? </p>
                    <Link to = "/signup"className="text-blue-600">Register</Link>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login;