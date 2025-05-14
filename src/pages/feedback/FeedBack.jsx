import React from "react"
import DropDown from "./dropdown";
import {useState} from "react";
import BASE_URL from "../../config";
import Rating from "./Rating";
import {toast} from "react-toastify";

const FeedBack = () => {

    const options = ["Cardiology", "Pulmnology", 
        "Gastroenterology", "Haematology", "Nephrology",
        "Neurology", "Oncology"
    ];
    
    const [formData, setFormData] = useState ({
        email: '',
        Name: '',
        phone: '',
        feedback: '',
        selectedOptions: [],
    });
   
    const [rating, setRating]= useState({
        webservice:'',
        consultation:'',
        availability:''
    });
    const handleRatingChange = (e)=>{
        const {name, value}= e.target;
        setRating((prev)=>({...prev, [name]:value}));
    };
    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
   
    const handleSelection = (selections) =>{
        setFormData({...formData,selectedOptions: selections})
    }
    // The ...formData is using the spread operator to copy all key–value pairs 
    // from the formData object into a new object.
    const handleSubmit = async(e) => {
        e.preventDefault();
        const fullData = {...formData, rating}
        if (!formData.email || !rating.webservice || !rating.availability || !rating.consultation){
            toast.error("Please provide complete feedback ");
            return;
        }
        console.log('Form Data Submitted:', formData);
        console.log("Ratings submitted ", rating);

        try{
            const res = await fetch(`${BASE_URL}/feedback`, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(fullData)
            });
            const result = await res.json();
            if (!res.ok){
                throw new Error(result.message);
            }
            toast.success("Feedback Submitted");
        }catch(err){
            toast.error(err.message);
        }
      };
    return (
        <>
            <div className="bg-zinc-50">  
                <br/>
                <div className=" h-20 w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold "> we would love to hear from you </h1>
                </div>
                <br/>
                    <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10 lg:w-full place-items-center">
                        <div className="grid grid-cols-1 gap-y-2 place-items-center">
                        <input type = "text" placeholder="Enter your Email ID"required value = {formData.email} onChange={handleInput} name= "email" className="h-15 lg:w-120 w-80 border-b border-slate-400 rounded-xl shadow-xl p-3 text-lg text-center"/>
                        <br/>  
                        <input type="text" required value={formData.Name}placeholder="Enter your Name" onChange={handleInput} name="Name" className="h-15 lg:w-120 w-80 border-b border-slate-400 rounded-xl shadow-xl p-3 text-lg text-center"/>    
                        <br />
                        <input  value={formData.phone} placeholder="Enter your Contact Number" onChange={handleInput} type="number" required name = "phone" className="h-15 lg:w-120 w-80 border-b border-slate-400 rounded-xl shadow-xl p-3 text-lg text-center"/>
                        <br/>
                        <label className="font-semibold text-center">FeedBack (not more than 500 characters)
                        </label>
                        <textarea maxLength={500} name="feedback"  value={formData.feedback} onChange={handleInput} required className="h-30 lg:w-120 w-40 border-b border-slate-400 rounded-xl shadow-xl p-3 text-lg text-center"
                        placeholder="Write your message"></textarea>
                        <br/>
                        </div>
                        <div className="grid grid-cols-1 place-items-center place-content-center">
                            <p className="font-bold text-center text-2xl">Rate Us Out Of 5</p>
                       <br/>
                       <Rating title="Website Service" name="webservice" value={rating.webservice} onChange={handleRatingChange}/>
                       <Rating title="Consultation" name="consultation" value = {rating.consultation} onChange={handleRatingChange}/>
                       <Rating title="Availability of Service" name="availability" value={rating.availability} onChange={handleRatingChange}/>
                       <br/>
                       <div className="flex flex-row justify-center items-center gap-x-6">
                        <label className="font-semibold">Services Used : </label>
                        <br/>
                       <DropDown options={options} selectedOptions={formData.selectedOptions} onSelectChange={handleSelection} />
                       </div>
                       <br/>
                       <br/>
                       <button type = "submit" className="border border-green-800 bg-green-600 rounded-xl shadow-xl h-10 w-40 text-white font-semibold">Submit</button>
                       <br/>
                       </div>
                    </form>
                </div>
        </>
    )
}
export default FeedBack;