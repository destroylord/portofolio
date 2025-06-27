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
                "Developed and maintained RESTful APIs using Laravel framework",
                "Implemented database design and optimization for better performance",
                "Collaborated with frontend team to integrate API endpoints",
                "Participated in code reviews and followed best practices",
                "Gained experience in agile development methodologies"
            ],
            technologies: ["Laravel", "PHP", "MySQL", "Git", "Postman"]
        },
        {
            period: "Jan 2024 – Present",
            company: "Freelance Developer",
            position: "Full Stack Developer",
            description: [
                "Built responsive web applications using modern frameworks",
                "Developed e-commerce solutions with payment integration",
                "Created custom CMS and admin panels",
                "Optimized website performance and SEO",
                "Provided technical consultation to clients"
            ],
            technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
        }
    ];

    return (
        <motion.section 
            id="experience"
            className="py-20 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Icon icon="mdi:briefcase" className="text-4xl text-primary" />
                        <ShinyText
                            speed={3}
                            text="Work Experience"
                            className="text-4xl font-bold"
                        />
                    </div>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        I have worked with innovative companies and clients to build 
                        top-notch products and deliver exceptional digital experiences.
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
                                 variants={itemVariants}
                             >
                                 {/* Timeline Dot */}
                                 <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg z-10"></div>
                                 
                                 {/* Period */}
                                 <div className="md:w-48 flex-shrink-0 md:text-right md:pr-8">
                                     <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                                         {exp.period}
                                     </span>
                                 </div>
                                 
                                 {/* Content */}
                                 <motion.div 
                                     className="flex-1 bg-base-200/50 backdrop-blur-sm rounded-2xl p-8 border border-base-300/50 hover:shadow-xl transition-all duration-300"
                                     whileHover={{ y: -5 }}
                                 >
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
                                             <li key={idx} className="flex items-start gap-3 text-base-content/80">
                                                 <Icon icon="mdi:check-circle" className="text-success mt-1 flex-shrink-0" />
                                                 <span>{item}</span>
                                             </li>
                                         ))}
                                     </ul>
                                     
                                     {/* Technologies */}
                                     <div className="flex flex-wrap gap-2">
                                         {exp.technologies.map((tech, idx) => (
                                             <span 
                                                 key={idx}
                                                 className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                                             >
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
