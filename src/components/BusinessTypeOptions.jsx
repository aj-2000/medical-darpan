import React from "react";
const BusinessTypeOptions = () => {
  return (
    <div className="w-72 shadow-sm bg-white">
      <div className="flex justify-center bg-gray-200 py-1 px-4">
        <span className="text-base font-semibold">Business Type</span>
      </div>
      <div>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Wholesaler
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Manufacturer
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Retailer
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Exporter
        </p>
      </div>
    </div>
  );
};

export default BusinessTypeOptions;
