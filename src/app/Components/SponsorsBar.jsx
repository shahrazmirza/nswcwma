import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SponsorsBar = () => {
  const logos = [
    {
      href: "https://www.dpi.nsw.gov.au/",
      src: "/assets/images/logodepartmentofprimaryindustries.png",
      alt: "Department of Primary Industries Logo",
    },
    {
      href: "https://www.dubbo.nsw.gov.au/",
      src: "/assets/images/logodubboregionalcouncil.png",
      alt: "Dubbo Regional Council Logo",
    },
    {
      href: "https://multicultural.nsw.gov.au/",
      src: "/assets/images/logomulticlturalnsw.png",
      alt: "Multicultural NSW Logo",
    },
    {
      href: "https://www.nsw.gov.au/",
      src: "/assets/images/logonswgovernment.png",
      alt: "NSW Government Logo",
    },
    {
      href: "https://www.education.gov.au/office-youth",
      src: "/assets/images/logoofficeforyouth.png",
      alt: "Office for Youth Logo",
    },
    {
      href: "https://www.sport.nsw.gov.au/",
      src: "/assets/images/logoofficeofsportnsw.jpg",
      alt: "Office of Sport NSW Logo",
    },
    {
      href: "https://www.dpi.nsw.gov.au/fishing/recreational/recreational-fishing-fee/rft-annual-report/recreational-fishing-trusts/recreational-fishing-trusts",
      src: "/assets/images/logorecreationalfishingtrusts.png",
      alt: "Recreational Fishing Trusts Logo",
    },
    {
      href: "https://www.service.nsw.gov.au/",
      src: "/assets/images/logoservicensw.png",
      alt: "Service NSW Logo",
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="my-5 w-screen bg-gray-900 flex flex-col justify-center overflow-hidden">
        <Container>
          <div className="flex items-center uppercase text-xl font-semibold tracking-widest text-white border-l border-white pl-5 py-3 my-5 md:mx-0 mx-5">
            our funders 
          </div>
          <div className="relative w-full overflow-hidden mb-5">
            <div className="flex items-center animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white p-3 rounded-md opacity-90 hover:opacity-100 mx-2"
                  >
                    <Link href={logo.href} target="_blank">
                      <div className="relative h-14 w-[122px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Duplicate the logos for seamless animation */}
              <div className="flex items-center">
                {logos.map((logo, index) => (
                  <div
                    key={index + logos.length}
                    className="flex items-center justify-center bg-white p-3 rounded-md opacity-90 hover:opacity-100 mx-2"
                  >
                    <Link href={logo.href} target="_blank">
                      <div className="relative h-14 w-[122px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SponsorsBar;
