import React from 'react';
import resume from '../assets/Sankeerth-Resume.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-black/10 backdrop-blur-md text-white py-8 border-t border-gray-700/30 mt-auto">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4">

                {/* Social Links & Resume */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="flex gap-8">
                        <a href="https://github.com/Sankeerth6655" target="_blank" rel="noreferrer" className="group p-3 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300">
                            <FaGithub size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/sankeerthgandla/" target="_blank" rel="noreferrer" className="group p-3 rounded-full bg-gray-900 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300">
                            <FaLinkedin size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </a>
                    </div>

                    <a
                        href={resume}
                        download={true}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 duration-300 transform"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Divider */}
                <hr className="w-full border-gray-700 mb-6" />

                {/* Footer Text */}
                <div className="text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Sankeerth. All rights reserved.</p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
