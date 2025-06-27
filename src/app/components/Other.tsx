"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShinyText from "../utlis/ShinyText";

export default function Other() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const achievements = [
        {
            title: "Finalist (Hackathon)",
            organization: "State Polytechnic of Malang",
            date: "Aug 2021",
            description: "Finalist in KMIPN 2021, developed a web-based application for smart city solutions using Laravel and Vue.js.",
            icon: "mdi:trophy"
        },
        {
            title: "Best Graduate",
            organization: "State Polytechnic of Jember",
            date: "2024",
            description: "Graduated with honors, GPA 3.51/4.00, recognized for outstanding academic performance in Computer Engineering.",
            icon: "mdi:school"
        },
        {
            title: "Certified Full Stack Developer",
            organization: "Various Platforms",
            date: "2023-2024",
            description: "Completed multiple certifications in modern web development technologies including React, Node.js, and cloud platforms.",
            icon: "mdi:certificate"
        }
    ];

    const skills = [
        { name: "Frontend Development", level: 90, icon: "mdi:react" },
        { name: "Backend Development", level: 85, icon: "mdi:server" },
        { name: "Database Design", level: 80, icon: "mdi:database" },
        { name: "UI/UX Design", level: 75, icon: "mdi:palette" },
        { name: "DevOps", level: 70, icon: "mdi:cloud" },
        { name: "Mobile Development", level: 65, icon: "mdi:cellphone" }
    ];

    return (
        <motion.section 
            id="about"
            className="py-20 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Icon icon="mdi:account-details" className="text-4xl text-primary" />
                        <ShinyText
                            speed={3}
                            text="About Me"
                            className="text-4xl font-bold"
                        />
                    </div>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Learn more about my educational background, achievements, and technical skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Section */}
                    <motion.div 
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-bold text-center lg:text-left mb-8">
                            <Icon icon="mdi:school" className="inline mr-2 text-primary" />
                            Education
                        </h3>
                        
                        <motion.div 
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/images/gedung.jpg"
                                    alt="State Polytechnic of Jember"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-base-content mb-2">
                                            State Polytechnic of Jember
                                        </h4>
                                        <p className="text-primary font-semibold">
                                            Bachelor of Applied Computer Engineering
                                        </p>
                                    </div>
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                        2020 - 2024
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Icon icon="mdi:star" className="text-yellow-500" />
                                        <span className="font-semibold">GPA: 3.51/4.00</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon icon="mdi:medal" className="text-orange-500" />
                                        <span className="text-sm">Cum Laude</span>
                                    </div>
                                </div>
                                
                                <p className="text-base-content/70 text-sm">
                                    Specialized in software engineering, web development, and database systems. 
                                    Completed final project on modern web application development using React and Laravel.
                                </p>
                            </div>
                        </motion.div>

                        {/* Skills Section */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold">
                                <Icon icon="mdi:cog" className="inline mr-2 text-secondary" />
                                Technical Skills
                            </h4>
                            
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="space-y-2"
                                        variants={itemVariants}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Icon icon={skill.icon} className="text-primary" />
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-base-content/70">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-base-300 rounded-full h-2">
                                            <motion.div 
                                                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                     {/* Achievements Section */}
                     <motion.div 
                         className="space-y-8"
                         variants={itemVariants}
                     >
                         <h3 className="text-2xl font-bold text-center lg:text-left mb-8">
                             <Icon icon="mdi:trophy" className="inline mr-2 text-secondary" />
                             Achievements
                         </h3>
                         
                         <div className="space-y-6">
                             {achievements.map((achievement, index) => (
                                 <motion.div
                                     key={index}
                                     className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50 hover:shadow-xl transition-all duration-300"
                                     variants={itemVariants}
                                     whileHover={{ y: -5 }}
                                 >
                                     <div className="flex items-start gap-4">
                                         <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-full">
                                             <Icon icon={achievement.icon} className="w-6 h-6 text-white" />
                                         </div>
                                         
                                         <div className="flex-1">
                                             <div className="flex items-start justify-between mb-2">
                                                 <h4 className="font-bold text-lg text-base-content">
                                                     {achievement.title}
                                                 </h4>
                                                 <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                                                     {achievement.date}
                                                 </span>
                                             </div>
                                             
                                             <p className="text-secondary font-semibold mb-3">
                                                 {achievement.organization}
                                             </p>
                                             
                                             <p className="text-base-content/70 text-sm leading-relaxed">
                                                 {achievement.description}
                                             </p>
                                         </div>
                                     </div>
                                 </motion.div>
                             ))}
                         </div>

                         {/* Contact CTA */}
                         <motion.div 
                             className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white"
                             variants={itemVariants}
                             whileHover={{ scale: 1.02 }}
                         >
                             <h4 className="text-xl font-bold mb-4">
                                 Ready to Work Together?
                             </h4>
                             <p className="mb-6 opacity-90">
                                 Let&apos;s discuss your next project and bring your ideas to life!
                             </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <motion.a
                                     href="#contact"
                                     className="btn btn-outline btn-white gap-2"
                                     whileHover={{ scale: 1.05 }}
                                     whileTap={{ scale: 0.95 }}
                                 >
                                     <Icon icon="mdi:email" className="w-5 h-5" />
                                     Get In Touch
                                 </motion.a>
                                 <motion.a
                                     href="/resume.pdf"
                                     target="_blank"
                                     className="btn btn-outline btn-white gap-2"
                                     whileHover={{ scale: 1.05 }}
                                     whileTap={{ scale: 0.95 }}
                                 >
                                     <Icon icon="mdi:download" className="w-5 h-5" />
                                     Download CV
                                 </motion.a>
                             </div>
                         </motion.div>
                     </motion.div>
                 </div>
             </div>
         </motion.section>
     );
}
