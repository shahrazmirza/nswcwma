"use client";
import React, { useEffect, useState } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import data from "../Data/Events.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import ScrollToTop from "../Components/ScrollToTop";

function Events() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);
  return (
    <div className="bg-gray-800 text-gray-400">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 md:p-0 p-5">
          {items.map((item) => (
            <div key={item.id}>
              <h1 className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
                {item.title}
              </h1>{" "}
              <div className="flex items-center text-sm font-semibold gap-1 py-5">
                <FaCalendarAlt className="w-3 h-3" />
                <h2>{item.date}</h2>
              </div>
              <Link href={item.href}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={2000}
                  height={2000}
                  className=""
                />
              </Link>
              <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
                {item.paragraph1}
              </p>
              <div className="flex text-white text-sm font-semibold gap-1">
                <a
                  role="button"
                  className="btn-sm flex justify-center items-center uppercase outline-white text-white outline outline-1 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
                  href={item.href}
                >
                  read more
                </a>
              </div>
              <div className="border-t-1 border-gray-400 my-10"></div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Events;
