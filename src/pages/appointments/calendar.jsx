import React, { useState } from "react";

export default function Calendar({ setSelectedDate }) {  // Accept setSelectedDate as a prop
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [localSelectedDate, setLocalSelectedDate] = useState(null);

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (localSelectedDate && localSelectedDate.getTime() === clickedDate.getTime()) {
      setLocalSelectedDate(null);
      setSelectedDate(null); // Update parent state
    } else {
      setLocalSelectedDate(clickedDate);
      setSelectedDate(clickedDate); // Update parent state
    }
  };

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  return (
    <div className="max-w-md mx-auto p-10 rounded-lg shadow-lg h-80 w-100">
      <br/>
      <div className="flex justify-around items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="p-2 bg-gray-200 rounded">◀</button>
        <h2 className="text-lg font-semibold">{currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h2>
        <button onClick={() => changeMonth(1)} className="p-2 bg-gray-200 rounded">▶</button>
      </div>
      <br/>
      <div className="grid grid-cols-7 text-center font-semibold gap-2 m-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center gap-3">
        {Array(firstDay).fill(null).map((_, i) => <div key={i}></div>)}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`p-6 cursor-pointer rounded ${
              localSelectedDate?.getDate() === day &&
              localSelectedDate?.getMonth() === currentMonth.getMonth() ? "bg-green-500 text-white" : "bg-white"
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
