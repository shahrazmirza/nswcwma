import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col">
        <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            welcome to our site!
          </h1>
          <h2 className="md:font-thin font-medium md:text-medium text-sm tracking-wide text-gray-400 py-5">
            We focus on community wellbeing, poverty alleviation, assisting the
            sick, and disaster response, aiming to create a safe, healthy
            environment for all.
          </h2>
          <div className="flex text-white text-sm font-semibold gap-1">
            <Link
              href="/About"
              className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
            >
              read more
            </Link>
          </div>
        </div>
        <Image
          src="/assets/images/about1.jpg"
          alt="Hero Image"
          width="2000"
          height="1000"
          className="relative aspect-ratio md:h-full object-cover min-h-60"
        />
      </div>
      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col-reverse">
        <Image
          src="/assets/images/about2.jpg"
          alt="Hero Image"
          width="2000"
          height="1000"
          className="relative aspect-ratio md:h-full object-cover min-h-60"
        />
        <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            shortly about us
          </h1>
          <h2 className="md:font-thin font-medium md:text-medium text-sm tracking-wide text-gray-400 py-5">
            Our Vision is to foster a compassionate, supportive community in
            Dubbo and Central West NSW, addressing poverty, aiding the sick,
            responding to calamities, and promoting wellbeing through social and
            educational activities.
          </h2>
          <div className="flex text-white text-sm font-semibold gap-1">
            <Link
              href="/About"
              className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
