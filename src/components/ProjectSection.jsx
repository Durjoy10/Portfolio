/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineApi } from 'react-icons/ai'; // Importing API icon from react-icons
import { FaCss3, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'; // Importing React icon from react-icons
import { SiTailwindcss } from 'react-icons/si'; // Importing Tailwind CSS icon from react-icons
import ProjectCard from './ProjectCard';
import WeatherImage from '/img/Weather-Dashboard.png';
import CodeStreamImage from '/img/codestream.png';
import RebateImage from '/img/rebate.png';

const projects = [
    {
        title: 'Weather-Dashboard',
        link: 'https://code-alpha-weather-app.vercel.app/',
        image: WeatherImage,
        description: `A simple weather application built with React that allows users to check the current weather conditions of different cities around the world.

        Features:
        Search for weather by city name,
        Display current weather conditions including temperature, description, humidity, and wind speed,
        Uses OpenWeatherMap API to fetch weather data`,
        techStack: [
            { icon: FaReact, name: 'React' },
            { icon: SiTailwindcss, name: 'Tailwind CSS' },
            { icon: AiOutlineApi, name: 'OpenWeather API' },
        ],
        githubLink: 'https://github.com/Durjoy10/CodeAlpha_Weather_App',
    },
    {
        title: "Rebate",
        link: 'https://rebate-red.vercel.app/index.html',
        image: RebateImage,
        description: 'are searching for discounts. When they are going out for a tour or to a restaurant for a nice dinner or shoppings the search for good offers or discounts on various products so our motive is to gather all the discounts or offers available online or offline.',
        techStack: [
            { icon: FaHtml5, name: 'HTML' },
            { icon: FaCss3, name: 'CSS' },
            { icon: FaJs, name: 'JavaScript' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: FaNodeJs, name: 'Express.js' },
            { icon: FaDatabase, name: 'MongoDB' },
        ],
        githubLink: 'https://github.com/Durjoy10/Rebate',
    },

    {
        title: "CodeStream",
        link: 'https://codestream-on.vercel.app/index.html',
        image: CodeStreamImage,
        description: 'are searching for discounts. When they are going out for a tour or to a restaurant for a nice dinner or shoppings the search for good offers or discounts on various products so our motive is to gather all the discounts or offers available online or offline.',
        techStack: [
            { icon: FaHtml5, name: 'HTML' },
            { icon: FaCss3, name: 'CSS' },
            { icon: FaJs, name: 'JavaScript' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: FaNodeJs, name: 'Express.js' },
            { icon: FaDatabase, name: 'MongoDB' },
        ],
        githubLink: 'https://github.com/Durjoy10/CodeStream',
    },
];

const ProjectSection = () => {
    return (
        <div className="bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">Projects</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
