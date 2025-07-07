"use client";
import { Icon } from "@iconify/react";

import ShinyText from "../utlis/ShinyText";
import { motion } from "framer-motion";

export default function Experiences() {
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

    const experiences = [
        {
            period: "Sept 2023 – Dec 2023",
            company: "PT Kreasi Cyber Indonesia, Bondowoso",
            position: "Backend Developer (Internship)",
            description: [
                "Contributed to multiple backend projects using Laravel within a small development team",
                "Developed 3 web applications from scratch, focusing on performance and scalability",
                "Applied clean architecture principles to improve code structure and reduce bugs",
                "Collaborated with frontend team to integrate API endpoints",
                "Participated in code reviews and followed best practices",
                "Gained experience in agile development methodologies",
                "Utilized Docker containerization, improving application scalability by 30% and maintainability",
            ],
            technologies: [
                "PHP",
                "Laravel",
                "MySQL",
                "Bootstrap",
                "Tailwindcss",
                "Git",
                "Postman",
                "Docker",
            ],
        },
        {
            period: "Oct 2019 – Oct 2020",
            company: "CV. SyammerTech, Gresik",
            position: "Web Developer",
            description: [
                "Built responsive web applications using modern frameworks",
                "Built and maintained 5+ web applications using Laravel and CodeIgniter 3, improving performance by 25%",
                "Enhanced performance of web applications and databases, reducing load times by 40%",
                "Involved in full development lifecycle, from planning and implementation to testing and deployment",
                "Optimized website performance and SEO",
                "Collaborated on frontend-backend integration and used Git for version control",
                "Provided technical consultation to clients",
            ],
            technologies: [
                "PHP",
                "Bootstrap",
                "MySQL",
                "Codeigniter 3",
                "Laravel",
                "Wordpress",
                "Git",
            ],
        },
    ];

    return (
        <motion.section
            id="experience"
            className="py-20 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}>
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Icon
                            icon="mdi:briefcase"
                            className="text-4xl text-primary"
                        />
                        <ShinyText
                            speed={3}
                            text="Work Experience"
                            className="text-4xl font-bold"
                        />
                    </div>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        I have worked with innovative companies and clients to
                        build top-notch products and deliver exceptional digital
                        experiences.
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col md:flex-row gap-8 items-start"
                                variants={itemVariants}>
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg z-10"></div>

                                {/* Period */}
                                <div className="md:w-48 flex-shrink-0 md:text-right md:pr">
                                    <span className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-lg text-sm font-medium border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Content */}
                                <motion.div
                                    className="flex-1 bg-base-200/50 backdrop-blur-sm rounded-2xl p-8 border border-base-300/50 hover:shadow-xl transition-all duration-300"
                                    whileHover={{ y: -5 }}>
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-base-content mb-2">
                                            {exp.company}
                                        </h3>
                                        <p className="text-primary font-semibold text-lg">
                                            {exp.position}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {exp.description.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-base-content/80">
                                                <Icon
                                                    icon="mdi:check-circle"
                                                    className="text-success mt-1 flex-shrink-0"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
