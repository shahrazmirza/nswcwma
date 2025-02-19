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
  const [openSections, setOpenSections] = useState({
    phishing: false,
    identity: false,
    scams: false,
    malware: false,
    strongPasswords: false,
    twoFactor: false,
    deviceUpdated: false,
    suspiciousLinks: false,
    personalInfo: false,
    elderlyIndividuals: false,
    migrantsAndCALD: false,
    smallBusinesses: false,
    individualsWithDisabilities: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={2000}
                    height={2000}
                    className=""
                  />
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
              <div className="md:text-base text-sm pt-5 md:grid md:grid-cols-4 md:gap-5 flex flex-col gap-5">
                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/phishing.jpg"
                    alt="Phishing Attacks"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("phishing")}
                  >
                    <span data-translate>Phishing Attacks</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.phishing ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.phishing ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/idtheft.jpg"
                    alt="Identity Theft"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("identity")}
                  >
                    <span data-translate>Identity Theft</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.identity ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.identity ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/scams.jpg"
                    alt="Scams Targeting the Elderly and Migrants"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("scams")}
                  >
                    <span data-translate>
                      Scams Targeting the Elderly and Migrants
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.scams ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.scams ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/malware.jpg"
                    alt="Malware and Viruses"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("malware")}
                  >
                    <span data-translate>Malware and Viruses</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.malware ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.malware ? "block" : "hidden"
                    }`}
                  >
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
              <div className="md:text-base text-sm pt-5 md:grid md:grid-cols-3 md:gap-5 flex flex-col gap-5">
                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/password.jpg"
                    alt="Use Strong Passwords"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("strongPasswords")}
                  >
                    <span data-translate>Use Strong Passwords</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.strongPasswords ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.strongPasswords ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/2fa.jpg"
                    alt="Enable Two-Factor Authentication (2FA)"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("twoFactor")}
                  >
                    <span data-translate>
                      Enable Two-Factor Authentication (2FA)
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.twoFactor ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.twoFactor ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      2FA adds an extra layer of security by requiring a second
                      step, such as a code sent to your phone, in addition to
                      your password when logging in.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/update.jpg"
                    alt="Keep Software and Devices Updated"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("deviceUpdated")}
                  >
                    <span data-translate>
                      Keep Software and Devices Updated
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.deviceUpdated ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.deviceUpdated ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Regularly update your operating system, apps, and
                      antivirus software to protect against the latest threats.
                      Updates often fix security vulnerabilities.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/links.jpg"
                    alt="Avoid Suspicious Links and Attachments"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("suspiciousLinks")}
                  >
                    <span data-translate>
                      Avoid Suspicious Links and Attachments
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.suspiciousLinks ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.suspiciousLinks ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Do not click on links or open attachments from unknown
                      sources. Always verify the sender before taking any
                      action.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <img
                    src="/assets/images/CyberSafeCommunitiesInitiative/info.jpg"
                    alt="Secure Personal Information"
                    className="rounded-t-2xl"
                  />
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("personalInfo")}
                  >
                    <span data-translate>Secure Personal Information</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.personalInfo ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.personalInfo ? "block" : "hidden"
                    }`}
                  >
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
                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("elderlyIndividuals")}
                  >
                    <span data-translate>For Elderly Individuals</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.elderlyIndividuals
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.elderlyIndividuals ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("migrantsAndCALD")}
                  >
                    <span data-translate>
                      For Migrants and CALD Communities
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.migrantsAndCALD ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.migrantsAndCALD ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("smallBusinesses")}
                  >
                    <span data-translate>For Small Businesses</span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.smallBusinesses ? "rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.smallBusinesses ? "block" : "hidden"
                    }`}
                  >
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

                <div className="bg-gray-900 text-gray-400 rounded-2xl">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 font-medium"
                    onClick={() => toggleSection("individualsWithDisabilities")}
                  >
                    <span data-translate>
                      For Individuals with Disabilities
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform transform ${
                        openSections.individualsWithDisabilities
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    data-translate
                    className={`flex flex-col gap-2 p-4 pt-0 transition-all duration-300 ${
                      openSections.individualsWithDisabilities
                        ? "block"
                        : "hidden"
                    }`}
                  >
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Project Launch
                  </div>
                  <div data-translate>
                    Official project kick-off event introducing the initiative
                    and its goals to the community.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 1
                  </div>
                  <div data-translate>
                    Tailored in-person workshop for migrants on cyber threats,
                    with materials translated into their native languages.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 2
                  </div>
                  <div data-translate>
                    Cyber security training for elderly individuals featuring
                    simplified, step-by-step instructions and hands-on
                    activities.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Community Event
                  </div>
                  <div data-translate>
                    Community engagement event featuring Q&A sessions, cultural
                    presentations, and cyber security demonstrations.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 3
                  </div>
                  <div data-translate>
                    Customised training session for farmers focusing on
                    protecting business operations from cyber threats.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Translation Service Rollout
                  </div>
                  <div data-translate>
                    Distribution of translated brochures and online resources to
                    migrant communities.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    One-on-One Support Launch
                  </div>
                  <div data-translate>
                    Launch of helpline service providing personalised assistance
                    with cyber security issues.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 4
                  </div>
                  <div data-translate>
                    Workshop for individuals with disabilities, featuring
                    accessible formats (audio, large print, and easy-read
                    versions).
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Mid-Year Review
                  </div>
                  <div data-translate>
                    Progress review and participant feedback collection to
                    evaluate the effectiveness of activities to date.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 5
                  </div>
                  <div data-translate>
                    Joint workshop for farmers and elderly individuals to
                    promote collaboration and enhance cyber security awareness.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Outreach Campaign Launch
                  </div>
                  <div data-translate>
                    Launch of a social media campaign targeting all vulnerable
                    groups with Act Now, Stay Secure materials.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Community Leader Consultation
                  </div>
                  <div data-translate>
                    Meeting with local leaders to gather insights and feedback
                    for improving outreach strategies.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    Workshop 6
                  </div>
                  <div data-translate>
                    Advanced training session for migrants and individuals with
                    disabilities focusing on fraud prevention and identity
                    protection.
                  </div>
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
                  <time className="font-mono italic">TBA</time>
                  <div className="md:text-lg text-base font-black">
                    End-of-Year Event
                  </div>
                  <div data-translate>
                    Community celebration highlighting project achievements,
                    featuring testimonials and success stories.
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        {items
          .filter((item) => item.title === filterInclude)
          .map((item) => (
            <div key={item.id}>
              <h1
                data-translate
                className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white"
              >
                Event funder
              </h1>
              <div className="card md:w-60 md:h-60 w-40 h-40 shadow-xl flex items-center justify-center md:p-10 p-5 bg-gray-200 mt-10">
                {" "}
                <Link href={item.funderHref} target="_blank">
                  <Image
                    src={item.funderImgSrc}
                    alt={item.FunderImgAlt}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          ))}
        <div className="divider pt-10"></div>
      </Container>
      <Footer />
    </div>
  );
}

export default CyberSafeCommunitiesInitiative;
