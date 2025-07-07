"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect } from "react";

import { Project } from '../common/types';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export default function ProjectModal({
    isOpen,
    onClose,
    project,
}: ProjectModalProps) {
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
                            duration: 0.5,
                        }}
                        className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-hidden">
                        <div className="h-full bg-base-100 rounded-t-3xl shadow-2xl overflow-y-auto">
                            {/* Header */}
                            <div className="bg-base-100/95 backdrop-blur-md border-b border-base-300 p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-base-content">
                                            {project.title}
                                        </h2>
                                        <p className="text-base-content/70">
                                            {project.category} • {project.date}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="btn btn-circle btn-ghost hover:bg-base-200">
                                    <Icon
                                        icon="mdi:close"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="max-w-6xl mx-auto p-6">
                                {/* Hero Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative mb-12">
                                    <div className="flex justify-center">
                                        <div className="relative w-full max-w-4xl aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl border border-primary/20">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left Column - Description */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="lg:col-span-2 space-y-6">
                                        <div className="bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-sm rounded-2xl p-8 border border-base-300/50">
                                            <h3 className="text-2xl font-bold text-base-content flex items-center gap-3 mb-6">
                                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                                    <Icon
                                                        icon="mdi:information-outline"
                                                        className="w-5 h-5 text-white"
                                                    />
                                                </div>
                                                Description and Features
                                            </h3>
                                            <div className="text-base-content/80 leading-relaxed text-lg font-lato space-y-4">
                                                {/* Short description */}
                                                <p className="text-base-content/90 leading-relaxed">
                                                    {project.shortDescription}
                                                </p>
                                                
                                                {/* Key Features */}
                                                <div>
                                                    <h4 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                        Fitur Utama
                                                    </h4>
                                                    <ul className="space-y-2 text-base-content/80">
                                                        {project.features?.map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-3">
                                                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                {/* Closing statement */}
                                                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border-l-4 border-primary">
                                                    <p className="text-base-content/90 font-medium italic">
                                                        &ldquo;{project.closingStatement}&rdquo;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right Column - Project Info, Technologies & Links */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="space-y-6 sticky top-4 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                                        {/* Project Stats */}
                                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                                            <h4 className="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                                                <Icon
                                                    icon="mdi:chart-line"
                                                    className="w-5 h-5 text-accent"
                                                />
                                                Project Info
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-base-content/70">
                                                        Category
                                                    </span>
                                                    <span className="font-medium text-accent">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-base-content/70">
                                                        Project Date
                                                    </span>
                                                    <span className="font-medium">
                                                        {project.date}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-base-content/70">
                                                        Tech Stack
                                                    </span>
                                                    <span className="font-medium">
                                                        {
                                                            project.techstack
                                                                .length
                                                        }{" "}
                                                        Technologies
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className=" backdrop-blur-sm rounded-2xl p-8 border border-secondary/20">
                                            <h3 className="text-2xl font-bold text-base-content flex items-center gap-3 mb-6">
                                                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                                                    <Icon
                                                        icon="mdi:code-tags"
                                                        className="w-5 h-5 text-white"
                                                    />
                                                </div>
                                                Technologies Used
                                            </h3>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                                                {project.techstack.map(
                                                    (tech, index) => {
                                                        const getIconForTech = (
                                                            techName: string
                                                        ) => {
                                                            const techLower =
                                                                techName.toLowerCase();
                                                            // Exact matches first
                                                            if (
                                                                techLower ===
                                                                "bootstrap"
                                                            )
                                                                return "logos:bootstrap";
                                                            if (
                                                                techLower ===
                                                                "typescript"
                                                            )
                                                                return "logos:typescript-icon";
                                                            if (
                                                                techLower ===
                                                                "javascript"
                                                            )
                                                                return "logos:javascript";

                                                            // Then partial matches
                                                            if (
                                                                techLower.includes(
                                                                    "react"
                                                                )
                                                            )
                                                                return "logos:react";
                                                            if (
                                                                techLower.includes(
                                                                    "next"
                                                                )
                                                            )
                                                                return "logos:nextjs-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "vue"
                                                                )
                                                            )
                                                                return "logos:vue";
                                                            if (
                                                                techLower.includes(
                                                                    "angular"
                                                                )
                                                            )
                                                                return "logos:angular-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "python"
                                                                )
                                                            )
                                                                return "logos:python";
                                                            if (
                                                                techLower.includes(
                                                                    "php"
                                                                )
                                                            )
                                                                return "logos:php";
                                                            if (
                                                                techLower.includes(
                                                                    "laravel"
                                                                )
                                                            )
                                                                return "logos:laravel";
                                                            if (
                                                                techLower.includes(
                                                                    "node"
                                                                )
                                                            )
                                                                return "logos:nodejs-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "express"
                                                                )
                                                            )
                                                                return "simple-icons:express";
                                                            if (
                                                                techLower.includes(
                                                                    "mysql"
                                                                )
                                                            )
                                                                return "logos:mysql";
                                                            if (
                                                                techLower.includes(
                                                                    "postgresql"
                                                                )
                                                            )
                                                                return "logos:postgresql";
                                                            if (
                                                                techLower.includes(
                                                                    "mongodb"
                                                                )
                                                            )
                                                                return "logos:mongodb-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "tailwind"
                                                                )
                                                            )
                                                                return "logos:tailwindcss-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "css"
                                                                )
                                                            )
                                                                return "logos:css-3";
                                                            if (
                                                                techLower.includes(
                                                                    "html"
                                                                )
                                                            )
                                                                return "logos:html-5";
                                                            if (
                                                                techLower.includes(
                                                                    "git"
                                                                )
                                                            )
                                                                return "logos:git-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "docker"
                                                                )
                                                            )
                                                                return "logos:docker-icon";
                                                            if (
                                                                techLower.includes(
                                                                    "aws"
                                                                )
                                                            )
                                                                return "logos:aws";
                                                            if (
                                                                techLower.includes(
                                                                    "firebase"
                                                                )
                                                            )
                                                                return "logos:firebase";
                                                            if (
                                                                techLower.includes(
                                                                    "figma"
                                                                )
                                                            )
                                                                return "logos:figma";
                                                            if (
                                                                techLower.includes(
                                                                    "photoshop"
                                                                )
                                                            )
                                                                return "logos:adobe-photoshop";
                                                            if (
                                                                techLower.includes(
                                                                    "flask"
                                                                )
                                                            )
                                                                return "simple-icons:flask";

                                                            // Generic fallbacks
                                                            if (
                                                                techLower.includes(
                                                                    "js"
                                                                )
                                                            )
                                                                return "logos:javascript";
                                                            if (
                                                                techLower.includes(
                                                                    "ts"
                                                                )
                                                            )
                                                                return "logos:typescript-icon";
                                                            return "mdi:code-tags";
                                                        };

                                                        return (
                                                            <motion.div
                                                                key={index}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                    y: 20,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                    y: 0,
                                                                }}
                                                                transition={{
                                                                    delay:
                                                                        0.4 +
                                                                        index *
                                                                            0.1,
                                                                }}
                                                                className="bg-base-100 border border-primary/20 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:bg-primary/5 group"
                                                                title={tech}>
                                                                <Icon
                                                                    icon={getIconForTech(
                                                                        tech
                                                                    )}
                                                                    className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                                                                />
                                                                <span className="text-xs font-medium text-base-content/80 block truncate">
                                                                    {tech}
                                                                </span>
                                                            </motion.div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Links */}
                                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                                            <h4 className="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                                                <Icon
                                                    icon="mdi:link-variant"
                                                    className="w-5 h-5 text-primary"
                                                />
                                                Quick Actions
                                            </h4>
                                            <div className="space-y-3">
                                                {project.links.github && (
                                                    <motion.a
                                                        href={
                                                            project.links.github
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline w-full gap-2 hover:btn-primary group"
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}>
                                                        <Icon
                                                            icon="mdi:github"
                                                            className="w-5 h-5 group-hover:rotate-12 transition-transform"
                                                        />
                                                        View Source Code
                                                    </motion.a>
                                                )}
                                                {project.links.demo && (
                                                    <motion.a
                                                        href={
                                                            project.links.demo
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary w-full gap-2 group"
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}>
                                                        <Icon
                                                            icon="mdi:open-in-new"
                                                            className="w-5 h-5 group-hover:rotate-12 transition-transform"
                                                        />
                                                        Live Demo
                                                    </motion.a>
                                                )}
                                                {project.links.download && (
                                                    <motion.a
                                                        href={
                                                            project.links
                                                                .download
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-secondary w-full gap-2 group"
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}>
                                                        <Icon
                                                            icon="mdi:download"
                                                            className="w-5 h-5 group-hover:bounce transition-transform"
                                                        />
                                                        Download
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
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
