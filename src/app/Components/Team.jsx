"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function Team() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const slide1 = useAnimation();
  const slide2 = useAnimation();
  const slide3 = useAnimation();
  const slide4 = useAnimation();
  const slide5 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });

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

  return (
    <Container>
      <div className="md:grid md:grid-cols-5 gap-6 md:py-20 md:p-0 p-5">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16"
        >
          our team
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
        >
          <Image
            src="/assets/images/president.jpg"
            alt="President Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:pb-10 md:p-0 p-10"
          />

          <div className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2">
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              mahmoud amin
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              president
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
        >
          <Image
            src="/assets/images/vicepresident.jpg"
            alt="Vice President Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:py-10 md:p-0 p-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2">
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              awais ayub
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              vice president
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide4}
          transition={{ duration: 0.9, delay: 0 }}
        >
          <Image
            src="/assets/images/treasurer.jpg"
            alt="Treasurer Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:pb-10 md:p-0 p-10"
          />

          <div className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2">
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              Aisyah Kamilia
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              treasurer (acting)
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref5}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide5}
          transition={{ duration: 0.9, delay: 0 }}
        >
          <Image
            src="/assets/images/secretary.jpg"
            alt="Secretary Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:py-10 md:p-0 p-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2">
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              Aisyah Kamilia
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              secretary
            </h2>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default Team;
