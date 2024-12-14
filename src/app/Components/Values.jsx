"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function Values() {
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
    <Container>
      <div className="md:grid md:grid-cols-6 gap-6 md:pt-20 md:p-0 p-5">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16 mt-5 mb-10"
        >
          our values
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
          className="card card-compact bg-none w-full shadow-xl"
        >
          <h1 className="text-center uppercase text-3xl font-semibold tracking-widest text-white py-7 bg-gray-800">
            I
          </h1>
          <div className="card-body">
            <h2 className="card-title text-lg">Inclusion and Respect</h2>
            <p>
              Embracing diversity and fostering an inclusive environment where
              everyone feels valued and respected.
            </p>
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
          className="card card-compact bg-none w-full shadow-xl"
        >
          <h1 className="text-center uppercase text-3xl font-semibold tracking-widest text-white py-7 bg-gray-800">
            S
          </h1>
          <div className="card-body">
            <h2 className="card-title text-lg">Service and Empowerment</h2>
            <p>
              Enhancing community well-being through accessible services and
              empowering individuals to take an active role in their community.
            </p>
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
          className="card card-compact bg-none w-full shadow-xl"
        >
          <h1 className="text-center uppercase text-3xl font-semibold tracking-widest text-white py-7 bg-gray-800">
            L
          </h1>
          <div className="card-body">
            <h2 className="card-title text-lg">Leadership and Excellence</h2>
            <p>
              Inspiring leadership within the community by nurturing talent and
              encouraging civic participation.
            </p>
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
          className="card card-compact bg-none w-full shadow-xl"
        >
          <h1 className="text-center uppercase text-3xl font-semibold tracking-widest text-white py-7 bg-gray-800">
            A
          </h1>
          <div className="card-body">
            <h2 className="card-title text-lg">Accountability & Trust</h2>
            <p>
              Upholding transparency, sustainability, and ethical governance in
              all their actions.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref6}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide6}
          transition={{ duration: 0.9, delay: 0 }}
          className="card card-compact bg-none w-full shadow-xl"
        >
          <h1 className="text-center uppercase text-3xl font-semibold tracking-widest text-white py-7 bg-gray-800">
            M
          </h1>
          <div className="card-body">
            <h2 className="card-title text-lg">Mindfulness & Innovation</h2>
            <p>
              Honoring cultural heritage while fostering mutual respect and
              understanding across diverse backgrounds.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default Values;
