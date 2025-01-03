"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import data from "../Data/DonationType.json";
import { toast } from "react-toastify";
import axios from "axios";
import { motion, useAnimation, useInView } from "framer-motion";

function DonationForm() {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });

  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  const [donationTypes, setDonationTypes] = useState([]);
  const [selectedDonationType, setSelectedDonationType] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmountInputValue, setCustomAmountInputValue] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("");
  const [isDonationTypeSelected, setIsDonationTypeSelected] = useState(false);

  useEffect(() => {
    const uniqueTypes = [...new Set(data.map((item) => item.type))];
    setDonationTypes(uniqueTypes);
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => item.type === selectedDonationType);
    setFilteredItems(filtered);
  }, [selectedDonationType]);

  const handleCheckout = async () => {
    try {
      let amount = selectedAmount;

      if (selectedDonationType === "") {
        return toast.error("Please choose the donation type");
      }

      if (donationFrequency === "") {
        return toast.error("Please select One-Time or Monthly");
      }

      if (amount === 0 && customAmountInputValue.trim() !== "") {
        amount = parseFloat(customAmountInputValue.trim());
      }

      if (amount !== 0 && customAmountInputValue.trim() !== "") {
        amount = parseFloat(customAmountInputValue.trim());
      }

      if (amount === 0) {
        return toast.error("Please select or enter a donation amount");
      }

      const response = await axios.post("/api/checkout_sessions", {
        amount: amount,
        donationType: selectedDonationType,
        donationFrequency: donationFrequency, // Include donationFrequency
      });
      console.log(response);
      window.location = response.data.sessionURL;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error(error.message);
    }
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
          donation
        </motion.h1>
        <div className="flex flex-col pl-10 md:pr-0 pr-5 md:gap-8 gap-5">
          <motion.select
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 0.5 }}
            onChange={(e) => {
              setSelectedDonationType(e.target.value);
              setIsDonationTypeSelected(true);
            }}
            className="select select-sm w-full max-w-xs p-2 text-sm font-medium bg-white text-gray-500 border-none outline outline-1 outline-gray-300 hover:outline-red-500 "
          >
            <option data-translate disabled selected>
              Choose Donation Type
            </option>
            {donationTypes.map((type) => (
              <option data-translate key={type} value={type}>
                {type}
              </option>
            ))}
          </motion.select>

          {isDonationTypeSelected && (
            <div className="flex md:gap-5 gap-3">
              <input
                className="btn btn-sm bg-white hover:bg-white border-gray-300 hover:border-red-500 font-medium text-gray-500 hover:text-red-500"
                type="radio"
                name="options"
                aria-label="One-Time"
                value="One-Time"
                onChange={(e) => setDonationFrequency(e.target.value)}
              />
              <input
                className="btn btn-sm bg-white hover:bg-white border-gray-300 hover:border-red-500 font-medium text-gray-500 hover:text-red-500"
                type="radio"
                name="options"
                aria-label="Monthly"
                value="Recurring"
                onChange={(e) => setDonationFrequency(e.target.value)}
              />
            </div>
          )}

          {donationFrequency && (
            <div className="flex flex-col">
              {filteredItems.length > 0 && (
                <div className="flex md:flex-row flex-col items-start md:gap-5 gap-3">
                  {filteredItems.map((item, index) => (
                    <input
                      key={index}
                      className="btn btn-sm bg-white hover:bg-white border-gray-300 hover:border-red-500 font-medium text-gray-500 hover:text-red-500"
                      type="radio"
                      name="amountOptions"
                      aria-label={`$${item.value.toLocaleString()}`}
                      value={item.value}
                      onChange={() => setSelectedAmount(parseFloat(item.value))}
                    />
                  ))}
                  <label className="input input-sm flex items-center bg-white text-gray-800 border-none outline outline-1 outline-gray-300 hover:outline-red-500 text-sm font-medium text-gray-500">
                    <input
                      type="text"
                      placeholder="$ Custom Amount"
                      className="w-44"
                      onChange={(e) =>
                        setCustomAmountInputValue(e.target.value)
                      }
                    />
                  </label>
                </div>
              )}
            </div>
          )}

          <motion.a
            ref={ref1}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slide1}
            transition={{ duration: 0.9, delay: 1.0 }}
            role="button"
            className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5 py-2 w-fit"
            onClick={handleCheckout}
            data-translate
          >
            DONATE
          </motion.a>
        </div>
      </div>
    </Container>
  );
}

export default DonationForm;
