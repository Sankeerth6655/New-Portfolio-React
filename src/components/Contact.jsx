import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    formData.append("access_key", "3a5064b1-7afa-43a9-9147-b80b41da0f46");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    };

    return (
        <div name="contact" className="w-full min-h-screen bg-transparent text-white p-4 py-12">
            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-10 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
                        Contact Me
                    </p>
                    <p className="py-6 text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Let’s turn ideas into reality - reach out below.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10 px-4 items-start">
                    {/* Left Part - Form (70%) */}
                    <div className="w-full md:w-[68%] bg-gray-900/50 p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <form onSubmit={onSubmit} className="flex flex-col gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="5"
                                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none transition-all duration-300 placeholder-gray-500"
                                required
                            ></textarea>

                            <button className="text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 my-2 mx-auto md:mx-0 rounded-xl font-bold hover:scale-105 duration-300 shadow-lg shadow-blue-500/30 w-full transform transition-transform text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Part - Info (30%) - minimal style */}
                    <div className="w-full md:w-[28%] flex flex-col justify-start space-y-10 pl-0 md:pl-4 mt-8 md:mt-0">
                        <div className="flex items-center gap-6 group hover:translate-x-2 duration-300">
                            <div className="p-4 rounded-full bg-blue-900/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <FaEnvelope size={28} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Email</p>
                                <p className="font-bold text-lg sm:text-lg text-gray-100 break-all">sankeerth6655@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group hover:translate-x-2 duration-300">
                            <div className="p-4 rounded-full bg-blue-900/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <FaPhone size={28} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Phone</p>
                                <p className="font-bold text-lg sm:text-lg text-gray-100">9866500400</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group hover:translate-x-2 duration-300">
                            <div className="p-4 rounded-full bg-blue-900/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <FaMapMarkerAlt size={28} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Location</p>
                                <p className="font-bold text-lg sm:text-lg text-gray-100">Hyderabad, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
