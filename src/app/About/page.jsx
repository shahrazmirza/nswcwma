import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import Image from "next/image";
import ScrollToTop from "../Components/ScrollToTop";

function About() {
  return (
    <div>
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
        <div className="justify-self-center">
          <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
            <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
              our mission
            </h1>

            <h2 className="font-thin tracking-wide text-gray-300 py-5">
              The NSW Central West Muslim Association (NSWCWMA) is dedicated to
              community wellbeing and benevolent services. While religion/faith
              is ancillary in value, our primary purpose is to work
              collaboratively with the community to develop a safe, healthy
              environment for everyone. We are also committed to alleviating
              poverty, assisting the sick within our community, responding to
              natural calamities, and offering help when required.
            </h2>
          </div>
        </div>
        <Image
          src="/assets/images/about1.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
        <Image
          src="/assets/images/about2.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=""
        />
        <div className="justify-self-center">
          <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
            <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
              our vision
            </h1>

            <h2 className="font-thin tracking-wide text-gray-300 py-5">
              At NSW Central West Muslim Association (NSWCWMA), we aim to foster
              a compassionate, supportive community in Dubbo and Central West
              NSW. We focus on alleviating poverty, assisting the sick, and
              responding to calamities. Our commitment includes providing social
              and educational facilities and supporting needy families,
              emphasizing universal benevolence and community wellbeing.
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gray-800 justify-center items-center">
        <div className="justify-self-center">
          <div className="pr-20 w-[600px] border-l-[1px] border-gray-300 pl-10">
            <h1 className="uppercase text-3xl font-medium tracking-widest text-white">
              our short story
            </h1>

            <h2 className="font-thin tracking-wide text-gray-300 py-5">
              The NSW Central West Muslim Association (NSWCWMA), established on
              12 January 2017, is dedicated to the wellbeing of the Dubbo and
              Central West NSW community. Known for our commitment to benevolent
              services, we support needy families, promote healthcare
              initiatives, mental health awareness, and preventive measures, and
              enhance community knowledge through comprehensive programs. We
              empower marginalised communities by fostering respect and
              collaboration and provide aid during natural calamities. By
              promoting dialogue, understanding, and empathy, we create an
              inclusive environment and fight against discrimination. NSWCWMA is
              a lifeline, offering hope and ensuring every community member can
              thrive in a safe and nurturing environment.
            </h2>
          </div>
        </div>
        <Image
          src="/assets/images/about3.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
