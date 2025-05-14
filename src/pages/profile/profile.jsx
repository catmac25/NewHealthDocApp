import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import AppointmentCard from "./card1";
import {Link} from "react-router-dom"
const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // Get JWT token
                if (!token) {
                    navigate("/login"); // Redirect to login if no token found
                    return;
                }

                const response = await fetch("http://localhost:2500/api/v1/users/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");
                }

                const data = await response.json();
                setUser(data.data); // Update state with user data
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to fetch user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) return <p className="text-xl text-gray-600">Loading user data...</p>;
    if (error) return <p className="text-xl text-red-500">{error}</p>;

    return (
        <div>
              <div className="w-full lg:h-15 bg-purple-50 grid h-40 md:h-30 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 place-items-center py-2">
        <Link to="/contactus" className="text-black hover:text-blue-700">
          Request a Callback
        </Link>
        <Link to="/appointment" className="text-black hover:text-blue-700">
          Book Appointment
        </Link>
        <Link to="/appointment" className="text-black hover:text-blue-700">
          Get Health Checkup
        </Link>
      </div>
        <section className="grid lg:grid-cols-1 items-center px-2 py-6 bg-gradient-to-r from-slate-200 to-white">
        <div 
        className="h-full w-full flex flex-col justify-center items-center" >
                  <br/>
                  <br/>
                 
                  <div className="h-30 lg:w-180 grid grid-cols-1 items-center text-center w-60">
                  {user ? (
                          <>
                              <p className="text-3xl font-semibold text-black ">Hello, {user.name}</p>
                              <br/>
                              <p className="text-xl font-bold text-black italic">
                               Have a nice day and don't forget to take care of your health!
                              </p>
                          </>
                      ) : (
                          <p className="text-xl text-red-500">User not found</p>
                      )}
                  </div>
                  <br/>
                  <br/>
                 <br/>
                  <AppointmentCard />
                  
                 <br/>
                 <br/>
              </div>
              </section>
              </div>
          )
      }
export default UserProfile;
