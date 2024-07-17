import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-white py-20">
        <Container>
          <div className="flex md:flex-row flex-col gap-10 md:p-0 p-5">
            <div className="border-l-[1px] border-gray-300 pl-10 md:pr-20 pr-5">
              <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white md:pb-10 pb-8">
                GET IN TOUCH
              </h1>
              <div className="md:font-thin font-medium md:text-medium text-sm tracking-wide text-gray-400">
                <h2>71A TAMWORTH STREET, DUBBO NSW 2830</h2>
                <h2>PHONE: +61 478 684 716</h2>
                <h2>EMAIL: INFO@NSWCWMA.ORG.AU</h2>
              </div>
            </div>
            <div className="border-l-[1px] border-gray-300 pl-10">
              <h1 className="uppercase md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white md:pb-10 pb-8">
                FOLLOW US
              </h1>
              <div className="pr-1">
                <Link
                  href="https://www.facebook.com/profile.php?id=100090621588007&sk=about"
                  target="_blank"
                  className="font-bold text-white bg-red-500 hover:bg-red-600 transition delay-100 flex items-center justify-center font-mono h-10 w-10 p-1"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-300 text-center">
        <Container>
          <div className="bg-gray-300 flex md:flex-row flex-col justify-start items-center text-start gap-5 py-5 md:px-10 px-5">
            <Image
              src="/assets/images/aboriginal-flag.png"
              alt="Aboriginal Flag Image"
              width="80"
              height="80"
              className=""
            />
            <p className="text-xs font-medium tracking-widest">
              NSW Central West Muslim Association acknowledges the First Peoples
              of Australia as the traditional custodians of the land on which we
              work. We acknowledge their cultures are living ones, which relate
              to their ongoing connection to all things living and non-living on
              land, sea and sky. We pay our respects to their Elders past and
              present. May the children of today lead us to a brighter tomorrow.
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-white text-center py-10">
        <Container>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-xs font-bold tracking-widest flex gap-1 justify-center items-center">
              NSW Central West Muslim Association <MdCopyright /> 2024
            </h2>
            <h2 className="uppercase text-xs font-bold tracking-widest flex gap-1 justify-center items-center">
              ABN: 76 977 073 780
            </h2>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
