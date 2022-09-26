import React from "react";
import { ImCross } from "react-icons/im";
const AppliedFilters = () => {
  return (
    <div className="flex px-2 gap-x-2 items-center">
      <span className="text-lg">Paracetamol</span>
      <span className="text-xs text-gray-600">(128 products)</span>
      <div className="flex items-center text-xs text-white bg-teal-400 rounded p-1 gap-x-2">
        <span>Acelofenac</span>
        <span>
          <ImCross />
        </span>
      </div>
      <div className="flex items-center text-xs text-white bg-teal-400 rounded p-1 gap-x-2">
        <span>500 mg</span>
        <span>
          <ImCross />
        </span>
      </div>
      <span className="text-xs text-red-800">Remove All</span>
    </div>
  );
};

export default AppliedFilters;
