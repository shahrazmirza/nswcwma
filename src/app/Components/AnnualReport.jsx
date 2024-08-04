"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";

const AnnualReport = () => {
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
          annual reports
        </motion.h1>
        <div className="">
          <motion.div
            ref={ref1}
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
              2023 Annual Report
            </h1>
            <a
              role="button"
              className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
              href="/assets/reports/Financial-Report-FY-2023.pdf"
              target="_blank"
            >
              download
            </a>
          </motion.div>
          <motion.div
            ref={ref1}
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
              2022 Annual Report
            </h1>
            <a
              role="button"
              className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
              href="/assets/reports/Financial-Report-FY-2022.pdf"
              target="_blank"
            >
              download
            </a>
          </motion.div>
          <motion.div
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="pl-8 pr-5 py-2 flex justify-between items-center"
          >
            <h1 className="p-2 mr-3 border-gray-400 md:text-medium text-sm font-semibold">
              Governing Document
            </h1>
            <a
              role="button"
              className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
              href="/assets/reports/Governing-Document-NSWCWMA.pdf"
              target="_blank"
            >
              download
            </a>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AnnualReport;
