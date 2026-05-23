import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaJava,
    FaGitAlt,
    FaGithub
} from 'react-icons/fa';

import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiMongodb,
    SiRedux,
    SiPostman
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

const About = () => {
    const skills = [
        { title: 'HTML5', icon: FaHtml5 },
        { title: 'CSS3', icon: FaCss3Alt },
        { title: 'Tailwind CSS', icon: SiTailwindcss },
        { title: 'JavaScript', icon: SiJavascript },
        { title: 'TypeScript', icon: SiTypescript },
        { title: 'React.js', icon: FaReact },
        { title: 'Redux Toolkit', icon: SiRedux },
        { title: 'Node.js', icon: FaNodeJs },
        { title: 'Express.js', icon: SiExpress },
        { title: 'REST APIs', icon: SiPostman },
        { title: 'MySQL', icon: SiMysql },
        { title: 'MongoDB', icon: SiMongodb },
        { title: 'Git', icon: FaGitAlt },
        { title: 'GitHub', icon: FaGithub },
        { title: 'VS Code', icon: VscVscode },
        { title: 'Java', icon: FaJava },
        { title: 'C', icon: null }
    ];

    return (
        <div name="about" className="w-full bg-transparent text-white py-12">
            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">

                {/* Heading */}
                <div className="pb-8 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
                        About Me
                    </p>

                    <p className="py-6 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        A glimpse into my technical expertise and technologies I work with.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 sm:px-0">
                    {skills.map(({ title, icon: Icon }) => (
                        <div
                            key={title}
                            className="
                                flex items-center gap-4
                                rounded-xl
                                border border-cyan-500/20
                                bg-white/5
                                backdrop-blur-md
                                px-5 py-4
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-cyan-400
                                hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                                group
                            "
                        >
                            <div
                                className="
                                    flex items-center justify-center
                                    w-10 h-10
                                    rounded-lg
                                    bg-cyan-500/10
                                    text-cyan-400
                                    shrink-0
                                "
                            >
                                {Icon ? (
                                    <Icon
                                        className="
                                            text-2xl
                                            group-hover:scale-110
                                            transition-transform duration-300
                                        "
                                    />
                                ) : (
                                    <span className="text-xl font-bold">C</span>
                                )}
                            </div>

                            <span
                                className="
                                    text-gray-200
                                    font-medium
                                    group-hover:text-white
                                    transition-colors
                                "
                            >
                                {title}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;