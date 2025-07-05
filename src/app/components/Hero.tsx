"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
// import CircularText from "../utlis/CirculatText";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import CountUp from "../utlis/CountUp";
import { motion } from "framer-motion";

export default function Hero() {
    const typedRef = useRef<Typed | null>(null);

    useEffect(() => {
        const typed = new Typed("#typed-element", {
            strings: [
                "I collaborate with brands globally to design impactful mission-focused websites that drive results and achieve business goals.",
                "Passionate about creating digital experiences that matter.",
                "Let's build something amazing together! 🚀",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        typedRef.current = typed;

        return () => {
            typed.destroy();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section 
            id="home"
            className="min-h-screen flex items-center justify-center px-4 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Section */}
                <motion.div 
                    className="relative order-2 lg:order-1"
                    variants={itemVariants}
                >
                    <div className="relative">
                        {/* Main Image Container */}
                        <motion.div 
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                <Image
                                    alt="Fahmi Dafrin Maulana - Full Stack Developer"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    src="/images/profile.webp"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                
                                {/* Floating Elements */}
                                <motion.div 
                                    className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3"
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Icon icon="mdi:code-tags" className="w-6 h-6 text-white" />
                                </motion.div>
                                
                                <motion.div 
                                    className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-sm rounded-full p-3"
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <Icon icon="mdi:rocket-launch" className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Circular Text Badge */}
                        {/* <motion.div 
                            className="absolute -bottom-8 -right-8 w-32 h-32 bg-base-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-primary/20"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CircularText
                                text="CONTACT•ME•TOGETHER•"
                                onHover="speedUp"
                                spinDuration={20}
                                className="text-primary text-sm font-medium"
                            />
                        </motion.div> */}
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                    className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
                    variants={itemVariants}
                >
                    {/* Greeting */}
                    <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                    >
                        <span className="inline-flex items-center gap-2 text-lg md:text-xl text-base-content/70 font-medium">
                            <motion.span
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                👋
                            </motion.span>
                            Hey there! I&apos;m Dafrin
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        variants={itemVariants}
                    >
                        A{" "}
                        <span className="relative">
                            <span className="dark:text-white text-dark">
                                Full Stack
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </span>
                        <br />
                        <span className="text-base-content">Developer</span>
                    </motion.h1>

                    {/* Typed Description */}
                    <motion.div 
                        className="text-lg md:text-xl text-base-content/80 leading-relaxed min-h-[3rem]"
                        variants={itemVariants}
                    >
                        <span id="typed-element"></span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="#portfolio"
                            className="btn btn-primary btn-lg gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon icon="mdi:eye" className="w-5 h-5" />
                            View My Work
                        </motion.a>
                        <motion.a
                            href="https://wa.me/6285853656272"
                            className="btn btn-outline btn-lg gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                        >
                            <Icon icon="mdi:message" className="w-5 h-5" />
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
                        variants={itemVariants}
                    >
                        <div className="stat bg-base-200/50 rounded-2xl p-5 text-center">
                            <div className="stat-figure text-primary mb-2">
                                <Icon icon="mdi:briefcase-account" className="w-8 h-8" />
                            </div>
                            <div className="stat-title text-sm font-medium">Projects Completed</div>
                            <div className="stat-value text-2xl font-bold text-primary">
                                <CountUp to={20} duration={2} direction="up" />+
                            </div>
                            <div className="stat-desc text-xs">Since 2019</div>
                        </div>

                        <div className="stat bg-base-200/50 rounded-2xl p-6 text-center">
                            <div className="stat-figure text-secondary mb-2">
                                <Icon icon="mdi:account-group" className="w-8 h-8" />
                            </div>
                            <div className="stat-title text-sm font-medium">Happy Clients</div>
                            <div className="stat-value text-2xl font-bold text-secondary">
                                <CountUp to={15} duration={2} direction="up" />+
                            </div>
                            <div className="stat-desc text-xs text-success">100% Satisfaction</div>
                        </div>

                        <div className="stat bg-base-200/50 rounded-2xl p-6 text-center">
                             <div className="stat-figure text-accent mb-2">
                                 <Icon icon="mdi:star" className="w-8 h-8" />
                             </div>
                             <div className="stat-title text-sm font-medium">Years Experience</div>
                             <div className="stat-value text-2xl font-bold text-accent">
                                 <CountUp to={5} duration={2} direction="up" />+
                             </div>
                             <div className="stat-desc text-xs">Growing Strong</div>
                         </div>
                     </motion.div>
                 </motion.div>
             </div>
         </motion.section>
     );
}
