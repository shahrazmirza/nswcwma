import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
        <div className="justify-self-center">
          <div className="pr-20 w-[580px] border-l-[1px] border-gray-300 pl-10">
            <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
              welcome to our site!
            </h1>
            <div className="font-thin tracking-widest text-gray-300 py-5">
              <h2>
                We focus on community wellbeing, poverty alleviation, assisting
                the sick, and disaster response, aiming to create a safe,
                healthy environment for all.
              </h2>
            </div>
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
        <Image
          src="/assets/about1.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
        <Image
          src="/assets/about2.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=""
        />
        <div className="justify-self-center">
          <div className="pr-20 w-[580px] border-l-[1px] border-gray-300 pl-10">
            <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
              shortly about us
            </h1>
            <div className="font-thin tracking-widest text-gray-300 py-5">
              <h2>
                Our Vision is to foster a compassionate, supportive community in
                Dubbo and Central West NSW, addressing poverty, aiding the sick,
                responding to calamities, and promoting wellbeing through social
                and educational activities.
              </h2>
            </div>
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
      </div>
    </>
  );
}

export default About;
