import { Container } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const AnnualReport = () => {
  return (
    <Container>
      <div className="py-10 md:pl-0 pl-5">
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5">
          annual reports
        </h1>
        <div className="">
          <div className="pl-8 pr-5 py-2 flex justify-between items-center">
            <h1 className="p-2 mr-3 border-gray-400 md:text-medium text-sm font-semibold">
              2023 Annual Report
            </h1>
            <a
              role="button"
              className="btn uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
              href="/assets/reports/Financial-Report-FY-2023.pdf"
              target="_blank"
            >
              download
            </a>
          </div>
          <div className="pl-8 pr-5 py-2 flex justify-between items-center">
            <h1 className="p-2 mr-3 border-gray-400 md:text-medium text-sm font-semibold">
              2022 Annual Report
            </h1>
            <a
              role="button"
              className="btn uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
              href="/assets/reports/Financial-Report-FY-2022.pdf"
              target="_blank"
            >
              download
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AnnualReport;
