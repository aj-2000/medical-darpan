import React from "react";
import BusinessTypeOptions from "./BusinessTypeOptions";
import ManufacturerOptions from "./ManufacturerOptions";
import PrescriptionNonPrecriptionOptions from "./PrescriptionNonPrecrisption";
import RelatedBrandsOptions from "./RelatedBrandsOptions";
import RelatedCategoryOptions from "./RelatedCategoryOptions";
import StrengthOptions from "./StrengthOptions";

const SideMenu = () => {
  return (
    <div className="pb-8 flex flex-col gap-y-8 overflow-scroll">
      <div>
        <RelatedCategoryOptions />
      </div>
      <div>
        <RelatedBrandsOptions />
      </div>
      <div>
        <BusinessTypeOptions />
      </div>
      <div>
        <StrengthOptions />
      </div>
      <div>
        <ManufacturerOptions />
      </div>
      <div>
        <PrescriptionNonPrecriptionOptions />
      </div>
    </div>
  );
};

export default SideMenu;
