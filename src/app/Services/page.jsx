import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import ScrollToTop from "../Components/ScrollToTop";
import Image from "next/image";

function Services() {
  return (
    <div>
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Support for the homeless
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                The NSW Central West Muslim Association (NSWCWMA) primarily
                focuses on providing assistance to homeless people in the NSW
                Central West Region, including migrants and individuals from
                Culturally and Linguistically Diverse (CALD) backgrounds. Their
                assistance includes providing residence at NSWCWMA
                accommodation, offering financial support to homeless
                individuals, and offering temporary accommodation for people
                traveling from surrounding suburbs based on eligibility criteria
                and circumstances.
              </h2>
            </div>
          </div>
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
        </div>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Free Food on Fridays
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                Every Friday afternoon, NSWCWMA offers free lunch to the
                community. This initiative aims to support those in need and
                foster a sense of community. By providing nutritious meals,
                NSWCWMA helps alleviate food insecurity and brings people
                together, encouraging social interaction and mutual support
                among community members.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Disability Support
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                NSWCWMA provides various forms of assistance to individuals with
                disabilities to help them excel in life. This includes the
                provision of supportive equipment tailored to individual needs
                and the facilitation of involvement in paid work opportunities.
                These services aim to empower disabled individuals, promoting
                independence and enhancing their quality of life.
              </h2>
            </div>
          </div>
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
        </div>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Driving Classes
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                Affordable driving classes are available for members of the CALD
                community and migrants. These classes aim to empower individuals
                with the skills needed for independence and mobility. By
                offering practical driving instruction, NSWCWMA helps
                participants gain confidence and access to greater opportunities
                for employment and social engagement.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Poverty Alleviation
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                NSWCWMA is committed to fighting poverty. They offer support to
                individuals struggling with poverty in their daily lives,
                helping them to overcome financial hardships and improve their
                quality of life. Through various programs and direct assistance,
                NSWCWMA aims to provide a safety net for those in need,
                fostering resilience and self-sufficiency.
              </h2>
            </div>
          </div>
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
        </div>
        <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
          <Image
            src="/assets/about3.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className=""
          />
          <div className="justify-self-center">
            <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
                Support for the Sick
              </h1>

              <h2 className="font-thin tracking-wide text-gray-300 py-5">
                NSWCWMA supports community members who are suffering from
                illness and fighting poverty. This assistance can be financial
                or through help with daily life activities, ensuring that sick
                individuals receive the necessary care and support. By providing
                compassionate aid, NSWCWMA helps alleviate the burdens of
                illness, allowing individuals to focus on recovery and
                well-being.
              </h2>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default Services;
