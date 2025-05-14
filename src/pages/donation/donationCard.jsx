import React from "react"

const Donation = ({title, icon:Icon, des, item}) =>{
    return (
        <>
        <div className="flex flex-col justify-center items-center h-55 w-80 ">
            <button> {Icon && <Icon className="text-4xl"/>}</button>
            <br/>
            <p className="font-semibold text-xl text-black hover:text-blue-600">{title}</p>
            <p className="text-center">{des}</p>
            <p className="text-blue-600">{item}</p>
        </div>
        </>
    )
}

export default Donation