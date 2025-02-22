export default function Footer() {
    return (
        <footer className="footer py-5 footer-center row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://github.com/destroylord">Fahmi Dafrin Maulana</a>
                </p>
            </aside>
        </footer>
    );
}
