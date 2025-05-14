import React from "react"

const ServiceCard = ({image, title})=>{
    return (
        <>
        <div className="h-45 w-45 border border-slate-200 shadow-xl rounded-xl
        flex flex-col justify-center items-center text-center">
            <img src ={image} alt= "" className="h-8 w-8" />
            <p className="font-semibold"> {title}</p>
        </div>
        </>
    )
}

export default ServiceCard;