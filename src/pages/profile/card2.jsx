import React from "react";

const Medications = () => {
    return (
        <section>
            <p className="text-2xl font-semibold text-blue-600">Your Appointments</p>
            <hr></hr>
            <br />
            <Medications>
                <button className="h-5 w-10 bg-blue-700 text-white rounded-xl p-5 text-center font-light">Cancel</button>
                <button className="h-5 w-10 bg-blue-700 text-white rounded-xl p-5 text-center font-light">Reschedule</button>
            </Medications>
        </section>
    )
}

export default Medications;