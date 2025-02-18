"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import { toast } from "react-toastify";
import axios from "axios";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaDollarSign } from "react-icons/fa";

function ZakatPaymentForm() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const slide1 = useAnimation();
  const slide2 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  useEffect(() => {
    if (isInView1) slide1.start("visible");
    if (isInView2) slide2.start("visible");
  }, [isInView1, isInView2]);

  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmountInputValue, setCustomAmountInputValue] = useState("");

  // Dummy values for `filteredItems` (replace with actual API or state values)
  const filteredItems = [
    { value: 50 },
    { value: 100 },
    { value: 250 },
    { value: 500 },
  ];

  // Define zakatOwed using selected amount
  const zakatOwed =
    customAmountInputValue !== ""
      ? parseFloat(customAmountInputValue) || 0
      : selectedAmount;

  const handlePayNow = async () => {
    if (zakatOwed <= 0) {
      toast.error("Please select or enter a donation amount");
      return;
    }

    try {
      const formattedDonationType = `Zakat`;

      const response = await axios.post("/api/checkout_sessions", {
        amount: zakatOwed.toFixed(0),
        donationType: formattedDonationType,
        donationFrequency: "One-Time",
      });

      window.location.href = response.data.sessionURL;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Failed to create checkout session. Please try again.");
    }
  };

  return (
    <Container>
      <div className="py-10 md:pl-5 pl-5">
        {/* Heading Animation */}
        <motion.h1
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9 }}
          className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5"
          data-translate
        >
          Pay Zakat Now
        </motion.h1>

        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide2}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col pl-10 md:pr-0 pr-5 md:gap-8 gap-5"
        >
          <h1 className="md:text-base font-medium text-sm">Select Amount</h1>
          <div className="flex flex-col">
            {filteredItems.length > 0 && (
              <div className="flex md:flex-row flex-col items-start md:gap-5 gap-3">
                {filteredItems.map((item, index) => (
                  <label
                    key={index}
                    className={`btn btn-sm font-medium cursor-pointer transition-all duration-300 ${
                      selectedAmount === item.value
                        ? "border-red-500 bg-red-500 text-white hover:border-red-500 hover:bg-red-500 hover:text-white"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-white hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="amountOptions"
                      value={item.value}
                      checked={selectedAmount === item.value}
                      onChange={() => {
                        setSelectedAmount(item.value);
                        setCustomAmountInputValue("");
                      }}
                      className="hidden"
                    />
                    ${item.value.toLocaleString()}
                  </label>
                ))}

                {/* Custom Amount Input */}
                <label
                  className={`input input-sm input-bordered flex items-center gap-2 transition-all duration-300 ${
                    customAmountInputValue
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white border-red-500 text-gray-500 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <FaDollarSign />
                  <input
                    type="text"
                    className="w-28 bg-transparent outline-none"
                    placeholder="Custom Amount"
                    value={customAmountInputValue}
                    onChange={(e) => {
                      setCustomAmountInputValue(e.target.value);
                      setSelectedAmount(0); // Reset selected amount
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* Pay Button Animation */}
          <a
            role="button"
            className="uppercase btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-7 py-2 w-fit"
            onClick={handlePayNow}
            data-translate
          >
            Pay
          </a>
        </motion.div>
      </div>
    </Container>
  );
}

export default ZakatPaymentForm;
