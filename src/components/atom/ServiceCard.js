import React from "react";

const ServiceCard = ({ imgUrl, text }) => {
  return (
    <div
      className="flex flex-col items-center border-border-g bg-home-grey customwidth  hover:border-orange-col rounded-3xl py-4 px-8"
      style={{ width: "100%", borderWidth: "1px" }}
    >
      <img
        src={imgUrl}
        alt={imgUrl}
        className="w-full"
        style={{ maxHeight: "70px", width: "70px", maxWidth: "100%" }}
      />
      <h4 className="font-bold text-grey-txt hover:text-orange-col">{text}</h4>
    </div>
  );
};

export default ServiceCard;
