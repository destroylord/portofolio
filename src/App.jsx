// import logo from "./logo.svg";
import Navbar from "./partials/navbar";
import Card from "./components/card";
import Footer from "./partials/footer";
import "boxicons";

function App() {
    return (
        <div className="font-poppins">
            {/* <Navbar /> */}
            <section className="md:h-full flex items-center text-slate-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-semibold uppercase text-indigo-500 mb-4">
                            Portofolio
                        </h1>
                        <p className="text-slate-700 md:text-lg mt-3 ">
                            Di sini Anda dapat menemukan beberapa proyek web
                            yang telah saya kerjakan serta penjelasan tentang
                            teknologi yang digunakan.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 10 }, (_, index) => (
                            <div key={index} className="w-full ">
                                <Card />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
