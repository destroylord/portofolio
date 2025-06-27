"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        id: number;
        image: string;
        date: string;
        title: string;
        category: string;
        description: string;
        techstack: string[];
        links: {
            github?: string;
            demo?: string;
            download?: string;
        };
    } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    
                    {/* Modal */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ 
                            type: "spring", 
                            damping: 25, 
                            stiffness: 300,
                            duration: 0.5
                        }}
                        className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-hidden"
                    >
                        <div className="h-full bg-base-100 rounded-t-3xl shadow-2xl overflow-y-auto">
                            {/* Header */}
                            <div className="sticky top-0 bg-base-100/95 backdrop-blur-md border-b border-base-300 p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-base-content">{project.title}</h2>
                                        <p className="text-base-content/70">{project.category} • {project.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="btn btn-circle btn-ghost hover:bg-base-200"
                                >
                                    <Icon icon="mdi:close" className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-8">
                                {/* Project Image */}
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-base-200">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Description */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-base-content flex items-center gap-2">
                                        <Icon icon="mdi:information-outline" className="w-5 h-5 text-primary" />
                                        Deskripsi Project
                                    </h3>
                                    <p className="text-base-content/80 leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-base-content flex items-center gap-2">
                                        <Icon icon="mdi:code-tags" className="w-5 h-5 text-primary" />
                                        Teknologi yang Digunakan
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.techstack.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="badge badge-primary badge-lg px-4 py-3 text-sm font-medium"
                                            >
                                                {tech}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-base-content flex items-center gap-2">
                                        <Icon icon="mdi:link-variant" className="w-5 h-5 text-primary" />
                                        Links
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline btn-lg gap-2 hover:btn-primary"
                                            >
                                                <Icon icon="mdi:github" className="w-5 h-5" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-lg gap-2"
                                            >
                                                <Icon icon="mdi:open-in-new" className="w-5 h-5" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.links.download && (
                                            <a
                                                href={project.links.download}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary btn-lg gap-2"
                                            >
                                                <Icon icon="mdi:download" className="w-5 h-5" />
                                                Download
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Padding */}
                            <div className="h-8"></div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}