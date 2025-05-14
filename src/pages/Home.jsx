import React from "react";
import { LuPercent } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import find from '../assets/find.jpg'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import images from '../assets/images.png';
import doc from '../assets/doc.png';
// import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Vision from '../assets/Vision.svg';
import Mission from '../assets/Mission.svg';
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <>
                <br />
                <br />
                <br />
                <br />
                <section>
                    <div className="grid lg:grid-rows-1 lg:w-full place-items-center ">
                        <div className="grid lg:grid-rows-2 w-full px-10 place-items-center gap-y-6">
                            <h1 className="lg:text-5xl font-bold text-4xl text-black text-center grid grid-rows-1 lg:w-190 w-100 place-items-center md:w-150">
                                We got your back—live healthier,
                                thrive longer, and vibe stronger!
                            </h1>
                            <p className="mt-6 text-gray-600 text-base lg:text-xl text-center grid lg:w-190 w-100 place-items-center">
                                Healthy vibes only with India's first Online Medical Care Service.
                                Book your DocFriend with minimal cost and maximum consultancy. <br />
                                We are here, for you , with you
                            </p>
                            <button onClick={() => navigate("/appointment")} className="h-[45px] w-[240px] bg-blue-600 rounded-xl text-white font-semibold text-center transition duration-300 hover:shadow-lg hover:shadow-blue-500">Request an Appointment</button>
                        </div>
                        {/* hero counter ----- */}
                    </div>
                </section>
                <br />
                <br />
                <br />
                <div className="grid lg:grid-cols-3 lg:grid-rows-1 place-items-center grid-rows-3 grid-cols-1 gap-y-10">
                    <div >
                        <div className="flex flex-row items-center justify-center">
                            <h1 className="text-2xl font-semibold">100  </h1>
                            <LuPercent className="h-7 w-7" />
                        </div>
                        <p className="lg:text-2xl font-semibold text-violet-800 text-xl">Patient Satisfaction</p>
                    </div>
                    <div >
                        <div className="flex flex-row items-center justify-center">
                            <h1 className="lg:text-2xl font-semibold text-2xl">30  </h1>
                            <FaPlus className="h-5 w-5" />
                        </div>
                        <p className="text-2xl font-semibold text-pink-800">Years of Experience</p>
                    </div>
                    <div >
                        <div className="flex flex-row items-center justify-center">
                            <h1 className="lg:text-2xl font-semibold text-2xl">20  </h1>
                            <FaPlus className="h-5 w-5" />
                        </div>
                        <p className="text-2xl font-semibold text-yellow-700">Clinic Locations</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* how it works section */}
                <section>
                    <div className="bg-white">
                        <div className="grid lg:grid-rows-1 lg:w-full place-items-center text-center w-full grid-cols-1 px-4">
                            <br/>
                            <div className="max-w-lg w-full">
                                <br />
                                <h2 className="text-2xl font-semibold text-center">Verified Procedure Providing Best Services </h2>
                                <br />
                                <p>World-Class Healthcare For Everyone</p>
                            </div>
                        </div>
                        <br />
                        <div className="grid lg:grid-rows-1 lg:gap-x-8 place-items-center lg:grid-cols-3 grid-rows-3 grid-cols-1">
                            <div className="h-85 w-85 rounded-xl border-gray-100 shadow-xl flex flex-col items-center justify-center">
                                <img src={find} className="h-40 w-40" />
                                <br></br>
                                <p>Find a Doctor</p>
                                <p>Book an Appointment</p>
                                <br/>
                                <IoArrowForwardCircleOutline className="h-9 w-9"/>
                            </div>
                            <div className="h-85 w-85 rounded-xl border-gray-100 shadow-xl flex flex-col items-center justify-center">
                                <img src={images} className="h-40 w-40" />
                                <br></br>
                                <p>Fill your Personal</p>
                                <p>Details</p>
                                <br/>
                                <IoArrowForwardCircleOutline className="h-9 w-9"/>
                            </div>
                            <div className="h-85 w-85 rounded-xl border-gray-100 shadow-xl flex flex-col items-center justify-center">
                                <img src={doc} className="h-40 w-40" />
                                <br></br>
                                <p>Services / Treatment</p>
                                <p>At your Doorstep</p>
                                <br/>
                                <IoArrowForwardCircleOutline className="h-9 w-9"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </section>
                <br/>
                {/* about section starts */}
                <section className="flex flex-row justify-center items-center">
                    {/* about content */}
                    <div className="flex flex-col justify-around items-center text-center">
                        <h2 className="text-2xl font-semibold ">ABOUT US</h2>
                        <br/>

                        <p className="mx-20 lg:w-[1000px] w-[450px] lg:text-xl text-base md:w-[600px]"> NewHealth is a leading integrated healthcare services provider in 
                            India. It is one of the largest healthcare organizations 
                            in the country with 28 healthcare facilities, 4,500+ 
                            operational beds (including O&M facilities), and over 
                            400 diagnostics centers (including JVs). NewHealth is present
                            in India, the United Arab Emirates (UAE), Nepal & Sri 
                            Lanka. It draws strength from its 
                            partnership with global major and parent company - IHH, 
                            build upon its culture of world-class
                             patient care and superlative clinical excellence.</p>
                             <br/>
                             <br/>
                             <br/>
                        <div className="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 place-items-center grid-rows-2 grid-cols-1 gap-y-10">
                            <div className="flex flex-col items-center lg:h-[220px] lg:w-[590px] rounded-xl shadow-xl px-3 w-[400px] h-[250px] md:w-[500px] md:h-[240px]">
                                <h2 className="font-semibold text-xl">Vision</h2>
                                <img src={Vision}  className="h-25 w-25"/>
                                <p>To create a world-class integrated healthcare delivery
                                     system in India, entailing the finest medical skills
                                     combined with compassionate patient care.</p>
                            </div>
                            <div className="flex flex-col items-center lg:h-[220px] lg:w-[590px] rounded-xl shadow-xl px-3 w-[400px] h-[250px] md:w-[500px] md:h-[240px]">
                                <h2 className="font-semibold text-xl">Mission</h2>
                                <img src={Mission}  className="h-25 w-25"/>
                                <p>To be a globally respected healthcare organisation known 
                                    for Clinical Excellence and Distinctive Patient Care.</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        {/*-----features section-----*/}
                        <div>
                        <section className="grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-5 grid-cols-1 grid-rows-4 gap-y-10">
                            <div className="h-[100px] w-[320px] flex flex-col justify-center items-center rounded-2xl shadow-xl bg-orange-50 border border-orange-400 text-xl">
                                4 JCI AND 26 NABH ACCREDITED HOSPITALS
                            </div>
                            <div className="h-[100px] w-[320px] flex flex-col justify-center items-center rounded-2xl shadow-xl bg-indigo-100 border border-indigo-400 text-xl">
                                28 HEALTHCARE FACILITIES
                            </div>
                            <div className="h-[100px] w-[320px] flex flex-col justify-center items-center rounded-2xl shadow-xl bg-rose-50 border border-rose-400 text-xl">
                                4500+ OPERATIONAL BEDS
                            </div>
                            <div className="h-[100px] w-[320px] flex flex-col justify-center items-center rounded-2xl shadow-xl bg-lime-50 border border-lime-400 text-xl">
                                12500+ HEALTHCARE PROFESSIONALS
                            </div>
                        </section>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </section>
                
                {/* ----doctor's section---- */}
                <section className="bg-white flex flex-col justify-center items-center">
                <br/>
                <br/>
                    <div className="flex flex-col justify-center items-center ">
                    <h2 className="text-2xl font-semibold"> BOARD OF DIRECTORS </h2>
                    <br/>
                    <br/>
                    <div className="grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-5 grid-rows-4 grid-cols-1 gap-y-10">
                        <div className="h-[300px] w-[300px] rounded-xl border border-slate-100 shadow-xl flex flex-col justify-center items-center">
                            <img src={images}/>
                            <h4 className="font-semibold text-xl">Dr. Jack Jones</h4>
                            <p>Chairman - Independent Director</p>
                        </div>
                        <div className="h-[300px] w-[300px] rounded-xl border border-slate-100 shadow-xl flex flex-col justify-center items-center">
                            <img src={images}/>
                            <h4 className="font-semibold text-xl">Dr. Satyendra Saxena</h4>
                            <p>Managing Director & CEO</p>
                        </div>
                        <div className="h-[300px] w-[300px] rounded-xl border border-slate-100 shadow-xl flex flex-col justify-center items-center">
                            <img src={images}/>
                            <h4 className="font-semibold text-xl">Dr. Jiya Hilton </h4>
                            <p>Non-Executive Director</p>
                        </div>
                        <div className="h-[300px] w-[300px] rounded-xl border border-slate-100 shadow-xl flex flex-col justify-center items-center">
                            <img src={images}/>
                            <h4 className="font-semibold text-xl">Dr. Abram Raheem</h4>
                            <p>Non-Executive Director</p>
                        </div>
                    </div>
                    </div>
                    <br/>
                    <br/>
                </section>
            </>
        </>
    )
};

export default Home;