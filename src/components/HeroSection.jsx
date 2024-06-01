/* eslint-disable no-unused-vars */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTypewriter } from 'react-simple-typewriter';

export default function HeroSection() {
    const [text] = useTypewriter({
        words: [
            'Full Stack Development.',
            'Front-end Development.',
        ],
        loop: true,
        typeSpeed: 90,
        deleteSpeed: 80,
    });

    return (
        <div className="bg-gradient-to-b from-sky-950 to-black min-h-screen flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold text-indigo-700 mb-4">I am Durjoy Dey</h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-200">
                        I can assist you with:{' '}
                        <span className="text-gray-400">{text}</span>
                    </h2>
                    <div className="flex mt-4">
                        <a
                            href="https://github.com/Durjoy10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 mr-4 flex items-center hover:text-gray-400 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mr-2" /> { }
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/durjoydey10/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 flex items-center hover:text-gray-400 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mr-2" /> { }
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <div className="relative overflow-hidden transform transition-transform duration-1000 hover:scale-110">
                        <img
                            src="/img/durjoy.jpg"
                            alt="Durjoy Dey"
                            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-900"
                        />
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-900 rounded-full animate-pulse border-opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

