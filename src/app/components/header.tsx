"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "../providers/ThemeProvider";
import { motion } from "framer-motion";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="navbar sticky top-0 backdrop-blur-md bg-base-100/80 z-50 shadow-lg border-b border-base-300/50"
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Icon icon="mdi:menu" className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="navbar-center">
                <motion.a 
                    href="#home"
                    className="btn btn-ghost text-xl font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Fahmi Dafrin Maulana
                </motion.a>
            </div>
            
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><a href="#home" className="btn btn-ghost">Home</a></li>
                        <li><a href="#about" className="btn btn-ghost">About</a></li>
                        <li><a href="#portfolio" className="btn btn-ghost">Portfolio</a></li>
                        <li><a href="#contact" className="btn btn-ghost">Contact</a></li>
                    </ul>
                </div>
                
                <motion.button
                    onClick={toggleTheme}
                    className="btn btn-circle btn-ghost ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    <motion.div
                        key={theme}
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === 'light' ? (
                            <Icon icon="mdi:weather-night" className="h-5 w-5" />
                        ) : (
                            <Icon icon="mdi:weather-sunny" className="h-5 w-5" />
                        )}
                    </motion.div>
                </motion.button>
            </div>
        </motion.header>
    );
}
