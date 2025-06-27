"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { SOCIAL_LINKS, APP_CONFIG } from '../common/constants';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
};

const Footer = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollToTop = () => {
        setIsScrolling(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setIsScrolling(false), 1000);
    };

    return (
        <motion.footer 
            className="bg-base-200/50 backdrop-blur-sm border-t border-base-300/50 mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Brand Section */}
                    <motion.div 
                        className="text-center md:text-left"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                            {APP_CONFIG.SITE_NAME}
                        </h3>
                        <p className="text-base-content/70 text-sm">
                            {APP_CONFIG.SITE_DESCRIPTION}
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="flex justify-center space-x-6"
                        variants={itemVariants}
                    >
                        {SOCIAL_LINKS.filter(social => social.url !== '#').map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-base-content/60 transition-all duration-300 ${social.color} transform hover:scale-110`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={`Visit ${social.name} profile`}
                            >
                                <Icon icon={social.icon} className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="text-center md:text-right"
                        variants={itemVariants}
                    >
                        <div className="flex flex-col sm:flex-row md:justify-end justify-center gap-4 text-sm">
                            <a href="#about" className="text-base-content/70 hover:text-primary transition-colors">
                                About
                            </a>
                            <a href="#portfolio" className="text-base-content/70 hover:text-primary transition-colors">
                                Portfolio
                            </a>
                            <a href="#experience" className="text-base-content/70 hover:text-primary transition-colors">
                                Experience
                            </a>
                            <a href="#contact" className="text-base-content/70 hover:text-primary transition-colors">
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                    className="border-t border-base-300/50 mt-8 pt-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-base-content/60 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} {APP_CONFIG.AUTHOR}. All rights reserved.
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-base-content/50">
                            <span>Built with Next.js & Tailwind CSS</span>
                            <motion.div
                                className="w-2 h-2 bg-green-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span>Available for work</span>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Icon icon="mdi:chevron-up" className="w-6 h-6" />
                </motion.button>
            </div>
        </motion.footer>
    );
};

export default Footer;
