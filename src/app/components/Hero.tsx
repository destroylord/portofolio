import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import CircularText from "../utlis/CirculatText";
import Typed from "typed.js";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const typed = new Typed("#element", {
            strings: [
                "I collaborate with brands globally to design impactful mission-focused websites that drive results and achieve business goals.",
                "Follow account me ⬇️",
            ],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section className="max-w-screen-lg flex flex-col items-center gap-8 overflow-x-hidden pt-20 sm:flex-row md:gap-16 md:py-lg md:pt-sm">
                <div className="relative w-full sm:w-1/2 ">
                    <div className="h-full w-full  overflow-hidden rounded-b-full">
                        <Image
                            alt="Hero Image"
                            width={600}
                            height={600}
                            className="aspect-[3/4] h-full w-full object-contain transition duration-300 hover:scale-[1.5]"
                            src="/images/profile.webp"
                            priority
                        />

                        <div className="absolute bottom-0 left-[5%] grid aspect-square h-fit w-[40%] place-content-center bg-bg-800 shadow overflow-hidden">
                            <div className="">
                                <CircularText
                                    text="CONTACT*ME*TOGETHER*"
                                    onHover="speedUp"
                                    spinDuration={20}
                                    className="text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full space-y-6">
                    <span className="text-2xl">👋Hey!! I&apos;m Dafrin</span>
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
                        <span id="element"></span>
                        {/*  */}
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
