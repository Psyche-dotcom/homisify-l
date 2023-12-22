import React from "react";

const PropertyCard = ({ img, cat, type, price, location, size }) => {
  return (
    <div
      className=" rounded-3xl border-orange-col bg-white p-2 flex flex-col gap-4"
      style={{ borderWidth: "1px", maxWidth: "260px" }}
    >
      <img
        src={img}
        alt="properties"
        className="rounded-3xl"
        style={{ width: "255px", height: "201px" }}
      />
      <div className="flex gap-4">
        <p className="p-1 bg-orange-li text-grey-txt rounded-lg text-sm">
          {cat}
        </p>
        <p className="p-1 bg-orange-li text-grey-txt rounded-lg text-sm">
          {type}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className=" text-2xl font-bold">{price}</h3>
        <p className=" text-orange-col">{location}</p>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="p-1  bg-home-grey rounded-lg flex gap-1 items-center">
          <img src="/images/occupied-bed.png" alt="bed" />
          <p className="text-xs">{size}</p>
        </div>
        <div className="p-1  bg-home-grey rounded-lg flex gap-1 items-center">
          <img src="/images/occupied-bed.png" alt="bed" />
          <p className=" text-xs">{size}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
