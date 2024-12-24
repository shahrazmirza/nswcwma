"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function Hero() {
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
    <div className="flex justify-center items-center flex-col">
      <Image
        src="/assets/images/hero.jpg"
        alt="Hero Image"
        width="2000"
        height="1000"
        className="relative aspect-ratio md:h-full object-cover min-h-72"
      />
      <div className="absolute flex flex-col items-center justify-center">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:p-10 py-8 w-fit text-center text-white"
        >
          <div className="flex flex-col border md:p-10 px-10 py-6 gap-5">
            <h1
              data-translate
              className="md:text-4xl text-2xl md:font-medium font-semibold md:tracking-widest"
            >
              BE USEFUL TO OTHERS
            </h1>
            <h2
              data-translate
              className="md:font-medium font-semibold text-sm md:tracking-widest"
            >
              WITH NO THOUGHT OF RECOMPENSE
            </h2>
          </div>
        </motion.div>

        <motion.a
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0.5 }}
          role="button"
          className="btn bg-red-500 hover:bg-red-600 text-white border-none rounded-none"
          href="/Donation"
          data-translate
        >
          DONATE NOW
        </motion.a>
      </div>
    </div>
  );
}

export default Hero;
