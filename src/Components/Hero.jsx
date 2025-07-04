import React from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { LuSparkles } from "react-icons/lu";


const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#0f172a] text-white pt-24 md:pt-48 px-4 md:px-8"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-5">
                {/* Left Content */}
                <motion.div
                    className="space-y-6 max-w-2xl"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-800 px-5 py-1 bg-[#13203f] md:text-lg font-medium">
                    <LuSparkles /> Welcome to my portfolio!
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Hi, I’m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            Apurba Goon
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300">
                        Full Stack Web Developer | MERN Stack Enthusiast
                    </h2>

                    <p className="text-gray-400 md:text-lg leading-relaxed text-justify">
                    Passionate about building real-world projects that solve real problems. With a strong focus for JavaScript and UI/UX, I bring your ideas to life through clean code and thoughtful
                        design.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="#"
                            download
                            className="px-6 py-2 md:text-lg rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                        >
                            <FiDownload size={20} /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 md:text-lg rounded-lg border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                        >
                            <BsEnvelope size={20} /> Get In Touch
                        </a>
                    </div>
                    {/* Social Icons */}
                    <div className="flex opacity-50 gap-6 md:gap-8 mb-6 md:mb-0 md:mt-10">
                        <a
                            href="https://github.com/apurbagoon1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-purple-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/apurbagoon1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-blue-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="mailto:apurbagoon1@gmail.com"
                            className="text-white hover:text-pink-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="Email"
                        >
                            <FiMail />
                        </a>
                    </div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="w-64 h-64 md:w-88 md:h-88 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-700 p-1.5 md:-mt-16">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <span className="absolute bottom-4 right-4 md:bottom-8 md:right-6 bg-indigo-700 text-white px-3 py-2 text-sm rounded-full font-semibold shadow-lg tracking-wider">
                        DEV
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
