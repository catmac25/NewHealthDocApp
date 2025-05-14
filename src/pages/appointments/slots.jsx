import React, { useState } from "react";

const Slots = ({ setSelectedSlot }) => {
    const [select, setColor] = useState(null);

    const slots = [
        { id: 1, time: "10:30 am" },
        { id: 2, time: "12:00 pm" },
        { id: 3, time: "4:00 pm" },
        { id: 4, time: "5:30 pm" }
    ];

    const toggleColor = (index, time) => {
        if (select === index) {
            setColor(null);
            setSelectedSlot(null);  // Reset the slot in parent
        } else {
            setColor(index);
            setSelectedSlot(time);  // Set selected time in parent
        }
    };

    return (
        <>
            <section>
                <div className="flex flex-row justify-around items-center gap-x-4">
                    {slots.map((slot) => (
                        <div 
                            key={slot.id} 
                            className={`h-12 w-22 ${select === slot.id ? "bg-green-500 text-white" : "bg-white"} flex flex-col justify-center items-center rounded-xl shadow-xl`}
                            onClick={() => toggleColor(slot.id, slot.time)}
                        >
                            {slot.time}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Slots;
