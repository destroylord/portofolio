function Card() {
    return (
        <div>
            <div className="cursor-pointer">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        src="https://picsum.photos/id/1011/720/400"
                        alt=""
                        className="lg:h-72 md:h-48 w-full object-cover object-center"
                    />
                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 className="text-base font-medium text-indigo-300 mb-1">
                            October 29, 2021
                        </h2>
                        <h1 className="text-2xl font-semibold mb-3">
                            Lakes are silent
                        </h1>
                        <p className="leading-relaxed mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam modi, expedita quos doloremque autem
                            ipsum itaque incidunt ipsam reprehenderit fuga!
                            Dolores quisquam eius cum accusamus?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
