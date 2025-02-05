"use client";
import React, { useEffect, useRef } from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import ZakatCalculator from "../Components/ZakatCalculator";
import { Container } from "@radix-ui/themes";

const Zakat = () => {
  return (
    <div className="mh-screen">
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <h1 className="flex justify-center items-center relative z-10 md:pb-20 pb-10 font-heading1 md:text-5xl text-3xl font-bold capitalize md:pt-20 pt-10 tracking-wider text-gray-800 leading-loose animate__animated animate__zoomIn animate__delay-1s">
          Zakat Calculator
        </h1>
        <ZakatCalculator />
        <div className="flex flex-col gap-5 px-7 md:text-start text-center border-solid border-b rounded-xl shadow-md p-5">
          <h1 className="md:text-3xl font-bold text-2xl py-4">
            How to Calculate Zakat in 2025?
          </h1>
          <p>
            Zakat is a compulsory form of charity for all eligible Muslims, with
            the amount payable based on nisab values, which may vary each year.
            To simplify the process in 2025, refer to the updated nisab
            thresholds and utilise our Zakat Calculator 2025 to determine your
            exact contribution. Whether you need to calculate Zakat on gold,
            silver, or other assets, our calculator provides a step-by-step
            breakdown. Simply enter your financial details, and the calculator
            will generate the precise amount required to fulfil this essential
            pillar of Islam.
          </p>
          <h1 className="tmd:text-2xl font-bold text-xl pt-4">
            Using Our 2025 Zakat Calculator is Simple
          </h1>
          <p>
            Our Zakat Calculator 2025 makes it easy to determine how much you
            owe. Simply enter all assets that have been in your possession over
            the course of a lunar year, and the tool will calculate your total
            Zakat liability.
          </p>
          <p>
            To make the process clearer, the calculator categorises Zakatable
            assets, including gold, silver, cash, savings, and business assets,
            alongside deductible liabilities, such as outstanding debts and
            financial obligations. This structured approach ensures an accurate
            and straightforward calculation of your Zakat contribution.
          </p>
          <h1 className="tmd:text-2xl font-bold text-xl pt-4">
            The Significance of Zakat and Its Calculation
          </h1>
          <p>
            Zakat is one of the Five Pillars of Islam, a fundamental religious
            duty that holds great importance in Islamic teachings. It is ranked
            second only to prayer (Salah) in the Quran. As a religious
            obligation, Zakat is deeply ingrained in the faith, and its
            calculation is a crucial practice for Muslims worldwide. With
            advancements in technology, fulfilling this obligation has become
            more convenient, thanks to the Zakat Calculator, which simplifies
            the process and ensures compliance with Islamic teachings.
          </p>
          <h1 className="tmd:text-2xl font-bold text-xl pt-4">
            Simplifying Zakat Calculation
          </h1>
          <p>
            Calculating Zakat involves multiple steps to ensure accurate and
            fair distribution. The process begins by evaluating all assets
            subject to Zakat, such as cash, gold, silver, business inventory,
            and other financial holdings.
          </p>
          <p>
            Our Zakat Calculator 2025 streamlines this process by providing a
            user-friendly interface, allowing users to input their asset values,
            and it automatically determines the Zakat amount owed.
          </p>
          <p>
            To calculate Zakat, one must first identify the Nisab value, which
            is the minimum threshold of wealth that makes a Muslim liable for
            Zakat. This is determined based on the current market value of gold
            or silver. If wealth of a person exceeds this threshold, they are
            required to pay 2.5% of their total qualifying assets as Zakat.
          </p>
          <h1 className="tmd:text-2xl font-bold text-xl pt-4">
            Gold Zakat Calculator: Determine Your Zakat for 2025
          </h1>
          <p>
            Gold plays a significant role in Zakat calculations due to its
            intrinsic value and widespread ownership among Muslims. Our Gold
            Zakat Calculator simplifies this process by using real-time gold
            prices to determine the Zakat owed based on the total weight of gold
            you own.
          </p>
          <p>
            Whether you possess gold jewellery, coins, or bars, the Gold Zakat
            Calculator allows you to input the total weight in grams or tolas,
            instantly calculating your Zakat obligation in accordance with the
            current Nisab value for gold.
          </p>
          <p>
            By utilising our Zakat Calculator, you can accurately determine your
            contribution and fulfil your religious duty with ease, ensuring your
            charitable giving aligns with Islamic principles in 2025.
          </p>
          <h1 className="md:text-3xl font-bold text-2xl py-4">
            Why Should You Pay Your Zakat Al-Mal?
          </h1>
          <p>
            Paying Zakat Al-Mal is an essential religious duty, just as
            important as praying Salah or having faith in Allah. It is a divine
            commandment and a fundamental pillar of Islam. When you give your
            Zakat Al-Mal, Allah purifies your wealth, forgives your sins, and
            blesses you with prosperity in this life and the hereafter.
          </p>
          <p>
            Zakat Al-Mal is an act of worship, and on the Day of Judgement, when
            questioned about your Zakat, you will have the honour of answering
            with confidence. Every person who has benefited from your Zakat
            Al-Mal will bear witness to your generosity and testify on your
            behalf.
          </p>
          <p>
            In this world, Zakat Al-Mal does not belong to the giver but is a
            right of those in need. It helps uplift communities, alleviate
            poverty, bring people closer to Allah, and ease the burden of those
            in distress. Zakat has the power to transform lives.
          </p>
          <h1 className="md:text-3xl font-bold text-2xl py-4">
            What is the Difference Between Zakat Al-Fitr and Zakat Al-Mal?
          </h1>
          <p>
            Both Zakat Al-Fitr and Zakat Al-Mal are forms of obligatory charity,
            but they serve different purposes.
          </p>
          <div className="flex md:gap-5 gap-2 md:pl-5">
            <p>●</p>
            <p>
              Zakat Al-Fitr is a small charitable contribution given at the end
              of Ramadan to help those in need celebrate Eid. Traditionally,
              this was given in the form of food, such as dates or rice.
            </p>
          </div>
          <div className="flex md:gap-5 gap-2 md:pl-5">
            <p>●</p>
            <p>
              Zakat Al-Mal is one of the Five Pillars of Islam, an obligation
              for those who meet the Nisab threshold. It has a greater impact
              and contributes to long-term social transformation.
            </p>
          </div>

          <p>
            By understanding and fulfilling both forms of Zakat, Muslims ensure
            their wealth is purified, communities are supported, and they remain
            true to the teachings of Islam.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Zakat;
