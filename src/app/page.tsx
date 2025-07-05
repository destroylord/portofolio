"use client";

import React, { Suspense } from "react";
import { usePortfolioData } from "./common/hooks";
import useStore from "./store/useStore";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading, { SkeletonCard } from "./components/Loading";

import Hero from "./components/Hero";
import TechStackMarquee from "./components/TechStackMarquee";

// Lazy load components for better performance
const LazyExperiences = React.lazy(() => import("./components/Experiences"));
const LazyPortfolio = React.lazy(() => import("./components/Portfolio"));
const LazyOther = React.lazy(() => import("./components/Other"));

export default function Home() {
    const { data, loading, error, refetch } = usePortfolioData();
    const { setData } = useStore();

    // Update store when data is loaded
    React.useEffect(() => {
        if (data && data.projects) {
            setData(data.projects);
        }
    }, [data, setData]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Failed to Load Data
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {error}
                    </p>
                    <button
                        onClick={refetch}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <main className="min-h-screen">
                <div className="space-y-8 p-4">
                    <SkeletonCard className="h-96" />
                    <SkeletonCard className="h-64" />
                    <SkeletonCard className="h-80" />
                </div>
            </main>
        );
    }

    return (
        <ErrorBoundary>
            <main className="min-h-screen">
                <Hero />
                <TechStackMarquee />

                <Suspense
                    fallback={
                        <Loading
                            variant="skeleton"
                            text="Loading experiences..."
                        />
                    }>
                    <LazyExperiences />
                </Suspense>

                <Suspense
                    fallback={
                        <Loading
                            variant="skeleton"
                            text="Loading portfolio..."
                        />
                    }>
                    <LazyPortfolio />
                </Suspense>

                <Suspense
                    fallback={
                        <Loading
                            variant="skeleton"
                            text="Loading additional content..."
                        />
                    }>
                    <LazyOther />
                </Suspense>
            </main>
        </ErrorBoundary>
    );
}
