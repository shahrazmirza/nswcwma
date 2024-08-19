"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

function Footer() {
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
    <>
      <div className="bg-gray-800 text-white py-20 w-screen">
        <Container>
          <div className="flex md:flex-row flex-col gap-10 md:p-0 p-5">
            <motion.div
              ref={ref1}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={slide1}
              transition={{ duration: 0.9, delay: 0 }}
              className="border-l-[1px] border-gray-300 pl-10 md:pr-10 pr-5"
            >
              <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide text-white md:pb-10 pb-8">
                GET IN TOUCH
              </h1>
              <div className="flex flex-col md:font-thin font-medium md:text-medium text-sm tracking-wide text-gray-400">
                <div className="flex flex-col gap-1">
                  <h2>71A TAMWORTH STREET,</h2>
                  <h2>DUBBO NSW 2830</h2>
                </div>
                <h2>PHONE: +61 478 684 716</h2>
                <h2>EMAIL: INFO@NSWCWMA.ORG.AU</h2>
              </div>
            </motion.div>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={slide2}
              transition={{ duration: 0.9, delay: 0 }}
              className="border-l-[1px] border-gray-300 pl-10 md:pr-10 pr-5"
            >
              <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide text-white md:pb-10 pb-8">
                business hours
              </h1>
              <div className="md:font-thin font-medium md:text-medium text-sm tracking-wide text-gray-400 flex gap-2">
                <div>
                  <h2>Monday:</h2>
                  <h2>Tuesday:</h2>
                  <h2>Wednesday:</h2>
                  <h2>Thursday:</h2>
                  <h2>Friday:</h2>
                  <h2>Saturday:</h2>
                  <h2>Sunday:</h2>
                </div>
                <div>
                  <h2>9am-5pm</h2>
                  <h2>9am-5pm</h2>
                  <h2>9am-5pm</h2>
                  <h2>9am-5pm</h2>
                  <h2>9am-5pm</h2>
                  <h2>Closed</h2>
                  <h2>Closed</h2>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref3}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={slide3}
              transition={{ duration: 0.9, delay: 0 }}
              className="border-l-[1px] border-gray-300 pl-10 md:pr-10 pr-5"
            >
              <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide text-white md:pb-10 pb-8">
                FOLLOW US
              </h1>
              <div className="pr-1">
                <a
                  href="https://www.facebook.com/profile.php?id=100090621588007&sk=about"
                  target="_blank"
                >
                  <button className="btn btn-square text-white bg-red-500 hover:bg-red-600 border-none rounded-none">
                    <FaFacebookF />
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div
              ref={ref3}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={slide3}
              transition={{ duration: 0.9, delay: 0 }}
              className="flex md:flex-col flex-row justify-between md:justify-center items-center md:gap-16 md:px-0 px-10"
            >
              <button className="btn btn-active btn-link">
                <a href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="NSWCWMA Logo"
                    width="80"
                    height="80"
                    className=""
                  />
                </a>
              </button>

              <button className="btn btn-active btn-link">
                <a
                  href="https://www.acnc.gov.au/charity/charities/2578be3f-e281-ee11-8179-00224893b0ed/profile"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/acnc-logo.png"
                    alt="ACNC Logo"
                    width="90"
                    height="90"
                    className=""
                  />
                </a>
              </button>
            </motion.div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-300 text-center">
        <Container>
          <motion.div
            ref={ref4}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={slide4}
            transition={{ duration: 0.9, delay: 0 }}
            className="bg-gray-300 flex md:flex-row flex-col justify-start items-center text-start gap-5 py-5 md:px-10 px-5"
          >
            <Image
              src="/assets/images/aboriginal-flag.png"
              alt="Aboriginal Flag Image"
              width="80"
              height="80"
              className=""
            />
            <p className="text-xs font-medium tracking-widest text-center md:text-start">
              NSW Central West Muslim Association acknowledges the First Peoples
              of Australia as the traditional custodians of the land on which we
              work. We acknowledge their cultures are living ones, which relate
              to their ongoing connection to all things living and non-living on
              land, sea and sky. We pay our respects to their Elders past and
              present. May the children of today lead us to a brighter tomorrow.
            </p>
          </motion.div>
        </Container>
      </div>
      <div className="bg-white text-center py-10 md:px-0 px-5">
        <Container>
          <motion.footer
            ref={ref5}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={slide5}
            transition={{ duration: 0.9, delay: 0 }}
            className="footer footer-center text-xs font-bold tracking-widest"
          >
            <aside>
              <div className="md:flex gap-1">
                <p>
                  Copyright © {new Date().getFullYear()} - All right reserved by
                  NSW Central West Muslim Association Incorporated
                </p>
                <Link
                  href="https://abr.business.gov.au/ABN/View?id=76977073780"
                  target="_blank"
                >
                  <p className="text-center">( ABN 76 977 073 780 )</p>
                </Link>
              </div>
              <p></p>
            </aside>
          </motion.footer>
        </Container>
      </div>
    </>
  );
}

export default Footer;
