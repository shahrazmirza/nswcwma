"use client";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("animate");
    }
  }, [isInView]);
  return (
    <Container>
      <div className="md:grid md:grid-cols-5 gap-6 md:py-20 md:p-0 p-5">
        <motion.div
          ref={ref}
          variants={{
            initial: { y: 50, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            },
          }}
          initial="initial"
          animate={fadeControls}
        >
          <div className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16">
            our team
          </div>
        </motion.div>
        <motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { x: 150, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.1 },
              },
            }}
            initial="initial"
            animate={fadeControls}
          >
            <Image
              src="/assets/images/president.jpg"
              alt="President Image"
              width="2000"
              height="1000"
              className="relative aspect-ratio md:pb-10 md:p-0 p-10"
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2"
          >
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              mahmoud amin
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              president
            </h2>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { x: 150, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            initial="initial"
            animate={fadeControls}
          >
            <Image
              src="/assets/images/vice-president.jpg"
              alt="Vice President Image"
              width="2000"
              height="1000"
              className="relative aspect-ratio md:py-10 md:p-0 p-10"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2"
          >
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              saad khan
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              vice president
            </h2>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { x: 150, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
            initial="initial"
            animate={fadeControls}
          >
            <Image
              src="/assets/images/treasurer.jpg"
              alt="President Image"
              width="2000"
              height="1000"
              className="relative aspect-ratio md:pb-10 md:p-0 p-10"
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2"
          >
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              awais
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              treasurer
            </h2>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { x: 150, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.7 },
              },
            }}
            initial="initial"
            animate={fadeControls}
          >
            <Image
              src="/assets/images/secretary.jpg"
              alt="Vice President Image"
              width="2000"
              height="1000"
              className="relative aspect-ratio md:py-10 md:p-0 p-10"
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.8 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="border border-gray-500 text-gray-800 text-center p-5 flex flex-col md:gap-1 gap-2"
          >
            <h1 className="uppercase md:text-sm text-lg font-bold tracking-wide">
              Samsuddin Ahmed
            </h1>
            <h2 className="uppercase md:text-sm text-base font-normal tracking-wide">
              secretary
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}

export default Team;
