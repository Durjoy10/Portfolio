/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className="text-center text-gray-200">Copyright © 2024 - All right reserved by <span className="text-sky-700 font-bold">Durjoy Dey</span></p>
                </aside>
                <div className="flex mt-4 justify-center"> {/* Center the icons horizontally */}
                    <a
                        href="https://github.com/Durjoy10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 mr-4 flex items-center hover:text-gray-400 transition duration-300"
                    >
                        <FaGithub className="h-6 w-6 mr-2 text-indigo-500" />  {/* Use FaGithub icon */}
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/durjoydey10/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 flex items-center hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedin className="h-6 w-6 mr-2 text-blue-700" /> {/* Use FaLinkedin icon */}
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
