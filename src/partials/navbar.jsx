function Navbar() {
    return (
        <div>
            <nav className="bg-transparent border-b-2 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap md:justify-end gap-4 sm:justify-center items-center mx-auto">
                    <a href="https://github.com/destroylord"
                        target="_blank">
                        <box-icon
                            type="logo"
                            size="md"
                            color="#C1C1C1"
                            name="github"></box-icon>
                    </a>
                    <a
                        href="javascript:void(0)"
                        typeof="download"
                        className="bg-indigo-700 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-offset-4 text-white rounded-lg border-indigo-700 p-3 text-center">
                        Download CV
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
