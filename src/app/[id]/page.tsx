// "use client";

// import { useEffect } from "react";
// // import Header from "../components/header";
// // import { Icon } from "@iconify/react";
// import useStore from "../store/useStore";
// // import Link from "next/link";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Page({ params }: { params: { id: string } }) {
//     const { id } = params;
//     const data = useStore((state) => state.data);
//     const setData = useStore((state) => state.setData);
//     const router = useRouter();

//     const item = data.find((item) => item.id === parseInt(id));

//     console.log(item);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         tr  y {
//     //             const res = await fetch(
//     //                 `http://localhost:3000/api/data/${id}`
//     //             );
//     //             if (!res.ok) throw new Error("Failed to fetch data");
//     //             const item = await res.json();

//     //             // Jika ingin menambah item ke store tanpa menghapus data sebelumnya:
//     //             setData([...data, item]);

//     //             // Jika ingin mengganti seluruh data di store:
//     //             // setData([item]);
//     //         } catch (error) {
//     //             console.error(error);
//     //             router.push("/404"); // Redirect ke halaman 404 jika data tidak ditemukan
//     //         }
//     //     };

//     //     fetchData();
//     // }, [id, setData, router]);

//     // Cari item berdasarkan ID
//     // const item = data.find((item) => item.id === parseInt(id));

//     if (!item) return <p>Loading...</p>;

//     return (
//         <>
//             {/* <main className="flex-grow max-w-screen-lg px-4 py-8 mx-auto">
//                 <Header />
//                 <div className="flex flex-row justify-between mb-4">
//                     <Link
//                         href="/"
//                         className="inline-flex items-center gap-1 text-sm">
//                         <Icon icon="material-symbols:arrow-back-rounded" />
//                         Back to Home
//                     </Link>
//                     <div className="badge badge-outline">2024</div>
//                 </div>
//                 <div className="w-full bg-black phone-6">
//                     <Image
//                         src={currentProject.image}
//                         alt={currentProject.title}
//                         className="object-cover w-full h-64"
//                     />
//                 </div>
//                 <h3 className="text-3xl">{currentProject.title}</h3>
//                 <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
//                     <div className="col-span-8 lg:col-span-8">
//                         <p>{currentProject.description}</p>
//                         <div className="flex gap-2 mt-4">
//                             {currentProject.techstack?.map(
//                                 (tech: string, index: number) => (
//                                     <span
//                                         key={index}
//                                         className="badge badge-outline">
//                                         {tech}
//                                     </span>
//                                 )
//                             )}
//                         </div>
//                     </div>
//                     <div className="col-span-8 lg:col-span-4">
//                         <h4 className="font-semibold">Role</h4>
//                         <p>{currentProject.role}</p>

//                         <h4 className="font-semibold mt-4">Duration</h4>
//                         <p>{currentProject.duration}</p>
//                     </div>
//                 </div>
//                 <div className="flex justify-between">
//                     {prevProject && (
//                         <Link
//                             href={`/${prevProject.id}`}
//                             className="flex-item btn btn-neutral">
//                             <div className="flex flex-col items-start">
//                                 <small>Previous</small>
//                                 <p>{prevProject.title}</p>
//                             </div>
//                         </Link>
//                     )}
//                     {nextProject && (
//                         <Link
//                             href={`/${nextProject.id}`}
//                             className="flex-item btn btn-neutral">
//                             <div className="flex flex-col items-end">
//                                 <small>Next</small>
//                                 <p>{nextProject.title}</p>
//                             </div>
//                         </Link>
//                     )}
//                 </div>
//                 <Footer />
//             </main> */}
//             <h1>{item.title}</h1>
//             <img src={item.image} alt={item.title} />
//             <p>{item.description}</p>
//             <p>Date: {item.date}</p>
//             <h4>Tech Stack:</h4>
//             <ul>
//                 {item.techstack.map((tech, index) => (
//                     <li key={index}>{tech}</li>
//                 ))}
//             </ul>
//             <h4>Links:</h4>
//             <ul>
//                 <li>
//                     <a
//                         href={item.links.github}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         GitHub
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href={item.links.demo}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         Demo
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href={item.links.download}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         Download
//                     </a>
//                 </li>
//             </ul>
//         </>
//     );
// }
