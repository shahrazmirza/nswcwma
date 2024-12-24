import React from "react";

const AlertOverlay = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10  shadow-md">
        <p
          data-translate
          className="font-normal tracking-wide text-gray-800 py-10"
        >
          {message}
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex text-gray-400 text-sm font-semibold gap-1"
            data-translate
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertOverlay;
