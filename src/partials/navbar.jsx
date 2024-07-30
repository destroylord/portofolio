function Navbar() {
    return (
        <div>
            <div className="">
                <nav className="bg-slate-400 py-2">
                    <div className="flex container mx-auto">
                        <img src="logo192.png" alt="" className="p-4 w-20" />
                    </div>
                </nav>
            </div>

            <div className="py-4 fixed bottom-0 right-0 left-0 items-center bg-red-400 md:hidden">
                <ul className="flex justify-around">
                    {[
                        ["Beranda", "#Beranda", "home-alt-2"],
                        ["Tentang", "#Tentang", "info-circle"],
                        ["Kontak", "#Kontak", "contact"],
                    ].map(([title, href, icon]) => (
                        <li className="hover:bg-red-700">
                            <a
                                href={href}
                                className="flex justify-center flex-col items-center gap-1">
                                <box-icon
                                    type="solid"
                                    name={icon}
                                    className="text-2xl"></box-icon>
                                <span>{title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
