"use client";
import React, { useEffect, useState, useRef } from "react";
import Whatsapp from "../../../Components/Whatsapp";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";
import data from "../../../Data/CurrentEvents.json";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "../../../Components/ScrollToTop";
import { motion, useAnimation, useInView } from "framer-motion";

function CyberSafeCommunitiesInitiative() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("", data);
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

  const filterInclude = "Cyber Safe Communities Initiative";

  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });
  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  const ref2 = useRef(null);
  const slide2 = useAnimation();
  const isInView2 = useInView(ref2, { once: true });
  useEffect(() => {
    if (isInView2) {
      slide2.start("visible");
    }
  }, [isInView2]);

  const ref3 = useRef(null);
  const slide3 = useAnimation();
  const isInView3 = useInView(ref3, { once: true });
  useEffect(() => {
    if (isInView3) {
      slide3.start("visible");
    }
  }, [isInView3]);

  const ref4 = useRef(null);
  const slide4 = useAnimation();
  const isInView4 = useInView(ref4, { once: true });
  useEffect(() => {
    if (isInView4) {
      slide4.start("visible");
    }
  }, [isInView4]);

  const ref5 = useRef(null);
  const slide5 = useAnimation();
  const isInView5 = useInView(ref5, { once: true });
  useEffect(() => {
    if (isInView5) {
      slide5.start("visible");
    }
  }, [isInView5]);

  const ref6 = useRef(null);
  const slide6 = useAnimation();
  const isInView6 = useInView(ref6, { once: true });
  useEffect(() => {
    if (isInView6) {
      slide6.start("visible");
    }
  }, [isInView6]);

  return (
    <div className="bg-gray-800 text-gray-400">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="py-10 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            {items
              .filter((item) => item.title === filterInclude)
              .map((item) => (
                <div key={item.id}>
                  <h1
                    data-translate
                    className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
                  >
                    {item.title}
                  </h1>{" "}
                  <div className="flex items-center text-sm font-semibold gap-1 py-5">
                    <FaCalendarAlt className="w-3 h-3" />
                    <h2 data-translate>{item.date}</h2>
                  </div>
                  <div className="flex gap-3 py-3">
                    <a
                      role="button"
                      className="bt-sm bg-blue-600 text-white hover:bg-blue-700 mb-5 border-none rounded px-3 text-xs font-medium tracking-wide w-20 flex justify-center items-center gap-1"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                    >
                      <FaFacebook />
                      Share
                    </a>

                    <a
                      role="button"
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bt-sm bg-black hover:bg-gray-900 text-white flex justify-center items-center mb-5 rounded-full px-3 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaXTwitter /> Post
                    </a>

                    <a
                      role="button"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      className="bt-sm bg-sky-700 hover:bg-sky-800 text-white flex justify-center items-center mb-5 rounded px-3 py-1 gap-1 text-xs font-medium tracking-wide w-20"
                    >
                      <FaLinkedin /> Share
                    </a>
                  </div>
                  {/* <Link href={item.href}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={2000}
                      height={2000}
                      className=""
                    />
                  </Link> */}
                  <div className="pt-5">
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph1}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph2}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph3}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph4}
                    </p>
                    <p
                      data-translate
                      className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                    >
                      {item.paragraph5}
                    </p>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
        <div className="py-0 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref2}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide2}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            <div>
              <h1
                data-translate
                className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
              >
                Cyber Security Awareness
              </h1>{" "}
              <h1
                data-translate
                className="capitalize md:text-2xl text-lg md:font-medium font-semibold md:tracking-wide text-white pt-5"
              >
                Introduction
              </h1>{" "}
              <div className="pt-5">
                <p
                  data-translate
                  className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                >
                  In today&#39;s digital age, cyber security is more important
                  than ever. As we rely more on technology for everyday tasks,
                  from banking to social media, the risks associated with
                  cybercrime also increase. Vulnerable groups such as the
                  elderly, migrants, CALD communities, and individuals with
                  disabilities can be particularly at risk. The New South Wales
                  Central West Cyber Safe Communities Initiative, run by the New
                  South Wales Central West Muslim Association, aims to educate
                  and empower individuals to stay safe online.
                </p>
                <p
                  data-translate
                  className="md:font-thin md:text-lg text-sm tracking-wide text-gray-400 pb-5"
                >
                  Our program provides essential knowledge to help you
                  understand cyber threats and adopt safe online practices,
                  ensuring that you and your community can confidently navigate
                  the digital world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-0 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref3}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide3}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            <div>
              <h1
                data-translate
                className="capitalize md:text-2xl text-lg md:font-medium font-semibold md:tracking-wide text-white pt-5"
              >
                Common Cyber Security Threats
              </h1>{" "}
              <div className="md:text-base text-sm pt-5 flex flex-col gap-2">
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Phishing Attacks
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Phishing is a method used by cybercriminals to trick you
                      into giving away personal information such as passwords or
                      financial details. These often come in the form of fake
                      emails, text messages, or websites that appear legitimate.
                    </p>
                    <p>
                      <strong>Signs of a Phishing Attempt:</strong>
                    </p>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Urgent messages asking for personal information</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Links to unfamiliar websites</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Attachments from unknown senders</p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Identity Theft
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Identity theft involves criminals using your personal
                      information, such as your name, address, or bank details,
                      to commit fraud. This can result in financial loss and
                      damage to your reputation.
                    </p>
                    <p>
                      <strong>How Identity Theft Happens:</strong>
                    </p>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Stolen personal information from unsecured websites</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Fake phone calls pretending to be from trusted companies
                      </p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Data breaches</p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Scams Targeting the Elderly and Migrants
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Scammers often target elderly individuals and those from
                      non-English speaking backgrounds due to their limited
                      familiarity with online platforms.
                    </p>
                    <p>
                      <strong>Common scams include:</strong>
                    </p>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Fake government or bank phone calls</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Lottery scams</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Requests for payment through gift cards</p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Malware and Viruses
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Malware is harmful software designed to damage your device
                      or steal data. Viruses can spread through email
                      attachments, suspicious websites, or software downloads.
                    </p>
                    <p>
                      <strong>Common scams include:</strong>
                    </p>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Ransomware: Locks your files and demands payment.</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Spyware: Secretly monitors your activities.</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Trojans: Disguised as legitimate software.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-0 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref4}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide4}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            <div>
              <h1
                data-translate
                className="capitalize md:text-2xl text-lg md:font-medium font-semibold md:tracking-wide text-white pt-10"
              >
                Ways to Protect Yourself Online
              </h1>{" "}
              <div className="md:text-base text-sm pt-5 flex flex-col gap-2">
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Use Strong Passwords
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Create passwords that are difficult to guess by combining
                      upper and lowercase letters, numbers, and symbols. Avoid
                      using common words or your personal information.
                    </p>
                    <div className="flex flex-wrap items-center gap-1">
                      <strong>Example:</strong>Instead of{" "}
                      <p className="bg-gray-800 px-1 mx-1 rounded">
                        password123
                      </p>
                      , use
                      <p className="bg-gray-800 px-1 mx-1 rounded">
                        P@ssw0rd!23
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Enable Two-Factor Authentication (2FA)
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      2FA adds an extra layer of security by requiring a second
                      step, such as a code sent to your phone, in addition to
                      your password when logging in.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Keep Software and Devices Updated
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Regularly update your operating system, apps, and
                      antivirus software to protect against the latest threats.
                      Updates often fix security vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Avoid Suspicious Links and Attachments
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Do not click on links or open attachments from unknown
                      sources. Always verify the sender before taking any
                      action.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    Secure Personal Information
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <p>
                      Be cautious about sharing your personal details online.
                      Ensure websites are secure (look for {`"https://"`} in the
                      URL) before entering sensitive information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-0 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref5}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide5}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            <div>
              <h1
                data-translate
                className="capitalize md:text-2xl text-lg md:font-medium font-semibold md:tracking-wide text-white pt-10"
              >
                Helpful Tips for Staying Safe Online
              </h1>{" "}
              <div className="md:text-base text-sm pt-5 flex flex-col gap-2">
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    For Elderly Individuals
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Seek help from family or community support groups if
                        unsure about online messages.
                      </p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Attend local cyber security workshops for hands-on
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    For Migrants and CALD Communities
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Access translated materials to understand online safety
                        in your preferred language.
                      </p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Rely on trusted community groups for assistance with
                        online transactions.Rely on trusted community groups for
                        assistance with online transactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    For Small Businesses
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Back up your data regularly.</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Secure your online banking platforms and machinery
                        control systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-900 text-gray-400">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    For Individuals with Disabilities
                  </div>
                  <div className="collapse-content flex flex-col gap-2">
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>Use accessibility tools for safe browsing.</p>
                    </div>
                    <div className="flex gap-2 pl-2">
                      <p>●</p>
                      <p>
                        Request personalised assistance from cyber security
                        support services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-0 grid md:grid-cols-4 grid-cols-3 gap-10 md:px-0">
          <motion.div
            ref={ref6}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide6}
            transition={{ duration: 0.9, delay: 0 }}
            className="col-span-4 md:px-0 px-5"
          >
            <h1
              data-translate
              className="capitalize md:text-2xl text-lg md:font-medium font-semibold md:tracking-wide text-white pt-10"
            >
              Project Activities Timeline
            </h1>{" "}
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:text-base text-sm py-10">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">1/02/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Project Launch
                  </div>
                  Official project kick-off event introducing the initiative and
                  its goals to the community.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/02/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 1
                  </div>
                  Tailored in-person workshop for migrants on cyber threats,
                  with materials translated into their native languages.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/03/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 2
                  </div>
                  Cyber security training for elderly individuals featuring
                  simplified, step-by-step instructions and hands-on activities.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/03/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Community Event
                  </div>
                  Community engagement event featuring Q&A sessions, cultural
                  presentations, and cyber security demonstrations.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/04/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 3
                  </div>
                  Customised training session for farmers focusing on protecting
                  business operations from cyber threats.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/04/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Translation Service Rollout
                  </div>
                  Distribution of translated brochures and online resources to
                  migrant communities.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/05/2025</time>
                  <div className="md:text-lg text-base font-black">
                    One-on-One Support Launch
                  </div>
                  Launch of helpline service providing personalised assistance
                  with cyber security issues.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/06/2025 </time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 4
                  </div>
                  Workshop for individuals with disabilities, featuring
                  accessible formats (audio, large print, and easy-read
                  versions).
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/07/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Mid-Year Review
                  </div>
                  Progress review and participant feedback collection to
                  evaluate the effectiveness of activities to date.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/08/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 5
                  </div>
                  Joint workshop for farmers and elderly individuals to promote
                  collaboration and enhance cyber security awareness.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/09/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Outreach Campaign Launch
                  </div>
                  Launch of a social media campaign targeting all vulnerable
                  groups with Act Now, Stay Secure materials.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">15/10/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Community Leader Consultation
                  </div>
                  Meeting with local leaders to gather insights and feedback for
                  improving outreach strategies.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/11/2025</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 6
                  </div>
                  Advanced training session for migrants and individuals with
                  disabilities focusing on fraud prevention and identity
                  protection.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 md:text-start">
                  <time className="font-mono italic">01/12/2025</time>
                  <div className="md:text-lg text-base font-black">
                    End-of-Year Event
                  </div>
                  Community celebration highlighting project achievements,
                  featuring testimonials and success stories.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="divider"></div>
      </Container>
      <Footer />
    </div>
  );
}

export default CyberSafeCommunitiesInitiative;
