"use client";
import React, { useEffect, useState } from "react";
import Whatsapp from "../../Components/Whatsapp";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import data from "../../Data/Events.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "../../Components/ScrollToTop";

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

  const filterInclude = "Autumn Holiday Youth Program";

  return (
    <div className="bg-gray-800 text-gray-400">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <div className="col-span-3 md:px-0 px-5">
            {items
              .filter((item) => item.title === filterInclude)
              .map((item) => (
                <div key={item.id}>
                  <h1 className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
                    {item.title}
                  </h1>{" "}
                  <div className="flex items-center text-sm font-semibold gap-1 py-5">
                    <FaCalendarAlt className="w-3 h-3" />
                    <h2>{item.date}</h2>
                  </div>
                  <div className="flex gap-3 py-3">
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bg-blue-600 text-white flex justify-center items-center mb-5 rounded px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaFacebook /> Share
                    </Link>
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bg-black text-white flex justify-center items-center mb-5 rounded-full px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaXTwitter /> Post
                    </Link>
                    <Link
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        window.location.href
                      )}`}
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
                  <div className="pt-5">
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph1}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph2}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph3}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph4}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph5}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph6}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph7}
                    </p>
                    <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                      {item.paragraph8}
                    </p>
                  </div>
                  <div className="md:border-t-1 md:border-gray-400 md:my-10"></div>
                </div>
              ))}
          </div>
          <div className="md:... md:flex md:flex-col gap-10 grid grid-cols-1 md:w-fit w-screen md:px-0 px-5">
            <h1 className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Recent Posts
            </h1>
            {items
              .filter((item) => item.title !== filterInclude)
              .map((item) => (
                <div key={item.id} className="flex flex-col gap-5">
                  <Link href={item.href}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={1000}
                      height={1000}
                      className=""
                    />
                  </Link>
                  <h1 className="text-sm tracking-widest text-gray-400">
                    {item.title}
                  </h1>{" "}
                  <div className="flex text-white text-sm font-semibold gap-1">
                    <a
                      role="button"
                      className="btn uppercase outline-white text-white outline outline-1 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
                      href={item.href}
                    >
                      read more
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default AutumnHolidayYouthProgram;
