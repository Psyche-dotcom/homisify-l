import React from "react";

const StepCard = ({ imgUrl, text }) => {
  return (
    <div
      className="flex flex-col items-center border-2 border-orange-col rounded-3xl py-4 px-8"
      style={{ minWidth: "80px", maxWidth: "150px" }}
    >
      <img
        src={imgUrl}
        alt={imgUrl}
        className="w-full"
        style={{ maxHeight: "70px" }}
      />
      <h4 className="font-bold text-grey-txt">{text}</h4>
    </div>
  );
};

export default StepCard;
