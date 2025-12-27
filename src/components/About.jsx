import React from 'react';

const About = () => {
    const skills = [
        { title: 'HTML5', level: 10 },
        { title: 'CSS3', level: 10 },
        { title: 'JavaScript', level: 9.5 },
        { title: 'React', level: 10 },
        { title: 'Tailwind CSS', level: 9 },
        { title: 'MySQL', level: 8.5 },
        { title: 'Java', level: 8.5 },
        { title: 'C', level: 9 },
    ];

    return (
        <div name="about" className="w-full bg-transparent text-white py-12">
            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
                        About Me
                    </p>
                    <p className="py-6 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        A glimpse into my technical expertise and proficiency levels.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 px-6 sm:px-0">
                    <div className="flex flex-col justify-center gap-6">
                        {skills.slice(0, 4).map(({ title, level }) => (
                            <div key={title} className="w-full group">
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-bold text-gray-200 group-hover:text-cyan-400 duration-300">{title}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3 shadow-inner overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                                        style={{ width: `${(level / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                        {skills.slice(4).map(({ title, level }) => (
                            <div key={title} className="w-full group">
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-bold text-gray-200 group-hover:text-cyan-400 duration-300">{title}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3 shadow-inner overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                                        style={{ width: `${(level / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
