import React from "react"
import { GiHeartOrgan } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import Donation from "./donationCard";
const Donate = () =>{
    return (
        <>
        <section className="bg-white">
            <br/>
            <br/>
            <div className="flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-1 lg:w-280 place-items-center">
                    <p className="lg:text-6xl text-4xl font-semibold text-red-700 grid place-content-center lg:w-280 w-100">Support our Mission</p>
                    <br/>
                    <p className="text-xl ">Save lives, Save humanity</p>
                    <br/>
                    <div className="text-center grid lg:w-250 w-100">
                    <p>Namaskar! We weekly distribute packaged food items to roadside beggars, orphans, and other needy people. We also have collaborated with KalyanFoundation to help with variety prospects. 
                        If interested, patients (or their guardians) may donate organs (via proper procedure). We also organize Blood Donation Camps frequently.  Our sole motto is "Help Others While You Help Yourself"
                    </p>
                    </div>
                    <br/>
                    <button className="bg-red-500 h-10 w-85 rounded-xl shadow-xl text-white font-bold transition duration-300 hover:shadow-lg hover:shadow-blue-500"
                    onClick={()=> window.location.href = 'https://globalbloodfund.org/global-need/?gad_source=1&gbraid=0AAAAADgzX2jSefMiNwiGuiotuXbliXC-W&gclid=Cj0KCQjwnui_BhDlARIsAEo9GusTBrJVIis2FdZ9KcxoA3_z6FR4rlGK8O4VIDWxO58KAYEEPNoT5cQaAjveEALw_wcB'}>Donate Now</button>
                </div>
                
                <div className="grid lg:grid-cols-3 lg:grid-rows-1 place-items-center grid-cols-1 grid-rows-3">
                    <div>
                    <Donation title = "Organ Donation" icon= {GiHeartOrgan} 
                    des = "If you wish, you can save lives" item = "organslife.newhealth.com"/>
                    </div>
                    <div>
                    <Donation title = "Blood Donation" icon= {MdBloodtype} 
                    des = "We organize camps frequently, you may donate your red!" item = "donateblood.newhealth.com"/>
                    </div>
                    <div>
                    <Donation title = "Food Donation" icon= {PiBowlFoodBold} 
                    des = "We help several relief funds and poor, via packaged food items, so as to help the needy"item = "needs.newhealth.com"/>
                    </div>
                </div>
                <br/>
            </div>
        </section>
        </>
    )
}

export default Donate;