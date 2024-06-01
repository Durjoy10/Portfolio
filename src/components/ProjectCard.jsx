/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const ProjectCard = ({ project, reverse }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg mb-8`}>
            <img className="md:w-1/2 w-full object-cover" src={project.image} alt={project.title} />
            <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mb-4 inline-flex items-center"
                    >
                        {project.link}
                        <FaExternalLinkAlt className="ml-2" /> {/* Using FaExternalLinkAlt icon */}
                    </a>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                        {project.techStack.map((tech, index) => (
                            <div key={index} className="relative group">
                                {tech.icon()} {/* Use the icon component directly */}
                                <span className="absolute bottom-0 left-0 transform translate-y-full bg-gray-700 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        <FaGithub className="mr-2" /> {/* Using FaGithub icon */}
                        Show on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
