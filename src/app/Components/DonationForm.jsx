"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@radix-ui/themes";
import data from "../Data/DonationType.json";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";

function DonationForm() {
  const [donationTypes, setDonationTypes] = useState([]);
  const [selectedDonationType, setSelectedDonationType] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [customAmount, setCustomAmount] = useState("");

  const handleChange = (event) => {
    const allowedChars = /^[0-9]+$/;
    if (event.target.value.match(allowedChars)) {
      setCustomAmount(event.target.value);
    }
  };

  useEffect(() => {
    const uniqueTypes = [...new Set(data.map((item) => item.type))];
    setDonationTypes(uniqueTypes);
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => item.type === selectedDonationType);
    setFilteredItems(filtered);
  }, [selectedDonationType]);

  return (
    <Container>
      <div className="py-10 md:pl-0 pl-5">
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5">
          donation
        </h1>
        <div className="pl-10 md:pr-0 pr-5">
          <select
            className="w-full p-2 my-4 text-sm font-medium text-gray-500 border border-gray-500 hover:border-sky-700 rounded-md bg-white"
            value={selectedDonationType}
            onChange={(e) => setSelectedDonationType(e.target.value)}
          >
            <option value="" disabled>
              Choose Donation Type
            </option>
            {donationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <RadioGroup>
            <ul className="pb-5">
              {filteredItems.length > 0 && (
                <div className="flex items-center gap-5">
                  {filteredItems.map((item, index) => (
                    <Radio
                      key={index}
                      value={item.value}
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
                  />
                </div>
              )}
            </ul>
          </RadioGroup>
          <Link href="/">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 text-white text-sm md:font-medium font-semibold transition delay-100 w-32">
              DONATE
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default DonationForm;
