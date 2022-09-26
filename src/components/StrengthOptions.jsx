import React from "react";
import { ImCross } from "react-icons/im";
const StrengthOptions = () => {
  return (
    <div className="w-72 shadow-sm bg-white">
      <div className="flex justify-center bg-gray-200 py-1 px-4">
        <span className="text-base font-semibold">Strength</span>
      </div>
      <div>
        <div className="flex font-normal text-sm px-1 py-1 justify-between items-center text-white bg-teal-400 rounded p-1 mt-2 mx-1 gap-x-2">
          <span>500 mg</span>
          <span>
            <ImCross />
          </span>
        </div>

        <p className="flex font-normal justify-start text-sm px-2 py-1">
          600 mg
        </p>
      </div>
    </div>
  );
};

export default StrengthOptions;
