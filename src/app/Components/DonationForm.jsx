"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@radix-ui/themes";
import data from "../Data/DonationType.json";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { toast } from "react-toastify";
import axios from "axios";

function DonationForm() {
  const [donationTypes, setDonationTypes] = useState([]);
  const [selectedDonationType, setSelectedDonationType] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmountInputValue, setCustomAmountInputValue] = useState("");

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

      if (amount === 0 && customAmountInputValue.trim() !== "") {
        amount = parseFloat(customAmountInputValue.trim());
      }

      if (amount === 0) {
        return toast.error("Please select or enter a donation amount");
      }

      const response = await axios.post("/api/checkout_sessions", {
        amount: amount,
        donationType: selectedDonationType,
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
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5">
          donation
        </h1>
        <div className="pl-10 md:pr-0 pr-5">
          <select
            onChange={(e) => setSelectedDonationType(e.target.value)}
            className="select w-full max-w-xs p-2 my-4 text-sm font-medium bg-white text-gray-500 border-none outline outline-1 outline-gray-300 hover:outline-red-500 "
          >
            <option disabled selected>
              Choose Donation Type
            </option>
            {donationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <div className="pb-5 flex flex-col">
            {filteredItems.length > 0 && (
              <div className="flex md:flex-row flex-col items-start md:gap-5 gap-3">
                {filteredItems.map((item, index) => (
                  <input
                    key={index}
                    className="btn bg-white hover:bg-white border-none outline outline-1 outline-gray-300 hover:outline-red-500 font-medium text-gray-500"
                    type="radio"
                 name="options"
                   aria-label={`$${item.value.toLocaleString()}`}
                    value={item.value}
                    onChange={() => setSelectedAmount(parseFloat(item.value))}
                  />
                ))}
                <label className="input flex items-center bg-white text-gray-800 border-none outline outline-1 outline-gray-300 hover:outline-red-500 text-sm font-medium text-gray-500">
                  <input
                    type="text"
                    label=""
                    placeholder="$ Custom Amount"
                    defaultValue=""
                    className="w-44"
                    onChange={(e) => setCustomAmountInputValue(e.target.value)}
                  />
                </label>
              </div>
            )}
          </div>

          {/* <RadioGroup>
            <ul className="pb-5 md:py-5 flex flex-col">
              {filteredItems.length > 0 && (
                <div className="flex md:flex-row flex-col items-start md:gap-5 gap-3">
                  {filteredItems.map((item, index) => (
                    <Radio
                      key={index}
                      value={item.value}
                      onChange={() => setSelectedAmount(parseFloat(item.value))}
                      size="md"
                      className=""
                    >
                      ${item.value}
                    </Radio>
                  ))}
                  <Input
                    isClearable
                    type="text"
                    label=""
                    variant="bordered"
                    placeholder="$ Custom Amount"
                    defaultValue=""
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs w-44"
                    size="xs"
                    onChange={(e) => setCustomAmountInputValue(e.target.value)}
                  />
                </div>
              )}
            </ul>
          </RadioGroup> */}
          <a
            role="button"
            className="btn bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-none border-none px-5 py-2"
            onClick={handleCheckout}
          >
            DONATE
          </a>
        </div>
      </div>
    </Container>
  );
}

export default DonationForm;
