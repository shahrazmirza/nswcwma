"use client";
import React, { useEffect, useRef } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import ScrollToTop from "../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const slide1 = useAnimation();
  const slide2 = useAnimation();
  const slide3 = useAnimation();
  const slide4 = useAnimation();
  const slide5 = useAnimation();
  const slide6 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });

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

  useEffect(() => {
    if (isInView4) {
      slide4.start("visible");
    }
  }, [isInView4]);

  useEffect(() => {
    if (isInView5) {
      slide5.start("visible");
    }
  }, [isInView5]);

  useEffect(() => {
    if (isInView6) {
      slide6.start("visible");
    }
  }, [isInView6]);

  return (
    <div className="bg-gray-800">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />

      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center"
        >
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            our mission
          </h1>
          <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5">
            The NSW Central West Muslim Association (NSWCWMA) is dedicated to
            community wellbeing and benevolent services. While religion/faith is
            ancillary in value, our primary purpose is to work collaboratively
            with the community to develop a safe, healthy environment for
            everyone. We are also committed to alleviating poverty, assisting
            the sick within our community, responding to natural calamities, and
            offering help when required.
          </h2>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Image
            src="/assets/images/mission.jpg"
            alt="NSWCWMA Mission Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>
      </div>

      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse">
        <motion.div
          ref={ref4}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide4}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Image
            src="/assets/images/vision.jpg"
            alt="NSWCWMA Vision Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>
        <motion.div
          ref={ref3}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide3}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center"
        >
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            our vision
          </h1>
          <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5">
            At NSW Central West Muslim Association (NSWCWMA), we aim to foster a
            compassionate, supportive community in Dubbo and Central West NSW.
            We focus on alleviating poverty, assisting the sick, and responding
            to calamities. Our commitment includes providing social and
            educational facilities and supporting needy families, emphasizing
            universal benevolence and community wellbeing.
          </h2>
        </motion.div>
      </div>

      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col">
        <motion.div
          ref={ref5}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide5}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center"
        >
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            our short story
          </h1>
          <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pt-5">
            The NSW Central West Muslim Association (NSWCWMA), established on 12
            January 2017, is dedicated to the wellbeing of the Dubbo and Central
            West NSW community. Known for our commitment to benevolent services,
            we support needy families, promote healthcare initiatives, mental
            health awareness, and preventive measures, and enhance community
            knowledge through comprehensive programs. We empower marginalised
            communities by fostering respect and collaboration and provide aid
            during natural calamities. By promoting dialogue, understanding, and
            empathy, we create an inclusive environment and fight against
            discrimination. NSWCWMA is a lifeline, offering hope and ensuring
            every community member can thrive in a safe and nurturing
            environment.
          </h2>
        </motion.div>
        <motion.div
          ref={ref6}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide6}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Image
            src="/assets/images/shortstory.jpg"
            alt="NSWCWMA Short Story Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
