import React from "react";
const ManufacturerOptions = () => {
  return (
    <div className="w-72 shadow-sm bg-white">
      <div className="flex justify-center bg-gray-200 py-1 px-4">
        <span className="text-base font-semibold">Manufacturer</span>
      </div>
      <div>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Intas Pharmaceutical Ltd
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Alkem Laboratories Ltd
        </p>
      </div>
    </div>
  );
};

export default ManufacturerOptions;
