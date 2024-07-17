import { Container } from "@radix-ui/themes";
import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { TbDisabled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdSick } from "react-icons/md";

function ServicesBanner() {
  return (
    <div className="bg-gray-700 text-gray-300">
      <Container>
        <div className="flex flex-col md:grid grid-cols-3 gap-12 p-10">
          <div className="flex justify-start items-center">
            <FaPeopleRoof className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Support for the Homeless
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Providing accommodation and financial assistance to homeless
                individuals and at-risk travelers.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <FaBowlFood className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Free Food on Fridays
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Offering free lunch every Friday to support community members
                and foster social interaction.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <TbDisabled className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Disability Support
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Assisting disabled individuals with supportive equipment and
                paid work opportunities.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <FaCar className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Driving Classes
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Affordable driving lessons for CALD community members and
                migrants to enhance independence.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <IoIosPeople className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Poverty Alleviation
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Supporting individuals to overcome financial hardships and
                improve their quality of life.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <MdSick className="text-6xl pr-8" />

            <div className="border-l-[1px] border-gray-300 pl-8 flex flex-col gap-5 flex-1">
              <h1 className="uppercase text-medium md:font-medium font-semibold">
                Support for the Sick
              </h1>
              <p className="md:font-thin md:text-xs text-sm">
                Financial and daily life assistance for ill community members
                fighting poverty.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ServicesBanner;
