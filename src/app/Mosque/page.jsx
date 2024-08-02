"use client";
import React, { useEffect, useRef, useState } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import data from "../Data/MosqueServices.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import ScrollToTop from "../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

function Mosque() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const slide1 = useAnimation();
  const slide2 = useAnimation();
  const slide3 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

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

  useEffect(() => {
    if (isInView3) {
      slide3.start("visible");
    }
  }, [isInView3]);

  return (
    <div className="bg-gray-800 text-gray-400 w-screen">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <motion.h1
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 my-10 pl-10 md:mx-0 ml-5 mr-10"
        >
          Dubbo Mosque
        </motion.h1>
        <motion.p
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pl-10 md:mx-0 ml-5 mr-10 mb-10"
        >
          Dubbo Mosque serves as an important spiritual hub within the broader
          framework of the NSW Central West Muslim Association (NSWCWMA). While
          the mosque plays a vital role in the religious and spiritual lives of
          our community members, it operates as an ancillary function to
          NSWCWMA’s primary mission of community wellbeing, social support, and
          charitable services. At Dubbo Mosque, we are dedicated to providing a
          welcoming space for worship, reflection, and spiritual growth. Our
          services include daily prayers, religious guidance, and community
          gatherings, all designed to nurture the faith and connection of our
          members. Aligned with the overarching goals of NSWCWMA, Dubbo Mosque
          also supports initiatives that contribute to the social and
          educational development of our community. Whether through
          collaborative events, educational programs, or outreach activities,
          Dubbo Mosque remains a cornerstone of faith and service within the
          Central West NSW region.
        </motion.p>
        <motion.div
          ref={ref3}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide3}
          transition={{ duration: 0.9, delay: 0 }}
          className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-0 mx-5"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="card bg-gray-900 shadow-xl md:font-thin md:text-base text-xs tracking-wide text-gray-400 md:ml-10"
            >
              <div className="card-body">
                <h2 className="md:text-xl text-base md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 pl-5">
                  {item.title}
                </h2>
                <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
      <Footer />
    </div>
  );
}

export default Mosque;
