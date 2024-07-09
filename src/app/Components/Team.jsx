import { Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

function Team() {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-6 py-20">
        <div>
          <div className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16">
            our team
          </div>
        </div>
        <div>
          <Image
            src="/assets/president.jpg"
            alt="President Image"
            width={1000}
            height={1000}
            className="pb-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5">
            <h1 className="uppercase text-sm font-semibold tracking-widest">
              mahmoud amin
            </h1>
            <h2 className="uppercase text-sm font-normal tracking-widest">
              president
            </h2>
          </div>
        </div>
        <div>
          <Image
            src="/assets/vice-president.jpg"
            alt="Vice President Image"
            width={1000}
            height={1000}
            className="py-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5">
            <h1 className="uppercase text-sm font-semibold tracking-widest">
              saad khan
            </h1>
            <h2 className="uppercase text-sm font-normal tracking-widest">
              vice president
            </h2>
          </div>
        </div>
        <div>
          <Image
            src="/assets/treasurer.jpg"
            alt="Treasurer Image"
            width={1000}
            height={1000}
            className="pb-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5">
            <h1 className="uppercase text-sm font-semibold tracking-widest">
              awais
            </h1>
            <h2 className="uppercase text-sm font-normal tracking-widest">
              treasurer
            </h2>
          </div>
        </div>
        <div>
          <Image
            src="/assets/secretary.jpg"
            alt="Secretary Image"
            width={1000}
            height={1000}
            className="py-10"
          />
          <div className="border border-gray-500 text-gray-800 text-center p-5">
            <h1 className="uppercase text-sm font-semibold tracking-widest">
              Samsuddin Ahmed
            </h1>
            <h2 className="uppercase text-sm font-normal tracking-widest">
              secretary
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Team;
