import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src="/assets/hero.jpg"
        alt="Hero Image"
        layout="fixed"
        width={1000}
        height={1000}
        className="w-screen relative"
      />
      <div className="absolute flex flex-col items-center justify-center">
        <div className=" p-10 w-fit text-center text-white">
          <div className="flex flex-col border p-10 gap-5">
            <h1 className="text-4xl font-medium tracking-widest">
              BE USEFUL TO OTHERS
            </h1>
            <h2 className="font-medium tracking-widest">
              WITH NO THOUGHT OF RECOMPENSE
            </h2>
          </div>
        </div>
        <Link href="/Donation">
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 text-white text-sm font-medium transition delay-100">
            DONATE NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
