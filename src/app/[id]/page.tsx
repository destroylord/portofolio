"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import { Icon } from "@iconify/react";
import useStore from "../store/useStore";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Page({ params }: { params: Promise<{ id: number }> }) {
    const data = useStore((state) => state.data);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchId() {
            const { id } = await params;
            setId(id);
        }
        fetchId();
    }, [params]);

    if (!id) {
        return <div>Loading...</div>;
    }

    console.log(data.find((item) => item.id === Number(id)));

    return (
        <>
            <main className="flex-grow max-w-screen-lg px-4 py-8 mx-auto">
                <Header />
                <div className="flex flex-row justify-between mb-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm">
                        <Icon icon="material-symbols:arrow-back-rounded" />
                        Back to Home
                    </Link>
                    <div className="badge badge-outline">2024</div>
                </div>
                <div className="w-full bg-black phone-6">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="object-cover w-full h-64"
                    />
                </div>
                <h3 className="text-3xl">Polijepay</h3>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                    <div className="col-span-8 lg:col-span-8">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio odit aut atque quod eius voluptatem
                            temporibus dignissimos cupiditate soluta. Eveniet
                            quod aliquam iusto voluptatum, repellat quis nulla
                            dicta cumque illum.
                        </p>
                        <span className="badge badge-outline">React</span>
                    </div>
                    <div className="col-span-8 lg:col-span-4">
                        <h4 className="font-semibold">Role</h4>
                        <p>Frontend Developer</p>

                        <h4 className="font-semibold">Duration</h4>
                        <p>3 months</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="flex-item btn btn-neutral">
                        <div className=" flex flex-col items-start">
                            <small>Previous</small>
                            <p>Arofah Tempe Bondowoso</p>
                        </div>
                    </button>
                    <button className="flex-item btn btn-neutral">
                        <div className=" flex flex-col items-end">
                            <small>Next</small>
                            <p>Dashpay</p>
                        </div>
                    </button>
                </div>
                <Footer />
            </main>
        </>
    );
}
