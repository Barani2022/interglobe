import React from 'react'; // Adjust the path according to your project structure
import './Footer.css';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
// You'll create this CSS file for styling

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row p-2 bg-green-700 items-center h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] font-jost">
                <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-base lg:text-lg text-white font-jost">
                    Get in Touch:
                    <div className="flex ml-1 sm:ml-2 font-jost">
                    <a href="mailto:admin@interglobeuae.com">
                        <MdEmail />
                    </a>
                    </div>
                    <div className="ml-1 sm:ml-2 font-jost">
                    <a href="mailto:admin@interglobeuae.com">
                        admin@interglobeuae.com
                    </a>
                    </div>
                    <div className="flex ml-1 sm:ml-2 font-jost">
                        <IoIosCall />
                    </div>
                    <div className="ml-1 sm:ml-2 font-jost">
                        +971 58 5130413
                    </div>
                    <div className="flex ml-1 sm:ml-2 font-jost">
                        <a href="https://www.linkedin.com/company/interglobeuae" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                    </div>
                    <div className="ml-1 sm:ml-2 font-jost">
                        <a href="https://www.linkedin.com/company/interglobeuae" target="_blank" rel="noopener noreferrer">
                            Follow us on LinkedIn
                        </a>
                    </div>
                </div>
                <div className="ml-auto text-xs sm:text-sm md:text-base lg:text-lg text-white flex items-center mt-2 sm:mt-0 font-jost">
                        Copyright <FaCopyright className="ml-1 mr-1"/> 2024 Interglobe SLA
                </div>
            </div>
        </div>
    );
};

export default Footer;
