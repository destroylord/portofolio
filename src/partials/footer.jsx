function Footer() {
    return (
        <div className="w-full text-center">
            <p className="py-4">
                &copy; {new Date().getFullYear()} Create by{" "}
                <a
                    href="https://www.linkedin.com/in/fahmi-dafrin-maulana/"
                    target="_blank"
                    className="text-blue-600 underline cursor-pointer font-bold">
                    Dafrin
                </a>
            </p>
        </div>
    );
}

export default Footer;
