import React, { useEffect, useRef, useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const navLinks = [
    { path: '/', display: 'Home' },
    { path: '/services', display: 'Services' },
    { path: '/contactus', display: 'Contact' }
];

const Header = () => {
    const headerRef = useRef(null);
    const { user, token, dispatch } = useContext(authContext); 
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    };

    return (
        <header ref={headerRef} className="header bg-gradient-to-r from-blue-100 to-lime-200 mt-4">
            <div className="my-3">
                <div className="flex flex-row items-center justify-around p-4 h-[70px] w-full">
                    
                    {/* Logo */}
                    <div>
                        <FaHandHoldingMedical className="w-12 h-12 font-bold" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex ml-3">
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={link.path} 
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-blue-800  leading-7 font-[600] text-xl'
                                                : 'text-slate-600 leading-7 font-[500] text-xl'
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {user && (
                            <Link to={`/profile`} className="text-blue-700 font-semibold hover:underline">
                                {user.name}
                            </Link>
                        )}

                        {!token ? (
                            <Link to='/login'>
                                <button className="bg-blue-700 px-4 py-2 h-10 w-25 text-white font-[600] rounded-xl hover:shadow-blue-500">
                                    Login
                                </button>
                            </Link>
                        ) : (
                            <button onClick={handleLogout} className="bg-red-600 px-4 h-10 w-30 py-2 text-white font-[600] rounded-xl hover:shadow-red-500">
                                Logout
                            </button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center gap-4" >
                            <BiMenu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Section */}
                {isMenuOpen && (
                    <div className="lg:hidden w-full bg-white p-4 rounded-lg shadow-lg">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <li key={index} className="w-full">
                                   <NavLink 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)} 
                        className={({ isActive }) =>
                            `${isActive ? 'text-blue-800 font-semibold' : 'text-slate-600'} 
                             w-full block px-4 py-2 text-lg text-center border-b border-blue-200 gap-y-3 leading-7 hover:bg-blue-100`
                        }
                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
