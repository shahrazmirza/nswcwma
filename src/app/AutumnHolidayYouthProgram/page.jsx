"use client";
import React, { useEffect, useState } from "react";
import Scroll_to_top from "../Components/Scroll_to_top";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import data from "../Data/Events.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function AutumnHolidayYouthProgram() {
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
      <NavMenu />
      <Scroll_to_top />
      <Whatsapp />
      <Container>
        <div className="py-10">
          {items
            .filter((item) => item.title === "Autumn Holiday Youth Program")
            .map((item) => (
              <div key={item.id}>
                <h1 className="text-3xl font-medium tracking-widest text-white">
                  {item.title}
                </h1>{" "}
                <div className="flex items-center text-sm font-semibold gap-1 py-5">
                  <FaCalendarAlt className="w-3 h-3" />
                  <h2>{item.date}</h2>
                </div>
                <div className="flex gap-3 py-3">
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${item.href}`}
                    target="_blank"
                    className="bg-blue-600 text-white flex justify-center items-center mb-5 rounded px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                  >
                    <FaFacebook /> Share
                  </Link>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${item.href}`}
                    target="_blank"
                    className="bg-black text-white flex justify-center items-center mb-5 rounded-full px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                  >
                    <FaXTwitter /> Post
                  </Link>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${item.href}`}
                    target="_blank"
                    className="bg-sky-700 text-white flex justify-center items-center mb-5 rounded px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                  >
                    <FaLinkedin /> Share
                  </Link>
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
                <p className="py-5">{item.paragraph1}</p>
                <div className="border-t-1 border-gray-400 my-10"></div>
              </div>
            ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default AutumnHolidayYouthProgram;
