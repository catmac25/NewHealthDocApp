import React from "react"

const Card = ({title,icon:Icon, des, item}) =>{
    return (
        <>
        <div className="h-70 w-70 flex flex-col justify-center items-center bg-white p-4">
            <button className="h-6 w-6 "> 
                {Icon && <Icon className="text-4xl"/>}
            </button>
            <br/>
            <span className="font-semibold text-xl text-black hover:text-blue-600">{title}</span>
            <br/>
            <p className="text-center">{des}</p>
            <p className="text-blue-600">{item}</p>
        </div>
        </>
    )
}

export default Card;