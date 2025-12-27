import React from 'react';
// Import images here if available, or use placeholders
// import project1 from '../assets/project1.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'DevStatix',
            description: 'A dynamic React application that leverages GitHub APIs to display detailed user profiles and public repositories, highlighting API integration, state management, and responsive UI design.',
            github: 'https://github.com'
        },
        {
            id: 2,
            name: 'Portfolio Website',
            description: 'A personal portfolio website designed with Tailwind CSS and React to showcase skills and projects, featuring smooth scrolling and animations.',
            github: 'https://github.com'
        },
        {
            id: 3,
            name: 'E-Commerce Cart System',
            description: 'A dynamic single-page shopping application using React.js and JavaScript ES6+ for efficient state management and data manipulation.',
            github: 'https://github.com'
        },
        // {
        //     id: 4,
        //     name: 'Task Management App',
        //     description: 'A productivity tool for managing daily tasks, enabling users to add, edit, and delete items with local storage persistence.',
        //     github: 'https://github.com'
        // },
    ];

    return (
        <div name="projects" className="bg-transparent w-full text-white min-h-screen py-10 sm:py-16">
            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-10 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
                        Projects
                    </p>
                    <p className="py-6 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Check out some of my work, where I turn ideas into functional and user-friendly web applications.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-0">
                    {projects.map(({ id, name, description, github }) => (
                        <div key={id} className="shadow-lg shadow-gray-700/40 rounded-xl duration-300 hover:scale-105 border border-gray-700/50 glass-effect p-8 flex flex-col justify-between group h-full">

                            <div className="flex flex-col">
                                <h3 className="mb-4 text-2xl font-bold text-gray-100 group-hover:text-cyan-400 duration-300">{name}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full text-center px-6 py-3 duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-bold text-white hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/40 hover:shadow-cyan-400/60 block"
                            >
                                Know More
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Projects;
