/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    Durjoy Dey
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`md:flex md:items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a href="#about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">
                        About Me
                    </a>
                    <a href="#projects" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">
                        Projects
                    </a>
                    <a href="#contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300">
                        Contact Me
                    </a>
                </nav>
            </div>
        </header>
    );
}