import CustomTag from "@/components/atom/CustomTag";
import CustomTagWhite from "@/components/atom/CustomTagWhite";
import React from "react";

const PropertyDetails = ({
  propertyTitle,
  location,
  price,
  bedNo,
  bathNO,
  tolNO,
}) => {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h2 className="font-bold text-2xl">{propertyTitle}</h2>
      <div className="flex gap-1 items-center">
        <img src="/images/location.png" alt="location" />
        <p className="text-grey-prop">{location}</p>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <img src="/images/us-dollar-circled.png" alt="price" />
            <p className=" text-orange-col">{price}</p>
          </div>
          <CustomTag
            text={bedNo + " bedrooms"}
            imgUrl={"/images/empty-bed.png"}
          />
          <CustomTag
            text={bathNO + " bathrooms"}
            imgUrl={"/images/bathtub.png"}
          />
          <CustomTag text={tolNO + " Toilets"} imgUrl={"/images/bathtub.png"} />
        </div>
        <div className="flex gap-2 items-center">
          <CustomTagWhite text={"Save"} imgUrl={"/images/bookmark.png"} />
          <CustomTagWhite text={"Share"} imgUrl={"/images/share.png"} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
