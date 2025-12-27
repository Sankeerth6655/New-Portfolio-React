import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [visible, setVisible] = useState(true);

    React.useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                // Scrolling down
                setVisible(false);
            } else {
                // Scrolling up
                setVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'projects', label: 'Works' },
        { id: 4, link: 'contact', label: 'Contact Me' },
    ];

    return (
        <div
            className={`fixed left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1000px] h-16 rounded-full border border-blue-500/30 bg-black/1 backdrop-blur-xl flex justify-between items-center px-8 z-50 text-white shadow-2xl shadow-blue-500/10 transition-all duration-300 ${visible ? 'top-6' : '-top-32'
                }`}
        >
            {/* Logo or Brand */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-2 cursor-pointer hover:scale-105 duration-200">Portfolio</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {links.map(({ id, link, label }) => (
                    <li
                        key={id}
                        className="px-6 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200 hover:text-cyan-400 transition-colors"
                    >
                        <Link
                            to={link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={0}
                            activeClass="text-cyan-400 font-bold"
                        >
                            {label || link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-2 z-10 text-gray-300 md:hidden hover:text-cyan-400 duration-200"
            >
                {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {/* Mobile Sidebar */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-20 right-0 w-full rounded-3xl bg-gray-900/95 backdrop-blur-md border border-blue-500/30 duration-300 transition-all shadow-2xl py-8">
                    {links.map(({ id, link, label }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 text-2xl text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200"
                        >
                            <Link
                                onClick={() => setNav(false)}
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={0}
                            >
                                {label || link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
