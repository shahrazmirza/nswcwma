import Link from "next/link";
import React from "react";

const cancelPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 shadow-md">
        <p className="font-normal tracking-wide text-gray-800 py-10">
          Unfortunately, your payment has been failed.
        </p>
        <Link href="/" className="flex justify-end">
          <button className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex text-gray-400 text-sm font-semibold gap-1">
            Try again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cancelPage;
