import React, { useEffect, useState } from "react";

function Card() {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return cards.map((card) => (
        <div>
            <div key={card.id} className=" bg-slate-50">
                <div className="border-2 border-slate-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                    <div className="relative h-72 overflow-hidden flex-shrink-0">
                        <img
                            src={card.image}
                            alt=""
                            className="object-center object-cover w-full h-full"
                        />
                    </div>
                    <div className="h-full p-6 transition duration-300 ease-in flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-base font-medium text-indigo-900 mb-1">
                                {card.date}
                            </h2>
                            <h1 className="text-2xl hover:text-indigo-400 hover:underline  font-semibold mb-3">
                                {card.title}
                            </h1>
                            <p className="leading-relaxed mb-3 sm:text-sm">
                                {card.description.substring(0, 150)}...{" "}
                                <a href="#">
                                    {" "}
                                    <box-icon
                                        size="xs"
                                        color="#6366F1"
                                        name="link-external"></box-icon>
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap">
                            {card.techstack.map((tech) => (
                                <span
                                    className="inline-block cursor-pointer bg-gray-200 rounded-full px-2 py-1 text-sm font-sm text-gray-700 mr-2 mb-2"
                                    key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Card;
