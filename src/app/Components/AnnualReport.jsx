import { Container } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const AnnualReport = () => {
  return (
    <Container>
      <div className="py-10">
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase text-3xl font-medium tracking-widest text-gray-800 py-5 mb-5">
          annual reports
        </h1>
        <div className="pl-10 py-2 flex justify-between">
          <h1 className="p-2 mr-3 border-gray-400 text-medium font-semibold">
            2023 Annual Report
          </h1>
          <Link
            href="/assets/reports/Financial-Report-FY-2023.pdf"
            target="_blank"
          >
            <button className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex justify-center items-center text-gray-400 text-sm font-semibold gap-1">
              download
            </button>
          </Link>
        </div>
        <div className="pl-10 py-2 flex justify-between">
          <h1 className="p-2 mr-3 border-gray-400 text-medium font-semibold">
            2022 Annual Report
          </h1>
          <Link
            href="/assets/reports/Financial-Report-FY-2022.pdf"
            target="_blank"
          >
            <button className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex justify-center items-center text-gray-400 text-sm font-semibold gap-1">
              download
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AnnualReport;
