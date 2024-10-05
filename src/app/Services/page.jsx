"use client";
import React, { useEffect, useRef } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

function Services() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const slide1 = useAnimation();
  const slide2 = useAnimation();
  const slide3 = useAnimation();
  const slide4 = useAnimation();
  const slide5 = useAnimation();
  const slide6 = useAnimation();
  const slide7 = useAnimation();
  const slide8 = useAnimation();
  const slide9 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });
  const isInView8 = useInView(ref8, { once: true });
  const isInView9 = useInView(ref9, { once: true });

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

  useEffect(() => {
    if (isInView7) {
      slide7.start("visible");
    }
  }, [isInView7]);

  useEffect(() => {
    if (isInView8) {
      slide8.start("visible");
    }
  }, [isInView8]);

  useEffect(() => {
    if (isInView9) {
      slide9.start("visible");
    }
  }, [isInView9]);

  return (
    <div className="bg-gray-800 w-screen">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <>
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              homeless Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              The NSW Central West Muslims Association (NSWCWMA) primarily
              focuses on providing assistance to homeless people in the NSW
              Central West Region, including migrants and individuals from
              Culturally and Linguistically Diverse (CALD) backgrounds. Their
              assistance includes providing residence at NSWCWMA accommodation,
              offering financial support to homeless individuals, and offering
              temporary accommodation for people traveling from surrounding
              suburbs based on eligibility criteria and circumstances.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
          <Image
            src="/assets/images/homeless.jpg"
            alt="Homeless Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
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
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/freefood.jpg"
            alt="Free Food Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Free Food on Fridays
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              Every Friday afternoon, NSWCWMA offers free lunch to the
              deserving. This initiative aims to support those in need and
              foster a sense of community. By providing nutritious meals,
              NSWCWMA helps alleviate food insecurity and brings people
              together, encouraging social interaction and mutual support among
              community members.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
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
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Disability Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA provides various forms of assistance to individuals with
              disabilities to help them excel in life. This includes the
              provision of supportive equipment tailored to individual needs and
              the facilitation of involvement in paid work opportunities. These
              services aim to empower disabled individuals, promoting
              independence and enhancing their quality of life.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
          <Image
            src="/assets/images/disabilitysupport.jpg"
            alt="Disability Support Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
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
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/freeclasses.jpg"
            alt="Free Driving Classes Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <div className="md:flex items-center gap-2">
              <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
                Driving Classes
              </h1>
            </div>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              Affordable driving classes are available for members of the CALD
              community and migrants. These classes aim to empower individuals
              with the skills needed for independence and mobility. By offering
              practical driving instruction, NSWCWMA helps participants gain
              confidence and access to greater opportunities for employment and
              social engagement.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
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
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Poverty Alleviation
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA is committed to fighting poverty. They offer support to
              individuals struggling with poverty in their daily lives, helping
              them to overcome financial hardships and improve their quality of
              life. Through various programs and direct assistance, NSWCWMA aims
              to provide a safety net for those in need, fostering resilience
              and self-sufficiency.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
          <Image
            src="/assets/images/povertyalleviation.jpg"
            alt="Poverty Alleviation Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
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
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/supportforsick.jpg"
            alt="Support for the Sick Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Sick Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA supports community members who are suffering from illness
              and fighting poverty. This assistance can be financial or through
              help with daily life activities, ensuring that sick individuals
              receive the necessary care and support. By providing compassionate
              aid, NSWCWMA helps alleviate the burdens of illness, allowing
              individuals to focus on recovery and well-being.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref7}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide7}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Mental Health Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA is dedicated to promoting mental well-being. They provide
              essential support to individuals facing mental health challenges,
              offering access to resources and services aimed at improving
              emotional resilience and overall health. Through tailored programs
              and compassionate care, NSWCWMA fosters a supportive environment
              for healing and personal growth.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
          <Image
            src="/assets/images/mentalhealthsupport.jpg"
            alt="Mental Health Support Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
        </motion.div>

        <motion.div
          ref={ref8}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide8}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse"
        >
          <Image
            src="/assets/images/educationawarenesssupport.jpg"
            alt="Education & Awareness Support Image"
            width="2000"
            height="1000"
            className="relative aspect-ratio md:h-full object-cover min-h-60"
          />
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Education Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA is dedicated to empowering the community through education
              and awareness. They offer programs in children and community
              education, language resources, domestic violence awareness, and
              cyber security for CALD communities. By fostering social and
              ethical education for youth, NSWCWMA aims to build a safer, more
              informed, and resilient society.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref9}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide9}
          transition={{ duration: 0.9, delay: 0 }}
          className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col"
        >
          <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
            <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
              Refugees Support
            </h1>
            <h2 className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 py-5">
              NSWCWMA is committed to supporting refugees by fostering
              integration, reducing isolation, and promoting tolerance and
              respect for diverse cultures and religions. Through tailored
              programs, they work to reduce discrimination and racism, enhance
              community safety, and build resilience, ensuring refugees feel
              safe, included, and connected to the broader Australian community.
            </h2>

            <div className="flex md:gap-10 gap-5 text-white text-sm font-semibold transition delay-100">
              <a
                role="button"
                className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5"
                href="/Donation"
              >
                DONATE
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/Application"
              >
                apply
              </a>
              <a
                role="button"
                className="btn uppercase outline-white text-white outline outline-1 hover:text-red-500 hover:outline-red-500 hover:bg-gray-800 rounded-none bg-gray-800 px-5"
                href="/RefugeesSupport"
              >
                more
              </a>
            </div>
          </div>
          <Link href="../RefugeesSupport">
            <Image
              src="/assets/images/supportfortherefugees.jpg"
              alt="Support for the Refugees Image"
              width="2000"
              height="1000"
              className="relative aspect-ratio md:h-full object-cover min-h-60"
            />
          </Link>
        </motion.div>
      </>
      <Footer />
    </div>
  );
}

export default Services;
