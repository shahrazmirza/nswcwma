"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import AlertOverlay from "./Alert";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

export const MembershipForm = () => {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });

  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [firstConsent, setFirstConsent] = useState(false);
  const [secondConsent, setSecondConsent] = useState(false);
  const [thirdConsent, setThirdConsent] = useState(false);
  const [fourthConsent, setFourthConsent] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (
      !name ||
      !DOB ||
      !email ||
      !phone ||
      !address ||
      !firstConsent ||
      !secondConsent ||
      !thirdConsent ||
      !fourthConsent
    ) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    try {
      const res = await fetch("/api/membershipApplication", {
        method: "POST",
        body: JSON.stringify({
          name,
          DOB,
          email,
          phone,
          address,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setAlertMessage("Thank you! Your submission has been received!");
        setShowAlert(true);
        setName("");
        setDOB("");
        setEmail("");
        setPhone("");
        setAddress("");
        setFirstConsent(false);
        setSecondConsent(false);
        setThirdConsent(false);
        setFourthConsent(false);
      } else {
        setAlertMessage(
          "Oops! Something went wrong while submitting the form."
        );
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Err", err);
      setAlertMessage("An error occurred. Please try again later.");
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

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
          className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5"
          data-translate
        >
          application for membership
        </motion.h1>
        <motion.h2
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="pl-10 pr-5 md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
        >
          <div className="md:pr-0 pr-5">
            {showAlert && (
              <AlertOverlay message={alertMessage} onClose={closeAlert} />
            )}
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <h2
                data-translate
                className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
              >
                Personal Information
              </h2>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />

              <input
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                type="text"
                placeholder="Date of Birth (DD/MM/YYYY)"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                type="text"
                placeholder="Phone"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />

              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />

              <h2
                data-translate
                className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
              >
                Membership Fee
              </h2>

              <h3 className="text-sm font-medium text-gray-600 bg-white flex flex-col gap-5">
                <p data-translate>
                  Upon approval, the following membership fees will apply:
                </p>{" "}
                <div className="pl-5">
                  <p data-translate>
                    • Entrance Fee: $20.00 (One-time payment){" "}
                  </p>
                  <p data-translate>
                    • Annual Subscription Fee: $20.00 (Payable annually)
                  </p>{" "}
                </div>
                Total Initial Payment: $40.00 (Entrance Fee + Annual
                Subscription Fee)
              </h3>

              <label className="flex flex-col items-start pt-10 text-sm font-medium text-gray-800 bg-white gap-5">
                <div className="flex items-start">
                  {" "}
                  <input
                    type="checkbox"
                    checked={firstConsent}
                    onChange={(e) => setFirstConsent(e.target.checked)}
                    required
                  />
                  <p data-translate className="pl-2 -mt-1">
                    I hereby declare that the information provided is true and
                    correct to the best of my knowledge. I understand that
                    providing false information may result in the termination of
                    any assistance provided.
                  </p>
                </div>
                <div className="flex items-start">
                  {" "}
                  <input
                    type="checkbox"
                    checked={secondConsent}
                    onChange={(e) => setSecondConsent(e.target.checked)}
                    required
                  />
                  <p data-translate className="pl-2 -mt-1">
                    I hereby declare that I have read and understood the
                    constitution of the NSW Central West Muslims Association
                    (NSWCWMA), and agree to abide by the rules, regulations, and
                    principles outlined therein. I also acknowledge that the
                    association&apos;s committee reserves the right to approve
                    or refuse this membership application without providing a
                    reason.
                  </p>
                </div>
                <div className="flex items-start">
                  {" "}
                  <input
                    type="checkbox"
                    checked={thirdConsent}
                    onChange={(e) => setThirdConsent(e.target.checked)}
                    required
                  />
                  <p data-translate className="pl-2 -mt-1">
                    I understand that all membership fees are non-refundable,
                    and I agree to pay the required fees as outlined in the next
                    section.
                  </p>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={fourthConsent}
                    onChange={(e) => setFourthConsent(e.target.checked)}
                    required
                  />
                  <div className="md:flex md:gap-1 pl-2 -mt-1">
                    <p data-translate>I have read and agree to the</p>
                    <Link
                      href="/TermsAndConditions"
                      target="_blank"
                      className="underline underline-offset-2 font-semibold"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    <p data-translate>
                      of The NSW Central West Muslims Association.
                    </p>
                  </div>
                </div>
              </label>

              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  className="btn md:btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold rounded-none bg-white border-none"
                />
              </div>
            </form>
          </div>
        </motion.h2>
      </div>
    </Container>
  );
};

export default MembershipForm;
