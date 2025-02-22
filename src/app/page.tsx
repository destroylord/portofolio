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

export default function Home() {
    const setData = useStore((state) => state.setData);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/data.json");
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, [setData]);
    return (
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
    );
}
