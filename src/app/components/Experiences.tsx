import { Icon } from "@iconify/react";
import ShinyText from "../utlis/ShinyText";

export default function Experiences() {
    return (
        <>
            <section className=" w-full gap-8 sm:gap-12">
                <div className="text-center py-8 ">
                    <span className="flex justify-center items-center gap-1 text-4xl">
                        <Icon icon="mdi:briefcase" className="" />
                        <ShinyText
                            speed={3}
                            text=" Work History"
                            className="text-4xl py-6 flex items-center"></ShinyText>
                    </span>
                    <span>Experience </span>
                    <span>
                        I have worked with some of the most innovative industry
                        leaders to help build their top-notch products.
                    </span>
                </div>
                <div className="">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-start timeline-box">
                                Sept 2023 – Dec 2023
                            </div>
                            <div className="timeline-end timeline-box">
                                <h4 className="text-xl">
                                    PT Kreasi Cyber Indonesia, Bondowoso
                                </h4>
                                <p className="text-md italic py-2">
                                    Backend Developer (Internship)
                                </p>
                                <div>
                                    <ul className="list-disc list-inside space-y-4 text-sm">
                                        <li>
                                            Led 5 projects as the Person In
                                            Charge (PIC), ensuring on-time
                                            delivery and high-quality results.
                                        </li>
                                        <li>
                                            Developed 3 applications using the
                                            Laravel framework, integrating
                                            blockchain technology for secure
                                            transactions.
                                        </li>
                                        <li>
                                            Implemented clean architecture and
                                            best practices, reducing code errors
                                            by 20%
                                        </li>
                                        <li>
                                            Utilized Docker containerization,
                                            improving application scalability by
                                            30% and maintainability.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-start timeline-box">
                                Oct 2019 - 2020
                            </div>
                            <div className="timeline-end timeline-box">
                                <h4 className="text-xl">
                                    CV. SyammerTech, Gresik
                                </h4>
                                <p className="text-md italic py-2">
                                    Web Developer
                                </p>
                                <div>
                                    <ul className="list-disc list-inside text-sm">
                                        <li>
                                            Led 5 projects as the Person In
                                            Charge (PIC), ensuring on-time
                                            delivery and quality
                                        </li>
                                        <li>
                                            Built and maintained 5+ web
                                            applications using Laravel and
                                            CodeIgniter 3, improving performance
                                            by 25%.
                                        </li>
                                        <li>
                                            Enhanced performance of web
                                            applications and databases, reducing
                                            load times by 40%.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
