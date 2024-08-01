"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";
import axios from "axios";

const PrayerTime = () => {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });

  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  const [prayerData, setPrayerData] = useState(null);
  const [error, setError] = useState(null);

  const getPrayerData = async () => {
    try {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const year = today.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity/${formattedDate}`,
        {
          params: {
            city: "Dubbo",
            country: "Australia",
            method: "3",
          },
        }
      );

      setPrayerData(response.data);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching the data.");
      setPrayerData(null);
      console.error(error);
    }
  };

  useEffect(() => {
    getPrayerData();
  }, []);

  return (
    <motion.div
      ref={ref1}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={slide1}
      transition={{ duration: 0.9, delay: 0 }}
      className="bg-gray-700"
    >
      <Container>
        {prayerData ? (
          <div className="border rounded-3xl px-10 py-7 my-10 bg-gray-100">
            <div className="flex md:flex-row flex-col justify-center md:justify-between pb-10 gap-3">
              <h1 className="flex items-center uppercase text-3xl font-semibold tracking-widest text-gray-800 border-l border-gray-500 pl-5 h-16">
                Prayer Times
              </h1>
              <div className="pl-8 text-center">
                <p className="md:text-base text-sm font-normal">
                  {prayerData.data.date.gregorian.day}{" "}
                  {prayerData.data.date.gregorian.month.en},{" "}
                  {prayerData.data.date.gregorian.year}
                </p>
                <h2 className="md:text-base text-sm font-medium">
                  {prayerData.data.date.hijri.day}{" "}
                  {prayerData.data.date.hijri.month.en},{" "}
                  {prayerData.data.date.hijri.year}
                </h2>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-center">
              <div className="rounded-2xl bg-gray-300 px-10 md:py-7 py-5 flex flex-col justify-center items-center">
                <h1 className="md:text-lg text-base font-medium">Fajr</h1>
                <h2 className="md:text-lg text-base font-normal">
                  {prayerData.data.timings.Fajr}
                </h2>
              </div>
              <div className="rounded-2xl bg-gray-300 px-10 md:py-7 py-5 flex flex-col justify-center items-center">
                <h1 className="md:text-lg text-base font-medium">Dhuhr</h1>
                <h2 className="md:text-lg text-base font-normal">
                  {prayerData.data.timings.Dhuhr}
                </h2>
              </div>
              <div className="rounded-2xl bg-gray-300 px-10 md:py-7 py-5 flex flex-col justify-center items-center">
                <h1 className="md:text-lg text-base font-medium">Asr</h1>
                <h2 className="md:text-lg text-base font-normal">
                  {prayerData.data.timings.Asr}
                </h2>
              </div>
              <div className="rounded-2xl bg-gray-300 px-10 md:py-7 py-5 flex flex-col justify-center items-center">
                <h1 className="md:text-lg text-base font-medium">Maghrib</h1>
                <h2 className="md:text-lg text-base font-normal">
                  {prayerData.data.timings.Maghrib}
                </h2>
              </div>
              <div className="rounded-2xl bg-gray-300 px-10 md:py-7 py-5 flex flex-col justify-center items-center">
                <h1 className="md:text-lg text-base font-medium">Isha</h1>
                <h2 className="md:text-lg text-base font-normal">
                  {prayerData.data.timings.Isha}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-500">{error}</p>
        )}
      </Container>
    </motion.div>
  );
};

export default PrayerTime;
