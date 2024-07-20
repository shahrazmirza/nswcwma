import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src="/assets/images/hero.jpg"
        alt="Hero Image"
        width="2000"
        height="1000"
        className="relative aspect-ratio md:h-full object-cover min-h-72"
      />
      <div className="absolute flex flex-col items-center justify-center">
        <div className="md:p-10 py-8 w-fit text-center text-white">
          <div className="flex flex-col border md:p-10 px-10 py-6 gap-5">
            <h1 className="md:text-4xl text-2xl md:font-medium font-semibold md:tracking-widest">
              BE USEFUL TO OTHERS
            </h1>
            <h2 className="md:font-medium font-semibold text-sm md:tracking-widest">
              WITH NO THOUGHT OF RECOMPENSE
            </h2>
          </div>
        </div>

        <a
          role="button"
          className="btn bg-red-500 hover:bg-red-600 text-white rounded-none"
          href="/Donation"
        >
          DONATE NOW
        </a>
      </div>
    </div>
  );
}

export default Hero;
