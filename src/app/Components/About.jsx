"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
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
    <div className="bg-gray-800 w-screen">
      <div className="bg-gray-800 w-screen">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              welcome to our site!
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              We focus on community wellbeing, poverty alleviation, assisting
              the sick, and disaster response, aiming to create a safe, healthy
              environment for all.
            </h2>
            <div className="flex text-white text-sm font-semibold gap-1">
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
                href="/About"
              >
                read more
              </a>
            </div>
          </div>
          <Image
            src="/assets/images/about1.jpg"
            alt="Hero Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/about2.jpg"
            alt="Hero Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              shortly about us
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              Our Vision is to foster a compassionate, supportive community in
              Dubbo and Central West NSW, addressing poverty, aiding the sick,
              responding to calamities, and promoting wellbeing through social
              and educational activities.
            </h2>
            <div className="flex text-white text-sm font-semibold gap-1">
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800"
                href="/About"
              >
                read more
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
