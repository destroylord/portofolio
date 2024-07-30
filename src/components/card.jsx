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
            <div className="cursor-pointer">
                <div key={card.id}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="relative h-full overflow-hidden">
                            <div className="relative h-68 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt=""
                                    className="object-center object-cover w-full h-full"
                                    style={{ objectPosition: "center" }}
                                />
                            </div>
                            <div className="p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in">
                                <h2 className="text-base font-medium  text-indigo-900 mb-1">
                                    {card.date}
                                </h2>
                                <h1 className="text-2xl font-semibold mb-3">
                                    {card.title}
                                </h1>
                                <p className="leading-relaxed mb-3 sm:text-sm">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Card;
