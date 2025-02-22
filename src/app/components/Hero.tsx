import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <section className="max-w-screen-lg flex flex-col items-center gap-8 overflow-x-hidden pt-20 sm:flex-row md:gap-16 md:py-lg md:pt-sm">
                <div className="relative w-full sm:w-1/2 ">
                    <div className="h-full w-full overflow-hidden rounded-b-full">
                        <Image
                            alt="Hero Image"
                            width={400}
                            height={600}
                            className="aspect-[3/4] h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
                            src="/images/profile.jpg"
                            priority
                        />
                        <div className="group absolute bottom-0 left-0 grid aspect-square h-fit w-[40%] place-content-center rounded-full bg-bg-800 shadow">
                            <div className="">
                                <Link
                                    href={`https://wa.me/6285853656272/?text=Hi%20Dafrin,%20I%20want%20to%20hire%20you%20for%20a%20project`}
                                    target="_blank"
                                    className="cursor-pointer  bg-green-800 border-2 border-[#00FF00] w-20 h-20 rounded-full flex items-center justify-center">
                                    <Icon
                                        icon="mdi:whatsapp"
                                        className="w-10 h-10 text-[#00FF00]"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full space-y-6">
                    <span className="text-2xl">👋Hey!! I&lsquo;m Dafrin</span>
                    <h1 className="lg:text-5xl">
                        A{" "}
                        <span className="text-highlight-primary">
                            <span className="underline decoration-green-500 font-bold back">
                                Full Stack
                            </span>{" "}
                            Developer
                        </span>
                    </h1>
                    <p className="">
                        I collaborate with brands globally to design impactful,
                        mission-focused websites that drive results and achieve
                        business goals.
                    </p>
                    <div className="flex gap-2 rounded-full">
                        <button className="btn">
                            <Link
                                href="https://github.com/destroylord"
                                target="_blank"
                                rel="noopener noreferrer">
                                Github
                            </Link>
                            <Icon icon="mdi:external-link" />
                        </button>
                        <Link
                            href="https://www.linkedin.com/in/fahmi-dafrin-maulana/"
                            className="btn"
                            target="_blank">
                            Linkedin
                            <Icon icon="mdi:external-link" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/fdm_0301/"
                            className="btn"
                            target="_blank">
                            Instagram
                            <Icon icon="mdi:external-link" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
