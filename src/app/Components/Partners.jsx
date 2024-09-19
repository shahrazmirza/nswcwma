"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function Partners() {
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
    <Container>
      <div className="card flex md:flex-row flex-col justify-between p-5 md:mb-10 m-5 bg-gray-800">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-300 border-l border-gray-300 pl-5 h-16"
        >
          our partners
        </motion.div>
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center md:py-5 py-10 px-10">
          <motion.div
            ref={ref2}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide2}
            transition={{ duration: 0.9, delay: 0 }}
          >
            <Image
              src="/assets/images/logoreliant.png"
              alt="Reliant Logo"
              width="150"
              height="150"
              className="card relative aspect-ratio p-10 bg-white"
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
            transition={{ duration: 0.9, delay: 0 }}
          >
            <Image
              src="/assets/images/logosadaqaid.png"
              alt="Reliant Logo"
              width="150"
              height="150"
              className="card relative aspect-ratio p-8 bg-white"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
