"use client";
import React, { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";

function ZakatCalculator() {
  const [selectedNisab, setSelectedNisab] = useState("");
  const [assetsValue, setAssetsValue] = useState("");
  const [liabilitiesValue, setLiabilitiesValue] = useState("");
  const [zakatOwed, setZakatOwed] = useState(0);

  const nisabThresholds = {
    Silver: 655.47,
    Gold: 8223.64,
  };

  useEffect(() => {
    const assets = parseFloat(assetsValue) || 0;
    const liabilities = parseFloat(liabilitiesValue) || 0;
    const netWealth = assets - liabilities;

    if (selectedNisab && netWealth >= nisabThresholds[selectedNisab]) {
      setZakatOwed((netWealth * 2.5) / 100);
    } else {
      setZakatOwed(0);
    }
  }, [selectedNisab, assetsValue, liabilitiesValue]);

  const showAssetsLiabilities =
    selectedNisab === "Silver" || selectedNisab === "Gold";
  const showZakatOwed = zakatOwed > 0;

  const handlePayNow = async () => {
    if (zakatOwed <= 0) {
      toast.error("Zakat amount must be greater than zero.");
      return;
    }

    try {
      const formattedDonationType = `Zakat (${selectedNisab})`;

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-7 md:text-start text-center border-solid border-b rounded-xl shadow-md p-10">
      <div>
        <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide pb-4 md:py-4">
          Select Nisab Type
        </h1>
        <div className="flex flex-col md:gap-5 gap-3">
          {["Silver", "Gold"].map((type) => (
            <label
              key={type}
              className={`btn md:btn-lg btn-md font-medium transition-all duration-300 cursor-pointer
                ${
                  selectedNisab === type
                    ? "border-red-500 bg-red-500 text-white hover:border-red-500 hover:bg-red-500 hover:text-white"
                    : "bg-white border-red-500 text-gray-500 hover:bg-white hover:border-red-500 hover:text-red-500"
                }`}
            >
              <input
                type="radio"
                name="nisabType"
                value={type}
                checked={selectedNisab === type}
                onChange={(e) => setSelectedNisab(e.target.value)}
                className="hidden"
              />
              {type} (
              {type === "Silver"
                ? "595g ≅ $655.47AUD"
                : "87.48g ≅ $8,223.64AUD (21 Karat)"}
              )
            </label>
          ))}
        </div>

        {showAssetsLiabilities && (
          <div>
            <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide py-4">
              Assets
            </h1>
            <h1 className="md:text-base font-bold text-sm text-gray-600 pl-3">
              Include gold, silver, cash, savings, business assets etc.
            </h1>
            <label
              className={`input input-bordered flex items-center mt-3 gap-2 transition-all duration-300
                ${
                  assetsValue
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-white border-red-500 text-gray-800 hover:border-red-500 hover:text-red-500"
                }`}
            >
              <FaDollarSign />
              <input
                type="number"
                className="grow bg-transparent outline-none"
                placeholder="0"
                value={assetsValue}
                onChange={(e) => setAssetsValue(e.target.value)}
              />
            </label>

            <h1 className="uppercase md:text-2xl text-xl md:font-medium font-semibold md:tracking-wide py-4">
              Liabilities
            </h1>
            <h1 className="md:text-base font-bold text-sm text-gray-600 pl-3">
              Include money you owe, other outgoings due.
            </h1>
            <label
              className={`input input-bordered flex items-center mt-3 gap-2 transition-all duration-300
                ${
                  liabilitiesValue
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-white border-red-500 text-gray-800 hover:border-red-500 hover:text-red-500"
                }`}
            >
              <FaDollarSign />
              <input
                type="number"
                className="grow bg-transparent outline-none"
                placeholder="0"
                value={liabilitiesValue}
                onChange={(e) => setLiabilitiesValue(e.target.value)}
              />
            </label>
          </div>
        )}
      </div>

      {showZakatOwed && (
        <div className="flex flex-col gap-5 justify-between items-center border-solid border rounded-b-lg shadow-md pt-5">
          <div className="flex flex-col items-center gap-5 md:gap-10 py-5 md:py-32">
            <h1 className="md:text-2xl font-bold text-xl border border-solid rounded-xl shadow-md w-fit bg-amber-500 py-3 px-10">
              ${zakatOwed.toFixed(0)} AUD
            </h1>
            <h2 className="md:text-xl font-medium text-lg">Zakat Owed</h2>
          </div>
          <Button
            onClick={handlePayNow}
            className="uppercase px-5 text-lg font-medium leading-none border-red-500 border-solid border rounded-t text-white h-16 bg-red-500 flex items-center justify-center w-full"
          >
            Pay Now
          </Button>
        </div>
      )}
    </div>
  );
}

export default ZakatCalculator;
