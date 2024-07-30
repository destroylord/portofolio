function Footer() {
    return (
        <div className="w-full text-center">
            <p className="py-4">
                &copy; {new Date().getFullYear()} by{" "}
                <span className="text-blue-600 underline cursor-pointer font-bold">
                    Dafrin
                </span>
            </p>
        </div>
    );
}

export default Footer;
