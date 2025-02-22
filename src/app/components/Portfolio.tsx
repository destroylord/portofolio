"use client";

import { Icon } from "@iconify/react";
import useStore from "../store/useStore";
import Image from "next/image";

export default function Portfolio() {
    const data = useStore((state) => state.data);
    return (
        <section className="w-full gap-8 sm:gap-12 max-screen py-16">
            <div className="flex justify-between">
                <div>
                    <h4>My Porfolio</h4>
                    <h2>Creating next level digital products</h2>
                </div>
                <div>
                    <div className="join join-vertical lg:join-horizontal">
                        <button className="btn join-item">View All</button>
                        <button className="btn join-item">Mobile</button>
                        <button className="btn join-item">Website</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-5">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="card bg-base-100 shadow-sm
                            hover:shadow-2xl
                            transition-shadow duration-300">
                            <figure className="flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt="Image"
                                    width={400}
                                    height={500}
                                    className="height-[500px]  object-contain"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-sm font-semibold">
                                    {item.title}
                                </h2>
                                <div className="text-sm text-gray-500">
                                    {item.date}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    {item.description?.length > 100
                                        ? `${item.description.slice(0, 100)}...`
                                        : item.description}
                                    {item.description?.length > 100 && (
                                        <button className="text-primary hover:underline ml-1">
                                            Baca Selengkapnya
                                        </button>
                                    )}
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex flex-wrap gap-2">
                                        {item.techstack.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="badge badge-outline">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    {Object.entries(item.links).map(
                                        ([title, url]) =>
                                            url && (
                                                <a
                                                    key={title}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-md btn-ghost cursor-pointer">
                                                    {title === "github" && (
                                                        <Icon
                                                            icon="mdi:github"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    )}
                                                    {title === "demo" && (
                                                        <Icon
                                                            icon="mdi:link"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    )}
                                                </a>
                                            )
                                    )}
                                    {!Object.values(item.links).some(
                                        (url) => url
                                    ) && (
                                        <span className="text-sm text-gray-500 cursor-not-allowed">
                                            <Icon
                                                icon={"mdi:lock"}
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
