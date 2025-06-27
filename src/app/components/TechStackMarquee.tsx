'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface TechStack {
    name: string;
    icon: string;
    color: string;
}

const techStacks: TechStack[] = [
    { name: "React", icon: "logos:react", color: "#61DAFB" },
    { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
    { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
    { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
    { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
    { name: "Laravel", icon: "logos:laravel", color: "#FF2D20" },
    { name: "PHP", icon: "logos:php", color: "#777BB4" },
    { name: "MySQL", icon: "logos:mysql-icon", color: "#4479A1" },
    { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
    { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
    { name: "Bootstrap", icon: "logos:bootstrap", color: "#7952B3" },
    { name: "Git", icon: "logos:git-icon", color: "#F05032" },
    { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
    { name: "AWS", icon: "logos:aws", color: "#FF9900" },
    { name: "Firebase", icon: "logos:firebase", color: "#FFCA28" },
    { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
    { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" }
];

export default function TechStackMarquee() {
    // Duplicate the array to create seamless loop
    const duplicatedTechStacks = [...techStacks, ...techStacks];

    return (
        <div className="py-16 overflow-hidden bg-base-200/30">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary">Tech Stack</span> & Tools
                    </h2>
                    <p className="text-base-content/70 text-lg max-w-2xl mx-auto mb-4">
                        Technologies I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-100 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-100 to-transparent z-10"></div>
                    
                    {/* Marquee */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 py-8"
                            animate={{
                                x: ["-50%", "0%"]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                width: "200%"
                            }}
                        >
                            {duplicatedTechStacks.map((tech, index) => (
                                <motion.div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 group"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-w-[120px] text-center">
                                        <div className="mb-3">
                                            <Icon 
                                                icon={tech.icon} 
                                                className="w-12 h-12 mx-auto transition-transform duration-300 group-hover:scale-110" 
                                            />
                                        </div>
                                        <h3 className="text-sm font-semibold text-base-content group-hover:text-primary transition-colors duration-300">
                                            {tech.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Text */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* <p className="text-base-content/60 text-sm">
                        And many more technologies in my toolkit...
                    </p> */}
                </motion.div>
            </div>
        </div>
    );
}