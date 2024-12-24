import React from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";

function ServicesStats() {
  return (
    <Container>
      <div className="card p-20 my-10 bg-gray-800 rounded-tr-none rounded-bl-none font-semibold tracking-widest text-white md:block hidden">
        <h1 data-translate className="flex items-center text-3xl pb-10 px-20">
          Together, we’re building stronger communities.
        </h1>
        <div className="flex justify-center items-center text-3xl gap-[40px] px-[150px] p-5">
          <div className="text-7xl rounded-full bg-gray-700 p-2">
            <FaPeopleGroup />
          </div>
          <div className="flex flex-col gap-2">
            <h2 data-translate> 4,000+</h2>
            <p data-translate className="text-base font-normal">
              Members actively engaged in fostering community well-being across
              New South Wales Central West in regional Australia
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-3xl gap-[40px] px-[150px] py-10 pl-[200px] p-5">
          <div className="text-7xl rounded-full bg-gray-700 p-2">
            <FaPeopleArrows />
          </div>
          <div className="flex flex-col gap-2">
            <h2 data-translate> 85%</h2>
            <p data-translate className="text-base font-normal">
              Culturally And Linguistically Diverse people supported through
              tailored programs and initiatives
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-3xl gap-[40px] px-[150px] pl-[250px] p-5">
          <div className="text-7xl rounded-full bg-gray-700 p-2">
            <BiSolidDonateHeart />
          </div>
          <div className="flex flex-col gap-2">
            <h2 data-translate>$1,700,000</h2>
            <p data-translate className="text-base font-normal">
              Funds raised and allocated annually to support community welfare,
              education, and outreach programs
            </p>
          </div>
        </div>
      </div>

      <div className="card m-5 bg-gray-800 rounded-tr-none rounded-bl-none font-semibold tracking-widest text-white md:hidden block">
        <h1 data-translate className="flex items-center text-xl p-5">
          Together, we’re building stronger communities.
        </h1>
        <div className="flex flex-col text-xl gap-5 p-5">
          <div className="flex items-center gap-5">
            <div className="text-3xl rounded-full bg-gray-700 p-2">
              <FaPeopleGroup />
            </div>
            <h2 data-translate> 4,000+</h2>
          </div>
          <p data-translate className="text-xs font-normal">
            Members actively engaged in fostering community well-being across
            NSW Central West in regional Australia
          </p>
        </div>
        <div className="flex flex-col text-xl gap-5 p-5">
          <div className="flex items-center gap-5">
            <div className="text-3xl rounded-full bg-gray-700 p-2">
              <FaPeopleArrows />
            </div>
            <h2 data-translate> 85%</h2>
          </div>
          <p data-translate className="text-xs font-normal">
            CALD people supported through tailored programs and initiatives
          </p>
        </div>
        <div className="flex flex-col text-xl gap-5 p-5">
          <div className="flex items-center gap-5">
            <div className="text-3xl rounded-full bg-gray-700 p-2">
              <BiSolidDonateHeart />
            </div>
            <h2 data-translate> $1,700,000</h2>
          </div>
          <p data-translate className="text-xs font-normal">
            Funds raised and allocated annually to support community welfare,
            education, and outreach programs
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ServicesStats;
