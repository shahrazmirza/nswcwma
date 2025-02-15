"use client";
import React, { useEffect, useState, useRef } from "react";
import Whatsapp from "../../../Components/Whatsapp";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";
import data from "../../../Data/PastEvents.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "../../../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";
import PinkRibbonBreakfastPhotos from "../../../Components/PinkRibbonBreakfastPhotos";

function PinkRibbonBreakfast() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

  const filterInclude = "Pink Ribbon Breakfast at Buninyong Pre-School";

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const slide1 = useAnimation();
  const slide2 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      slide2.start("visible");
    }
  }, [isInView2]);

  return (
    <div className="bg-gray-800 text-gray-400">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-3 md:px-0 px-5"
          >
            {items
              .filter((item) => item.title === filterInclude)
              .map((item) => (
                <div key={item.id}>
                  <h1
                    data-translate
                    className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
                  >
                    {item.title}
                  </h1>{" "}
                  <div className="flex items-center text-sm font-semibold gap-1 py-5">
                    <FaCalendarAlt className="w-3 h-3" />
                    <h2 data-translate>{item.date}</h2>
                  </div>
                  <div className="flex gap-3 py-3">
                    <a
                      role="button"
                      className="bt-sm bg-blue-600 text-white hover:bg-blue-700 mb-5 border-none rounded px-3 text-xs font-medium tracking-wide w-20 flex justify-center items-center gap-1"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                    >
                      <FaFacebook />
                      Share
                    </a>

                    <a
                      role="button"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bt-sm bg-black hover:bg-gray-900 text-white flex justify-center items-center mb-5 rounded-full px-3 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaXTwitter /> Post
                    </a>

                    <a
                      role="button"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bt-sm bg-sky-700 hover:bg-sky-800 text-white flex justify-center items-center mb-5 rounded px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaLinkedin /> Share
                    </a>
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
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph1}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph2}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph3}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph4}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph5}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph6}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph7}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph8}
                    </p>
                  </div>
                  <div className="md:-mb-32 -mb-80">
                    <PinkRibbonBreakfastPhotos />
                  </div>
                  <div className="divider"></div>
                </div>
              ))}
          </motion.div>
          <motion.div
            ref={ref2}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide2}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="md:... md:flex md:flex-col gap-10 grid grid-cols-1 md:w-fit w-screen md:px-0 px-5"
          >
            <h1
              data-translate
              className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
            >
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
                  <h1
                    data-translate
                    className="text-sm tracking-widest text-gray-400"
                  >
                    {item.title}
                  </h1>{" "}
                  <div className="flex text-white text-sm font-semibold gap-1">
                    <a
                      role="button"
                      className="btn-sm flex justify-center items-center uppercase outline-white text-white outline outline-1 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
                      href={item.href}
                      data-translate
                    >
                      read more
                    </a>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default PinkRibbonBreakfast;
