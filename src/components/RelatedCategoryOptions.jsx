import React from "react";
import { ImCross } from "react-icons/im";
const RelatedCategoryOptions = () => {
  return (
    <div className="min-w-full shadow-sm bg-white">
      <div className="flex justify-center bg-gray-200 py-1 px-4">
        <span className="text-base font-semibold">Related Category</span>
      </div>
      <div>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Paracetabol Tablets
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Paracetabol Syrup
        </p>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Paracetabol Powder
        </p>
        <div className="flex mx-1 font-normal text-sm px-1 py-1 justify-between items-center text-white bg-teal-400 rounded p-1 gap-x-2">
          <span>Aceclofenac</span>
          <span>
            <ImCross />
          </span>
        </div>
        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Magaladrate Simethicone Oral Suspension{" "}
        </p>

        <p className="flex font-normal justify-start text-sm px-2 py-1">
          Mefenamic Paracetamol Syrup
        </p>
      </div>
    </div>
  );
};

export default RelatedCategoryOptions;
