"use client";
import React, { useEffect, useState } from "react";
import Whatsapp from "../../Components/Whatsapp";
import Footer from "../../Components/Footer";
import NavMenu from "../../Components/NavMenu";
import data from "../../Data/Events.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "../../Components/ScrollToTop";

function SummerHolidayYouthProgram() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

  const filterInclude = "Summer Holiday Youth Program";

  return (
    <div className="bg-gray-800 text-gray-400">
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 grid grid-cols-4 gap-10">
          <div className="col-span-3">
            {items
              .filter((item) => item.title === filterInclude)
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
                    <p className="pb-5">{item.paragraph1}</p>
                    <p className="pb-5">{item.paragraph2}</p>
                    <p className="pb-5">{item.paragraph3}</p>
                    <p className="pb-5">{item.paragraph4}</p>
                    <p className="pb-5">{item.paragraph5}</p>
                    <p className="pb-5">{item.paragraph6}</p>
                    <p className="pb-5">{item.paragraph7}</p>
                    <p className="pb-5">{item.paragraph8}</p>
                  </div>
                  <div className="border-t-1 border-gray-400 my-10"></div>
                </div>
              ))}
          </div>
          <div className="... flex flex-col gap-10">
            <h1 className="text-3xl font-medium tracking-widest text-white">
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
                    <Link
                      href={item.href}
                      className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
                    >
                      read more
                    </Link>
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

export default SummerHolidayYouthProgram;
