import React from 'react'

function Rating({ title, name, value, onChange }) {
    return (
      <section className="grid grid-cols-1 gap-x-5">
        <div className="grid grid-rows-1 grid-cols-2 place-items-center h-10 gap-x-5">
          <p className="w-45 text-center font-bold">{title}</p>
          <div className="flex flex-row gap-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex flex-row gap-x-2">
                <input
                  type="radio"
                  name={name}
                  value={num}
                  id={`${name}-${num}`}
                  checked={value === String(num)}
                  onChange={onChange}
                />
                <label htmlFor={`${name}-${num}`}>{num}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default Rating;