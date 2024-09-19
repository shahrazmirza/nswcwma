"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { TbDisabled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdSick } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiAwareness, GiLifeSupport } from "react-icons/gi";
import { motion, useAnimation, useInView } from "framer-motion";

function ServicesBanner() {
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
    <div className="bg-gray-700 text-gray-300">
      <Container>
        <div className="flex flex-col md:grid grid-cols-3 gap-12 p-10">
          <motion.div
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 0 }}
            className="flex justify-start items-center"
          >
            <FaPeopleRoof className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Homeless Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Providing accommodation and financial assistance to homeless
                individuals and at-risk travelers.
              </p>
            </div>
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
            className="flex justify-start items-center"
          >
            <FaBowlFood className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Free Food on Fridays
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Offering free lunch every Friday to support community members
                and foster social interaction.
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
            className="flex justify-start items-center"
          >
            <TbDisabled className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Disability Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Assisting disabled individuals with supportive equipment and
                paid work opportunities.
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
            className="flex justify-start items-center"
          >
            <FaCar className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Driving Classes
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Affordable driving lessons for CALD community members and
                migrants to enhance independence.
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
            className="flex justify-start items-center"
          >
            <IoIosPeople className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Poverty Alleviation
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Supporting individuals to overcome financial hardships and
                improve their quality of life.
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
            className="flex justify-start items-center"
          >
            <MdSick className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Sick Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Financial and daily life assistance for ill and disadvantaged
                community members fighting poverty.
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
            className="flex justify-start items-center"
          >
            <RiMentalHealthFill className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Mental Health Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Promoting mental well-being, offering essential support,
                resources, and programs for personal growth.
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
            className="flex justify-start items-center"
          >
            <GiAwareness className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Education Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Empowering communities with education through youth, language,
                domestic violence, and cyber security programs.
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
            className="flex justify-start items-center"
          >
            <GiLifeSupport className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Refugee Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Supporting refugees by fostering integration, reducing
                isolation, and promoting tolerance, safety, and inclusion.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default ServicesBanner;
