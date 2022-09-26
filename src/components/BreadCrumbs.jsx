import React from "react";

const BreadCrumbs = () => {
  return (
    <div className="w-full flex gap-x-1 text-xs p-2">
      <span className="text-gray-600">Medical Darpan</span>
      <span className="text-gray-600">{">"}</span>
      <span className="text-gray-600">Search</span>
      <span className="text-gray-600">{">"}</span>
      <span className="font-medium">FabiFlu Tablet</span>
    </div>
  );
};

export default BreadCrumbs;
