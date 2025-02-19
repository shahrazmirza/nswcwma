"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import data from "../Data/Funders.json";
import Link from "next/link";

function Funders() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

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
    <Container>
      <motion.div
        ref={ref1}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={slide1}
        transition={{ duration: 0.9, delay: 0 }}
        className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16 md:mb-5 md:ml-0 ml-5 md:mb-10 my-10"
        data-translate
      >
        our government funders
      </motion.div>

      <div className="mb-20">
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-3 md:gap-10 flex flex-col gap-5 m-5 md:m-0"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="card w-full h-60 shadow-xl flex items-center justify-center py-20 bg-gray-200"
            >
              <Link href={item.href} target="_blank">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

export default Funders;
