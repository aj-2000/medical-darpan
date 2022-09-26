import React from "react";
import { FiSend } from "react-icons/fi";
const ProductItem = () => {
  return (
    <div className="border-[1px] border-gray-300 rounded ">
      <div className="flex flex-col bg-white gap-y-4 rounded border-red-900 border-b-[10px]  ">
        <div className="px-2 pt-2 ">
          <img
            alt="product img"
            className="rounded"
            loading="lazy"
            src="https://5.imimg.com/data5/SC/NG/PA/SELLER-85234384/febiflu-500x500.jpg"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-center font-semibold">
            {"Favipiravir 400mg (Fabiflu) Tablets"}
          </span>
          <div className="">
            <span className="text-sm text-red-900 font-bold">Rs 1,775 </span>
            <span className="">/</span>
            <span className="text-sm text-gray-500"> stripe</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-center font-normal">
            Glenmark Pharmaceutical Limited
          </span>
          <span className="text-[10px]  text-gray-500 uppercase text-center">
            Parvat Patiya, Sujrat, Gujrat
          </span>
        </div>
        <div className="border-t-[1px] text-center border-gray-300  text-teal-700 flex gap-x-1 justify-center items-center py-2">
          <span>
            <FiSend size={20} />
          </span>
          <span className="font-medium text-base">Contact Supplier</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
