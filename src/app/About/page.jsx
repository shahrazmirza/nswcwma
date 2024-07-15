import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import ScrollToTop from "../Components/ScrollToTop";

function About() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />

      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col">
        <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            our mission
          </h1>
          <h2 className="md:font-thin font-medium md:text-lg text-sm tracking-wide text-gray-400 py-5">
            The NSW Central West Muslim Association (NSWCWMA) is dedicated to
            community wellbeing and benevolent services. While religion/faith is
            ancillary in value, our primary purpose is to work collaboratively
            with the community to develop a safe, healthy environment for
            everyone. We are also committed to alleviating poverty, assisting
            the sick within our community, responding to natural calamities, and
            offering help when required.
          </h2>
          {/* <div className="flex text-white text-sm font-semibold gap-1">
            <Link
              href="/About"
              className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
            >
              read more
            </Link>
          </div> */}
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
            our vision
          </h1>
          <h2 className="md:font-thin font-medium md:text-lg text-sm tracking-wide text-gray-400 py-5">
            At NSW Central West Muslim Association (NSWCWMA), we aim to foster a
            compassionate, supportive community in Dubbo and Central West NSW.
            We focus on alleviating poverty, assisting the sick, and responding
            to calamities. Our commitment includes providing social and
            educational facilities and supporting needy families, emphasizing
            universal benevolence and community wellbeing.
          </h2>
          {/* <div className="flex text-white text-sm font-semibold gap-1">
            <Link
              href="/About"
              className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
            >
              read more
            </Link>
          </div> */}
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 bg-gray-800 justify-center items-center flex flex-col">
        <div className="md:pr-20 md:w-[580px] mx-5 my-10 border-l-[1px] border-gray-300 md:px-10 pr-5 pl-10 justify-self-center">
          <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white">
            our short story
          </h1>
          <h2 className="md:font-thin font-medium md:text-lg text-sm tracking-wide text-gray-400 py-5">
            The NSW Central West Muslim Association (NSWCWMA), established on 12
            January 2017, is dedicated to the wellbeing of the Dubbo and Central
            West NSW community. Known for our commitment to benevolent services,
            we support needy families, promote healthcare initiatives, mental
            health awareness, and preventive measures, and enhance community
            knowledge through comprehensive programs. We empower marginalised
            communities by fostering respect and collaboration and provide aid
            during natural calamities. By promoting dialogue, understanding, and
            empathy, we create an inclusive environment and fight against
            discrimination. NSWCWMA is a lifeline, offering hope and ensuring
            every community member can thrive in a safe and nurturing
            environment.
          </h2>
          {/* <div className="flex text-white text-sm font-semibold gap-1">
            <Link
              href="/About"
              className="uppercase outline-white outline outline-1 py-2 px-4 hover:text-red-500 hover:outline-red-500"
            >
              read more
            </Link>
          </div> */}
        </div>
        <Image
          src="/assets/images/about1.jpg"
          alt="Hero Image"
          width="2000"
          height="1000"
          className="relative aspect-ratio md:h-full object-cover min-h-60"
        />
      </div>

      <Footer />
    </div>
  );
}

export default About;
