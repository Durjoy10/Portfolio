/* eslint-disable no-unused-vars */
import React from 'react';

export default function Header() {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    Durjoy Dey
                </div>
                <nav className="space-x-4">
                    <a href="#about" className="text-white hover:text-gray-300">
                        About Me
                    </a>
                    <a href="#projects" className="text-white hover:text-gray-300">
                        Projects
                    </a>
                    <a href="#contact" className="text-white hover:text-gray-300">
                        Contact Me
                    </a>
                </nav>
            </div>
        </header>
    );
}
