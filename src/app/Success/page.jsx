import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 shadow-md">
        <p
          data-translate
          className="font-normal tracking-wide text-gray-800 py-10"
        >
          Thank You! Your donation has been successfully processed.
        </p>
        <Link href="/" className="flex justify-end">
          <button
            data-translate
            className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex text-gray-400 text-sm font-semibold gap-1"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
