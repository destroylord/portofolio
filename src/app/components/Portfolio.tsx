"use client";

import { Icon } from "@iconify/react";
import useStore from "../store/useStore";
import Image from "next/image";
import ShinyText from "../utlis/ShinyText";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from '../common/types';

type ProjectItem = Project;

export default function Portfolio() {
    const data = useStore((state) => state.data);
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState("All");

    const filteredData =
        filter === "All"
            ? data
            : data.filter((item: ProjectItem) => item.category === filter);

    const openModal = (project: ProjectItem) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section
                id="portfolio"
                className="w-full max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
                        <div className="space-y-4">
                            <h2 className="flex items-center justify-center lg:justify-start gap-3 text-4xl lg:text-5xl font-bold">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}>
                                    <Icon
                                        icon="mdi:ninja-star"
                                        className="text-primary"
                                    />
                                </motion.div>
                                <ShinyText
                                    text="My Portfolio"
                                    disabled={false}
                                    speed={3}
                                    className="text-4xl font-bold"
                                />
                            </h2>
                            <p className="text-lg text-base-content/70 max-w-2xl">
                                Creating next level digital products with modern
                                technologies and best practices
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="join join-vertical sm:join-horizontal">
                                {["All", "Website", "Mobile"].map(
                                    (category) => (
                                        <motion.button
                                            key={category}
                                            onClick={() => setFilter(category)}
                                            className={`btn join-item ${
                                                filter === category
                                                    ? "btn-primary"
                                                    : "btn-outline"
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}>
                                            {category}
                                        </motion.button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card bg-base-100 shadow-xl hover-lift cursor-pointer group"
                            onClick={() => openModal(item)}>
                            <figure className="relative overflow-hidden aspect-video">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="flex gap-2">
                                        {item.links.github && (
                                            <motion.a
                                                href={item.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-circle btn-sm glass"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}>
                                                <Icon
                                                    icon="mdi:github"
                                                    className="w-4 h-4"
                                                />
                                            </motion.a>
                                        )}
                                        {item.links.demo && (
                                            <motion.a
                                                href={item.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-circle btn-sm glass"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}>
                                                <Icon
                                                    icon="mdi:open-in-new"
                                                    className="w-4 h-4"
                                                />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </figure>

                            <div className="card-body p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="badge badge-primary badge-sm">
                                        {item.category}
                                    </span>
                                    <span className="text-sm text-base-content/60">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="card-title text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-base-content/80 mb-4 line-clamp-3">
                                    {item.shortDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.techstack
                                        .slice(0, 3)
                                        .map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="badge badge-outline badge-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    {item.techstack.length > 3 && (
                                        <span className="badge badge-outline badge-sm">
                                            +{item.techstack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="card-actions justify-end">
                                    <motion.button
                                        className="btn btn-primary btn-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}>
                                        View Details
                                        <Icon
                                            icon="mdi:arrow-right"
                                            className="w-4 h-4"
                                        />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20">
                        <Icon
                            icon="mdi:folder-open-outline"
                            className="w-16 h-16 mx-auto text-base-content/30 mb-4"
                        />
                        <p className="text-xl text-base-content/60">
                            No projects found for this category
                        </p>
                    </motion.div>
                )}
            </section>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={closeModal}
                project={selectedProject}
            />
        </>
    );
}
