import React from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
    {
        path: 'https://www.linkedin.com/in/arpita-arora-891876251/',
        icon: <RiLinkedinFill className="text-gray-500 hover:text-blue-600 w-10 h-10" />
    },
    {
        path: 'https://www.youtube.com/',
        icon: <AiFillYoutube className="text-gray-500 hover:text-blue-600 w-10 h-10" />
    },
    {
        path: 'https://www.youtube.com/',
        icon: <AiOutlineInstagram className="text-gray-500 hover:text-blue-600 w-10 h-10" />
    }
]
const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-50 h-auto bg-gradient-to-r from-cyan-100 to-lime-200 place-items-center ">
        {/* Left Side - Copyright Info */}
        <div className="flex flex-col items-center">

          <p className="text-[16px] leading-7 font-[400] text-slate-500 ">Copyright 2025</p>
          <p className="text-[16px] leading-7 font-[400] text-slate-500">Developed by NewHealth Pvt. Limited</p>
          <p className="text-[16px] leading-7 font-[400] text-slate-500">All rights reserved.</p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      
        {/* Middle - Support Links */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-center ">Support</h4>
          <br />
          <Link to="/donate" className="text-black hover:text-blue-600">
            Donate
          </Link>
          <br />
          <Link to="/contactus" className="text-black hover:text-blue-600">
            Contact Us
          </Link>
          <br />
          <Link to="/feedback" className="text-black hover:text-blue-600">
            Feedback
          </Link>
        </div>
      
        {/* Right Side - Headquarters */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-center">Headquarters</h4>
          <br />
          <p>Mumbai</p>
          <br />
          <p>New Delhi</p>
          <br />
          <p>Chennai</p>
        </div>
      </div>
      
    )
}

export default Footer;