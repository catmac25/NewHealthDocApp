import React , {useState, useEffect} from "react";
import { toast } from "react-toastify";
import BASE_URL from "../../config";
const AppointmentCard = () => {
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    useEffect(() => {
        const fetchAppointments = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Please Log in First");
                return;
            }
            try {
                const response = await fetch(`${BASE_URL}/appointments/upcoming`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                console.log("API Response:", result);
                if (!response.ok) {
                    throw new Error(result.message);
                }

                setAppointments(result.data);
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchAppointments();
    }, []);

    const deleteAppointment = async(appointmentId) => {
        const token = localStorage.getItem("token");
        if (!token){
            toast.error("Please log in first");
            return;
        }
        try{
            const response = await fetch(`${BASE_URL}/appointments/${appointmentId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (!response.ok){
                throw new Error(result.message);
            }
            setAppointments((appointments)=> appointments.filter((appt) => appt._id !== appointmentId));
            setSelectedAppointment(null);  
            toast.success("Appointment Cancelled Successfully!");
        }catch(error){
            toast.error(error.message);
        }
    };
    return (
        <section className="border border-gray-300 rounded-3xl shadow-2xl w-90 p-10 bg-white">
            <br/>
            <p className="text-2xl font-semibold text-blue-700 h-15 text-center">Upcoming Appointments</p>
            <div className="flex flex-col justify-left items-center bg-white">
            {appointments.length===0 ? (
                <p>No upcoming appointments</p>
            ) : (
                <ul >
                    {appointments.map((appointment)=>(
                        <li key={appointment._id} className={`cursor-pointer p-3 rounded-xl w-85 text-center ${selectedAppointment?._id === appointment._id ? "bg-red-300" : "bg-white"}`}
                        onClick={() => setSelectedAppointment(appointment)}>
                            <strong className="text-xl">Type:</strong> {appointment.appointmentType}<br />
                            <strong className="text-xl">Date:</strong> {new Date(appointment.date).toLocaleDateString()} <br />
                            <strong className="text-xl">Time Slot:</strong> {appointment.slot} <br />
                           <p className="h-3 bg-white"></p>
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <br/>
            <div className="flex flex-row justify-around items-center">
            <button className="h-9 w-80 bg-blue-700 text-white rounded-xl p-5 text-center font-light"onClick={() => selectedAppointment ? deleteAppointment(selectedAppointment._id) : toast.error("Please select an appointment!")}>Cancel Appointment</button>
            </div>
            <br/>
        </section>
    )
}
export default AppointmentCard;