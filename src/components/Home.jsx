import React from 'react';

const Home = () => {
    return (
        <div
            name="home"
            className="min-h-screen w-full bg-transparent text-white flex flex-col justify-center items-center px-4 pt-48 sm:pt-60"
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-5xl sm:text-7xl font-bold text-white mb-8 animate-fade-in-down tracking-tight">
                    I'm <span className="text-gradient font-extrabold cursor-pointer hover:scale-105 duration-300 inline-block drop-shadow-md">Sankeerth</span>
                <h1><span className="text-cyan-800 font-extrabold cursor-pointer hover:scale-105 duration-300 inline-block drop-shadow-md">Frontend Developer</span></h1>
                </h2>
                <p className="text-gray-400 py-4 max-w-2xl text-xl sm:text-2xl animate-fade-in-up font-light">
                    Start building your dream with a passionate developer.
                </p>

                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up delay-100 font-light">
                    I have a strong passion for building responsive and user-friendly web applications.
                    With a deep understanding of modern frontend technologies, I transform ideas into
                    digital reality.
                </p>
            </div>
        </div>
    );
};

export default Home;
