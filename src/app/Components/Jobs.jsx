"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";

const Jobs = () => {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });
  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);
  return (
    <Container>
      <div className="py-10 md:pl-0 pl-5">
        <motion.h1
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5"
        >
          current roles
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="pl-8 pr-5 py-2 flex justify-between items-center"
        >
          <h1 className="p-2 mr-3 border-gray-400 md:text-medium text-sm font-semibold">
            Junior Cyber Security Awareness Assistant (Casual) – Age (11-17)
          </h1>
          <a
            role="button"
            className="btn md:btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold rounded-none bg-white border-none"
            href="/Careers/JuniorCyberSecurityAwarenessAssistant"
          >
            view role
          </a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="pl-8 pr-5 py-2 flex justify-between items-center"
        >
          <h1 className="p-2 mr-3 border-gray-400 md:text-medium text-sm font-semibold">
            Young Office Manager (Casual) – Age (11-17)
          </h1>
          <a
            role="button"
            className="btn md:btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold rounded-none bg-white border-none"
            href="/Careers/YoungOfficeManager"
          >
            view role
          </a>
        </motion.div>
      </div>
    </Container>
  );
};

export default Jobs;
