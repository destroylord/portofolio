"use client";

import { useEffect } from "react";
import useStore from "@/app/store/useStore";
import Header from "./components/header";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";
import Other from "./components/Other";
import InfiniteLogo from "./components/InfiniteLogo";
import { motion, useScroll } from "framer-motion";

export default function Home() {
    const setData = useStore((state) => state.setData);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/data.json");
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, [setData]);

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "var(--hue-1)",
                }}
            />
            <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
                <main className="flex-grow max-w-screen-lg px-4 py-8 mx-auto">
                    <Header />
                    <Hero />
                    <InfiniteLogo />
                    <Experiences />
                    <Portfolio />
                    <Other />
                </main>
                <Footer />
            </div>
        </>
    );
}
