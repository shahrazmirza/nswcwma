"use client";
import React, { useEffect, useRef } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import { Container } from "@radix-ui/themes";
import ScrollToTop from "../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

function RefugeesSupport() {
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
    <div className="bg-gray-800 text-gray-400">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 md:px-0">
          <motion.div
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-3 md:px-0 px-5"
          >
            <div className="flex flex-col gap-5 pt-5">
              <h1 className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
                Support for the Refugees
              </h1>{" "}
              <Image
                src="/assets/images/supportfortherefugeesheader.jpg"
                alt="Support for the Refugees Header Image"
                width={2000}
                height={2000}
                className="py-3"
              />
              <p className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5">
                At NSWCWMA, we are committed to helping refugees from diverse
                backgrounds, particularly those from Palestinian, Muslim, and
                Arab communities, integrate smoothly into Australian society. We
                offer tailored programs to promote community connections, reduce
                isolation, and create a safe, welcoming environment where
                everyone can thrive.
              </p>
              <div className="flex flex-col gap-5">
                <h2 className="md:text-xl text-base md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 pl-5">
                  Our Mission
                </h2>
                <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-5">
                  The Support for Refugees initiative provides essential
                  resources to assist refugees in navigating life in Australia
                  while fostering respect for their cultural and religious
                  identities. Our goal is to build stronger, more inclusive
                  communities where refugees feel valued and supported.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="md:text-xl text-base md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 pl-5">
                  Our Objectives
                </h2>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Fostering Integration:</span>{" "}
                      We offer programs that help refugees integrate into
                      Australian society while preserving their cultural
                      heritage.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Reducing Isolation:</span> By
                      organising social events, cultural workshops, and support
                      services, we aim to combat feelings of isolation and help
                      refugees build meaningful connections.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">
                        Promoting Understanding:
                      </span>{" "}
                      Through educational programs, we encourage tolerance and
                      respect for different cultures and religions, reducing
                      instances of discrimination and racism.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Supporting Wellbeing:</span>{" "}
                      Our focus is on enhancing the overall wellbeing of refugee
                      communities by providing access to mental health,
                      education, and social services.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Ensuring Safety:</span> We
                      work to improve the safety of refugees by supporting
                      community infrastructure and ensuring they can participate
                      in community life free from threats or harassment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="md:text-xl text-base md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 pl-5">
                  Our Services
                </h2>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">
                        Language and Cultural Orientation:
                      </span>{" "}
                      We provide language resources and cultural orientation
                      programs to help refugees overcome language barriers and
                      adapt to Australian customs.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Community Engagement:</span>{" "}
                      Our regular events and workshops bring people together,
                      encouraging community bonds and providing spaces for
                      learning and social interaction.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Support and Advocacy:</span>{" "}
                      We offer a range of support services, including assistance
                      with legal matters, housing, and employment, to help
                      refugees build stable lives in Australia.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Safety and Security:</span> We
                      take proactive measures to ensure the safety of refugees,
                      particularly those affected by conflict, through community
                      safety initiatives and collaborations with local
                      authorities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="md:text-xl text-base md:font-medium font-semibold md:tracking-wide text-white border-l-[1px] border-gray-300 pl-5">
                  Expected Impact
                </h2>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">Enhanced Integration:</span>{" "}
                      Refugees will feel more connected to Australian society,
                      able to balance their cultural identities while embracing
                      new opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">
                        Increased Social Connections:
                      </span>{" "}
                      Our programs foster relationships and reduce isolation,
                      helping refugees establish strong support networks within
                      the community.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">
                        Greater Tolerance and Respect:
                      </span>{" "}
                      By promoting cultural understanding, we aim to reduce
                      discrimination and foster a more inclusive society.
                    </p>
                  </div>
                </div>
                <div className="flex pl-5 justify-start items-start">
                  <div className="md:font-semibold md:text-base text-xs tracking-wide text-gray-400">
                    ●
                  </div>
                  <div className="md:flex md:gap-1">
                    <p className="md:font-thin md:text-base text-xs tracking-wide text-gray-400 pl-4">
                      <span className="font-bold">
                        Improved Safety and Wellbeing:
                      </span>{" "}
                      Refugees will benefit from a safer environment, where they
                      can participate in community life without fear of
                      harassment or discrimination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </motion.div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default RefugeesSupport;
