/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function AboutMeSection() {
    return (
        <div className="bg-gradient-to-b from-sky-950 to-black min-h-screen py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-300 mb-4">
                        Hi, I'm Durjoy Dey, a passionate Full Stack Developer based in Dhaka, Bangladesh📍 I have a background in Computer Science & Engineering. Currently, I'm working as a Web Developer Intern (Remote) at CodeAlpha.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/img/working.jpg"
                        alt="Working"
                        className="w-96 md:w-auto rounded-lg opacity-30"
                    />
                </div>
            </div>

            <div className="container mx-auto text-center py-16">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-blue-900 py-12">Tech Stack</span>
                    <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center group space-x-4">
                            <FaReact className="text-5xl text-cyan-500 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                            <SiNextdotjs className="text-5xl text-gray-900 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                        </div>
                        <div className="flex items-center group space-x-4">
                            <FaNodeJs className="text-5xl text-green-500 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                            <SiExpress className="text-5xl text-gray-600 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                        </div>
                        <div className="flex items-center group space-x-4">
                            <SiTailwindcss className="text-5xl text-teal-500 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                            <SiBootstrap className="text-5xl text-purple-600 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                        </div>
                        <div className="flex items-center group space-x-4">
                            <SiMongodb className="text-5xl text-green-600 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                            <SiMysql className="text-5xl text-blue-600 group-hover:transform group-hover:translate-y-1 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


