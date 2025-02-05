"use client";
import React, { useEffect, useRef } from "react";
import Whatsapp from "../Components/Whatsapp";
import Values from "../Components/Values";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import ScrollToTop from "../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
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
    <div>
      <div className="bg-gray-800 w-screen">
        <Navbar />
        <ScrollToTop />
        <Whatsapp />

        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1
              data-translate
              className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
            >
              our mission
            </h1>
            <h2
              data-translate
              className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5"
            >
              We are dedicated to promoting community wellbeing through
              inclusive and benevolent services. While rooted in Islamic values,
              our primary focus is on collaborating with the community to create
              a safe and healthy environment for all, alleviate poverty, assist
              the sick, and respond to natural disasters.
            </h2>
          </div>
          <Image
            src="/assets/images/mission.jpg"
            alt="NSWCWMA Mission Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>

        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/vision.jpg"
            alt="NSWCWMA Vision Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1
              data-translate
              className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
            >
              our vision
            </h1>
            <h2
              data-translate
              className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5"
            >
              We aim To foster a compassionate and supportive community in Dubbo
              and Central West New South Wales, we are dedicated to alleviating
              poverty, providing social and educational facilities, and
              supporting those in need, all while promoting universal
              benevolence and wellbeing.
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide3}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1
              data-translate
              className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
            >
              our short story
            </h1>
            <h2
              data-translate
              className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5"
            >
              The New South Wales Central West Muslims Association, established
              on 12 January 2017, is dedicated to the wellbeing of the Dubbo and
              Central West New South Wales community. Known for our commitment
              to benevolent services, we support needy families, promote
              healthcare initiatives, mental health awareness, and preventive
              measures, and enhance community knowledge through comprehensive
              programs. We empower marginalised communities by fostering respect
              and collaboration and provide aid during natural calamities. By
              promoting dialogue, understanding, and empathy, we create an
              inclusive environment and fight against discrimination. The New
              South Wales Central West Muslims Association is a lifeline,
              offering hope and ensuring every community member can thrive in a
              safe and nurturing environment.
            </h2>
          </div>
          <Image
            src="/assets/images/shortstory.jpg"
            alt="NSWCWMA Short Story Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>
      </div>
      <div className="bg-white w-screen">
        <Values />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default About;
