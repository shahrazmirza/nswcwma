"use client";
import React, { useEffect, useRef, useState } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import data from "../Data/Events.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import ScrollToTop from "../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

// function Events() {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     console.log("", data);
//     if (data && data.length > 0) {
//       setItems(data);
//     } else {
//       console.error("");
//     }
//   }, []);

//   const ref1 = useRef(null);
//   const slide1 = useAnimation();
//   const isInView1 = useInView(ref1, { once: true });
//   useEffect(() => {
//     if (isInView1) {
//       slide1.start("visible");
//     }
//   }, [isInView1]);

//   return (
//     <div className="bg-gray-800 text-gray-400 w-screen">
//       <Navbar />
//       <ScrollToTop />
//       <Whatsapp />
//       <Container>
//         <motion.div
//           ref={ref1}
//           variants={{
//             hidden: { opacity: 0, y: 75 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           initial="hidden"
//           animate={slide1}
//           transition={{ duration: 0.9, delay: 0 }}
//           className="py-10 md:p-0 p-5"
//         >
//           {items.map((item) => (
//             <div key={item.id}>
//               <h1 className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
//                 {item.title}
//               </h1>{" "}
//               <div className="flex items-center text-sm font-semibold gap-1 py-5">
//                 <FaCalendarAlt className="w-3 h-3" />
//                 <h2>{item.date}</h2>
//               </div>
//               <Link href={item.href}>
//                 <Image
//                   src={item.imgSrc}
//                   alt={item.imgAlt}
//                   width={2000}
//                   height={2000}
//                   className=""
//                 />
//               </Link>
//               <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
//                 {item.paragraph1}
//               </p>
//               <div className="flex text-white text-sm font-semibold gap-1">
//                 <a
//                   role="button"
//                   className="btn-sm flex justify-center items-center uppercase outline-white text-white outline outline-1 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
//                   href={item.href}
//                 >
//                   read more
//                 </a>
//               </div>
//               <div className="divider my-10"></div>
//             </div>
//           ))}
//         </motion.div>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default Events;

function Events() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("No events data available.");
    }
  }, []);

  const categories = [
    "All",
    ...[...new Set(items.map((item) => item.category))].sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  return (
    <div className="bg-gray-800 text-gray-400 w-screen">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="md:py-10 md:p-0">
          <h1 className="my-10 uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 mb-10 pl-10 md:mx-0 ml-5">
            Our Events
          </h1>

          <div className="grid grid-cols-1 gap-5 md:flex justify-between md:mt-5 md:m-10 md:mr-0 m-5 text-gray-400 ">
            <ul className="menu lg:menu-horizontal bg-gray-900 rounded-box">
              <ul>
                <li>
                  <details close>
                    <summary>Filter by Category</summary>
                    <ul>
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a
                            onClick={() => setSelectedCategory(category)}
                            className={`${
                              selectedCategory === category ? "font-bold" : ""
                            }`}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </ul>
            <label className="input flex text-sm items-center rounded-box gap-2 bg-gray-900 py-6 pl-6">
              <input
                type="text"
                className="grow"
                placeholder="Search by keyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5 md:gap-y-10 md:px-0 px-5">
            {items
              .filter((item) => {
                const matchesCategory =
                  selectedCategory === "All" ||
                  item.category === selectedCategory;

                const matchesKeyword =
                  searchKeyword === "" ||
                  item.title
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase()) ||
                  item.paragraph1
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase());

                return matchesCategory && matchesKeyword;
              })
              .map((item) => (
                <a
                  href={item.href}
                  key={item.id} // Correct placement of the key prop
                  className="card w-auto bg-gray-900 shadow-xl md:font-thin md:text-base text-xs text-gray-400 md:ml-10"
                >
                  <figure>
                    <img
                      src={item.imgSrc || "/placeholder.jpg"} // Fallback image if imgSrc is undefined
                      alt={item.imgAlt || "Event image"} // Fallback alt text if imgAlt is undefined
                      className="w-full h-auto"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title md:text-xl text-base md:font-medium font-semibold text-white border-l-[1px] border-gray-300 pl-5">
                      {item.title}
                    </h2>
                    <p className="md:font-thin md:text-base text-xs text-gray-400 pl-5">
                      {item.summary}
                    </p>
                    <div className="card-actions justify-between mt-2 pl-5">
                      <h3 className="font-medium text-sm">{item.date}</h3>
                      <div className="badge badge-primary p-3">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Events;
