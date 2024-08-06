import React from 'react';
import Link from 'next/link'; 
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-2 bg-green-700 sticky top-0 z-50 h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] font-jost">
            <div className="navbar-logo">
                <img src="/interglobet.png" alt="Logo"  className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[230px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px]"/>
            </div>
            <ul className="list-none flex gap-3 sm:gap-5 text-xs sm:text-sm md:text-base lg:text-lg">
            <li><Link href="/" className="text-white hover:text-gray-300 font-jost">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-300 font-jost">About</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300 font-jost">Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;