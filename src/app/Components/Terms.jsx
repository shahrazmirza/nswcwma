"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";

const Terms = () => {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });
  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  return (
    <Container>
      <div className="py-10 md:pl-0 pl-5">
        <motion.h1
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5 pr-5"
        >
          Terms and Conditions for NSWCWMA Services
        </motion.h1>
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col p-2 mr-3 md:text-medium text-sm gap-5 pl-8 pr-5 py-2"
        >
          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">1. General Terms</h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                The NSW Central West Muslims Association&nbsp;(NSWCWMA) offers
                various services to support the community, including assistance
                for the homeless, free food on Fridays, disability support,
                driving classes, poverty alleviation, and support for the sick.
              </p>

              <p>
                By applying for any service offered by NSWCWMA, applicants agree
                to abide by these terms and conditions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              2. Eligibility and Application Process
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                All services are subject to eligibility criteria. NSWCWMA
                reserves the right to request documentation or additional
                information to determine eligibility.
              </p>
              <p>
                The application process may require applicants to provide
                personal information, which will be used solely for the purpose
                of assessing eligibility and providing the requested services.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              3. Service Provision
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                Support for the homeless may include residence at NSWCWMA
                accommodation, financial assistance, and temporary accommodation
                for travelers from surrounding suburbs. The availability of
                these services depends on eligibility criteria and the specific
                circumstances of the applicant.
              </p>
              <p>
                Free food is offered on Fridays to deserving individuals, as
                determined by NSWCWMA.
              </p>
              <p>
                Disability support includes the provision of supportive
                equipment and facilitation of paid work opportunities tailored
                to individual needs.
              </p>
              <p>
                Driving classes, when available, will be offered at affordable
                rates for members of the CALD community and migrants.
              </p>
              <p>
                Poverty alleviation and support for the sick may include
                financial assistance and help with daily life activities,
                depending on the specific needs of the individual.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              4. Right to Refuse Service
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                NSWCWMA reserves the absolute right to reject any application
                for services at its sole discretion, without providing any
                reason or explanation. This right applies to all services
                offered by the organisation.
              </p>
              <p>
                NSWCWMA&apos;s decision to reject an application is final and
                not subject to appeal.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              5. Termination of Services
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                NSWCWMA reserves the right to terminate or withdraw any service
                at any time, without prior notice. This may occur due to changes
                in funding, organisational capacity, or other circumstances
                beyond NSWCWMA&apos;s control.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              6. Confidentiality and Privacy
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                NSWCWMA is committed to protecting the privacy of applicants.
                Personal information collected during the application process
                will be handled in accordance with relevant privacy laws and
                used only for the purposes of providing the requested services.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              7. Limitation of Liability
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                NSWCWMA will make every effort to provide services as described;
                however, the organisation shall not be liable for any loss,
                damage, or inconvenience caused by the rejection of an
                application, termination of services, or other factors beyond
                its control.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              8. Changes to Terms and Conditions
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                NSWCWMA reserves the right to amend these terms and conditions
                at any time. Applicants are encouraged to review these terms
                regularly to stay informed of any changes.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" border-gray-400 font-semibold">
              9. Acceptance of Terms
            </h1>
            <div className="flex flex-col gap-3 pl-5">
              <p>
                By applying for and/or accepting any service from NSWCWMA,
                applicants acknowledge that they have read, understood, and
                agreed to these terms and conditions.
              </p>
            </div>
          </div>

          <h1 className=" border-gray-400">
            These terms and conditions are intended to ensure the fair and
            effective provision of services by NSWCWMA, while maintaining the
            organisation&apos;s ability to serve the community within its
            capacity and resources.
          </h1>
        </motion.div>
      </div>
    </Container>
  );
};

export default Terms;
