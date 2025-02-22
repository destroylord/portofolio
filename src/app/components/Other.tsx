import Image from "next/image";

export default function Other() {
    return (
        <>
            <section className="w-full p-8 bg-black/50 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-2xl">Education</h4>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <Image
                                    src="/images/gedung.jpg"
                                    alt="Gedung JTI"
                                    width={400}
                                    height={300}
                                />
                            </figure>
                            <div className="card-body text-white">
                                <h2 className="text-sm">
                                    State Polytechnic of Jember
                                </h2>
                                <p>
                                    Bachelor of Applied Computer <br />
                                    GPA 3.51 of 4.00
                                </p>
                                <div className="card-actions justify-end">
                                    2020 - 2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input
                                    type="radio"
                                    name="my-accordion-4"
                                    defaultChecked
                                />
                                <div className="collapse-title text-xl font-medium">
                                    ACHIEVEMENTS
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm mb-2 font-semibold">
                                        Finalist (Hackathon), State Polytechnic
                                        of Malang - Aug 2021
                                    </p>
                                    <small>
                                        Finalist in KMIPN 2021, developed a
                                        mobile application "Sumbangin Aja" for
                                        food sharing, competing against 1500
                                        applicants from polytechnics across
                                        Indonesia.
                                    </small>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    CERTIFICATIONS
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        Intellectual Property Right Website
                                        Polijepay - Nov 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
