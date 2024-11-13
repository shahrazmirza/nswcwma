"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

function Partners() {
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
    if (isInView1) slide1.start("visible");
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) slide2.start("visible");
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) slide3.start("visible");
  }, [isInView3]);

  useEffect(() => {
    if (isInView4) slide4.start("visible");
  }, [isInView4]);

  useEffect(() => {
    if (isInView5) slide5.start("visible");
  }, [isInView5]);

  return (
    <Container>
      <div className="card flex md:flex-row flex-col justify-between p-5 md:my-10 md:m-0 m-5 bg-gray-800">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="flex items-center uppercase text-3xl font-semibold tracking-widest text-white border-l border-white pl-5 h-16"
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
            className="h-36 w-36 flex items-center justify-center bg-white p-1 rounded-xl"
          >
            <Link
              href="https://www.reliantbusinesssolutions.com.au/"
              target="_blank"
            >
              <Image
                src="/assets/images/logoreliant.png"
                alt="Reliant Logo"
                width={90}
                height={90}
                className="object-contain"
              />
            </Link>
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
            className="h-36 w-36 flex items-center justify-center bg-white p-5 rounded-xl"
          >
            <Link href="https://www.sadaqaaid.org.au/" target="_blank">
              <Image
                src="/assets/images/logosadaqaid.png"
                alt="Sadaqa Aid Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
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
            className="h-36 w-36 flex items-center justify-center bg-white p-5 rounded-xl"
          >
            <Link href="https://icanrelief.org.au/" target="_blank">
              <Image
                src="/assets/images/logoicanrelief.png"
                alt="I Can Relief Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
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
            className="h-36 w-36 flex items-center justify-center bg-white p-1 rounded-xl"
          >
            <Link
              href="https://www.facebook.com/abcsupport2020/?checkpoint_src=any"
              target="_blank"
            >
              <Image
                src="/assets/images/logoauburnbrothers.png"
                alt="Auburn Brothers Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
