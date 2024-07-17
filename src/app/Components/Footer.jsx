import { Container } from "@radix-ui/themes";
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
            <div className="border-l-[1px] border-gray-300 pl-10 pr-20">
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
      <div className="bg-white text-center">
        <Container>
          <h2 className="uppercase py-10 text-xs font-bold tracking-widest flex gap-1 justify-center items-center">
            NSW Central West Muslim Association <MdCopyright /> 2024
          </h2>
        </Container>
      </div>
    </>
  );
}

export default Footer;
